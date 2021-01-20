class NetController extends Controller {
    private ws: WS;
    private sequence: number = 1;
    private dispatcher: egret.EventDispatcher;
    /**用来存储对应sequence的回调函数，在得到服务器返回后执行*/
    private callBackPool = {};

    public constructor(channel: CommandChannel = null) {
        super(channel);
        this.addCommand(ConstData.NET_CONNECT, this.connect, this);
        this.addCommand(ConstData.NET_CLOSE, this.close, this);
        this.addCommand(ConstData.NET_OVER_CLOSE, this.overClose, this);
        this.addCommand(ConstData.NET_READDATA, this.readData, this);
        this.addCommand(ConstData.NET_ADDLISTENER, this.addListener, this);
        this.addCommand(ConstData.NET_SENDDATA, this.sendData, this);
        this.addCommand(ConstData.NET_SHOWSTATE, this.showState, this);
        this.addCommand(ConstData.NET_CLEAR_HEART_BEAT, this.clearHeartBeat, this);
        this.addCommand(ConstData.NET_DESTROY, this.destroy, this);
        this.addCommand(ConstData.NET_LOGIN, this.login, this);
    }

    public init() {
        this.ws = new WS(this.channel);
        this.dispatcher = new egret.EventDispatcher();
        // this.addListener(NetCommands.ROOM_NOTIFY);
        this.addListener(NetCommands.MSG_TYPE_OF_CALL_SCORE);//抢地主叫分
        this.addListener(NetCommands.MSG_TYPE_OF_ROLE_GRAB);//广播一个玩家是否叫地主(3014)
        this.addListener(NetCommands.MSG_TYPE_OF_JIA_BEI);//广播询问是否加倍(3030)
        this.addListener(NetCommands.MSG_TYPE_OF_JIA_BEI_RESULT);//广播一个角色是否加倍(3032)
        this.addListener(NetCommands.MSG_TYPE_OF_SEND_BOTTOM_CARDS);//广播地主和底牌(3016)
        this.addListener(NetCommands.MSG_TYPE_OF_SCORE_CHANGE);//当前房间倍数(3018)
        this.addListener(NetCommands.MSG_TYPE_OF_TIME_TICKER);//广播询问一个玩家出牌(3020)
        this.addListener(NetCommands.MSG_TYPE_OF_PLAY_CARD_SUCCESS);//广播一个玩家出的牌(3024)
        this.addListener(NetCommands.TYPE_OF_TABLE_BRODCAST);//游戏广播
        this.addListener(NetCommands.MSG_TYPE_OF_PVP_SUCCESS);//确认匹配
        this.addListener(NetCommands.MSG_TYPE_OF_SEND_CARD);//发牌
        this.addListener(NetCommands.MSG_TYPE_OF_RECON_GAME);//断线重连
        this.addListener(NetCommands.MSG_TYPE_OF_GET_CARDS);//获取当前牌局信息
        this.addListener(NetCommands.MSG_TYPE_OF_HEART_BEAT);//心跳包
        this.addListener(NetCommands.MSG_TYPE_OF_PLAY_ERROR);//出牌错误
        this.addListener(NetCommands.MSG_TYPE_OF_GAME_OVER);//广播结算(3028)

        /**牛牛协议 */
        this.addListener(NetCommands.NIUNIU_SEND_CARD);//开始发牌4010
        this.addListener(NetCommands.NIUNIU_CALL_SCORE);//广播询问叫庄4012
        this.addListener(NetCommands.NIUNIU_QIANG_ZHUANG_BROAD);//广播一个玩家叫庄4014
        this.addListener(NetCommands.NIUNIU_ROLE_GRAB_ID);//广播庄家4016
        this.addListener(NetCommands.NIUNIU_ROLE_XIAZHU_BROAD);//广播询问下注4018
        this.addListener(NetCommands.NIUNIU_ROLE_XIAZHU_RESULT);//广播一个玩家下注4020
        this.addListener(NetCommands.NIUNIU_JIESUAN);//广播结算4024

        /**百人牛牛协议 */
        this.addListener(NetCommands.BAI_NIUNIU_ROLE_GRAB_ID);//广播当前庄家5010
        this.addListener(NetCommands.BAI_NIUNIU_ROLE_XIAZHU_BROAD);//广播询问下注5014
        this.addListener(NetCommands.BAI_NIUNIU_ROLE_XIAZHU_RESULT);//广播一个角色下注5016
        this.addListener(NetCommands.BAI_NIUNIU_JIESUAN);//广播结算5020
    }

    /**
     * 登录
     */
    private login(): void {
        this.ws && this.ws.login();
    }

    /** 
     * 清除心跳包
    */
    private clearHeartBeat(): void {
        this.ws && this.ws.clearHeartBeat();
    }

    /** 
     * socket连接
    */
    private connect(data): void {
        // this.ws.connect("ws://192.168.3.25:8888/echo?token=aaabbbcccf50&&addr="+Player.instance.addr);
        // this.ws.connect(data);
    }

    /** 
     * 关闭socket连接
    */
    private close(): void {
        // console.log('关闭了连接');
        var data = new BaseMsg();
        data.MsgType = NetCommands.MSG_TYPE_WS_CLOSE;
        this.sendData([data]);
        this.clearHeartBeat();
        this.ws && this.ws.close();
    }

    /** 
     * 结算关闭socket连接
    */
    private overClose(): void {
        console.log('结算关闭了连接');
        var data = new BaseMsg();
        data.MsgType = NetCommands.MSG_TYPE_OF_OVER;
        this.sendData([data]);
        this.clearHeartBeat();
        this.ws && this.ws.close();
    }

    /**读取数据*/
    private readData(msg: any): void {
        let seq = <number>msg.Seq;
        if (seq) {
            let callBack = this.callBackPool[seq];
            if (callBack) {
                callBack.callback.call(callBack.thisObj, msg);
                this.callBackPool[seq] = null;
            }
            delete this.callBackPool[seq];
        } else //没有seq说明是服务器主动发送的
        {
            this.dispatcher.dispatchEventWith(msg.MsgType, false, msg);
        }
    }

    /**接收到数据时都事件监听*/
    private addListener(command): void {
        this.dispatcher.addEventListener(command, this.onReciveMsg, this);
    }

    /**发送数据*/
    private sendData(params: Array<any>): void {
        if (this.ws == null) return;
        let data: egret.ByteArray = params[0];
        let callback: Function = params[1];
        let thisObj = params[2];
        // data.Seq = this.sequence++;
        this.ws.sendData(data);

        if (callback && thisObj) {
            // this.callBackPool[data.Seq] = {callback:callback, thisObj:thisObj};
        }
    }

    /**打印*/
    private showState(s: string): void {
        // console.log(s);
    }

    /**收到服务器消息*/
    private onReciveMsg(evt: egret.Event) {
        let data: BaseMsg = evt.data;
        let msgType: any = data.MsgType + '';
        // console.warn('onReciveMsg', msgType);
        switch (msgType) {
            // case NetCommands.ROOM_NOTIFY:
            //     //this.onReciveRoomNotify(data.content);
            //     break;
            case NetCommands.MSG_TYPE_OF_HEART_BEAT://心跳包
                WS.heartBeatCount = 0;
                WS.connectTime = ConfigData.RECONECTTIME;
                break;
            case NetCommands.MSG_TYPE_OF_PLAY_ERROR://出牌错误
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_PLAY_ERROR, data);
                break;
            case NetCommands.MSG_TYPE_OF_RECON_GAME://断线重连
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_RECON_GAME, data);
                break;
            case NetCommands.MSG_TYPE_OF_GET_CARDS://获取当前牌局信息
                // this.channel.postCommand();
                break;

            case NetCommands.MSG_TYPE_OF_CALL_SCORE://广播询问一个玩家是否叫地主(需要对比是否是自己)(3012)
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CALL_LANDlORD, data);
                break;
            case NetCommands.MSG_TYPE_OF_ROLE_GRAB://广播一个玩家是否叫地主(3014)
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_ROLE_GRAB, data);
                break;
            case NetCommands.MSG_TYPE_OF_JIA_BEI://广播询问是否加倍(3030)
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_JIA_BEI, data);
                break;
            case NetCommands.MSG_TYPE_OF_JIA_BEI_RESULT://广播一个角色是否加倍(3032)
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_JIA_BEI_RESULT, data);
                break;
            case NetCommands.MSG_TYPE_OF_SEND_BOTTOM_CARDS://发底牌,抢地主结束
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_GRAB_SUCCESS, data);
                break;
            case NetCommands.MSG_TYPE_OF_SCORE_CHANGE: //倍数变化
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_SCORE_CHANGE, data);
                break;
            case NetCommands.MSG_TYPE_OF_SEND_CARD://发牌
                // this.channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_SET_PLAYER,{'cardIndexList':CardUtils.getInstance().getIndexArr(data.Cards)});
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_SET_CARD, data);
                break;
            case NetCommands.MSG_TYPE_OF_TIME_TICKER://广播询问一个玩家出牌(3020)
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_PLAY_GAME, data);
                break;
            case NetCommands.MSG_TYPE_OF_PLAY_CARD_SUCCESS://出牌广播
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_ON_PLAY_CARD, data);
                break;
            case NetCommands.MSG_TYPE_OF_GAME_OVER://游戏结束 结算分数
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_GAME_OVER, data);
                break;
            case NetCommands.NIUNIU_SEND_CARD:////开始发牌4010
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_SET_CARD, data);
                break;
            case NetCommands.NIUNIU_CALL_SCORE://广播询问叫庄(4012)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_CALL_LANDlORD, data);
                break;
            case NetCommands.NIUNIU_ROLE_XIAZHU_BROAD://广播询问下注(4018)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_XIAZHU, data);
                break;
            case NetCommands.NIUNIU_QIANG_ZHUANG_BROAD://广播一个玩家叫庄(4014)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_QIANG_ZHUANG_BROAD, data);
                break;
            case NetCommands.NIUNIU_ROLE_GRAB_ID://广播庄家(4016)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_GRAB_SUCCESS,data);
                break;
            case NetCommands.NIUNIU_ROLE_XIAZHU_RESULT://广播一个玩家下注(4020)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_SCORE_CHANGE, data);
                break;                
            case NetCommands.NIUNIU_JIESUAN://广播结算(4024)
                this.channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_NIU_JIESUAN, data);
                break;

            //百人牛牛
            case NetCommands.BAI_NIUNIU_ROLE_GRAB_ID://广播庄家(5010)
                this.channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_GRAB_SUCCESS,data);
                break;
            case NetCommands.BAI_NIUNIU_ROLE_XIAZHU_BROAD://广播询问下注(5014)
                this.channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_BROAD_XIAZHU, data);
                break;
            case NetCommands.BAI_NIUNIU_ROLE_XIAZHU_RESULT://广播一个角色下注(5016)
                this.channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_XIAZHU, data);
                break;
            case NetCommands.BAI_NIUNIU_JIESUAN://广播结算(5020)
                this.channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_JIESUAN, data);
                break;
        }
    }

    /**房间消息*/
    private onRecivePlayGame(data): void {
        //0是第一次发牌, 1是游戏中, 2是结算分数, 3是抢地主
        let subMsgType = data.SubMsgType;
        // if(subMsgType!=23&&subMsgType!=20){
        //     console.warn('subMsgType', subMsgType);
        // }
        if (subMsgType == undefined || subMsgType == 8) return;
        switch (subMsgType) {
            case NetCommands.MSG_TYPE_OF_CHAT://聊天广播
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CHAT, data);
                break;
            case NetCommands.MSG_TYPE_OF_CALL_SCORE://抢地主
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CALL_LANDlORD, data);
                break;
            case NetCommands.MSG_TYPE_OF_SEND_BOTTOM_CARDS://发底牌,抢地主结束
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_GRAB_SUCCESS, data);
                break;
            case NetCommands.MSG_TYPE_OF_PASS://过牌广播
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_ON_PASS_CARD, data);
                break;
            case NetCommands.MSG_TYPE_OF_PLAY_ERROR: //出牌错误
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CARD_ERROR, data);
                break;
            case NetCommands.MSG_TYPE_OF_INVAILD://对局无效
                this.channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_INVAILD);
                break;
        }
    }

    /**销毁*/
    public destroy(): void {
        this.ws && this.ws.destroy();
        this.dispatcher = null;
        this.callBackPool = null;
    }
}