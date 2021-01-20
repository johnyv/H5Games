class Battle extends eui.Component implements eui.UIComponent {
    // private timeTxt: eui.Label;
    // private findTxt: eui.Label;
    private _channel: CommandChannel;
    private _isBattle: boolean;
    private play_btn: eui.Button;
    private pass_btn: eui.Button;
    private tip_btn: eui.Button;
    private _player: Player;
    private _myCardBox: egret.Sprite = null;
    //地主底牌显示容器
    private _dizhuCardBox: egret.Sprite = null;
    private my_card_box: egret.Sprite = new egret.Sprite();
    private left_card_box: egret.Sprite = new egret.Sprite();
    private right_card_box: egret.Sprite = new egret.Sprite();
    private _dizhuBmp: egret.Bitmap;
    private _dizhuBmp_small: egret.Bitmap;
    private _finishFunc: Function;
    private return_btn: eui.Button;
    private _gap: number = 32;
    private _horizontalNum = 9;//横向最大展示的牌数
    private _maxHorizontalWidth = 0;//横向的最大距离
    private coin_bg: eui.Image;
    private talk_btn: eui.Button;
    private talk_bg: eui.Rect;
    private talk_scroller: eui.Scroller;
    private talk_group: eui.Group;
    private left_talk: eui.Group;
    private left_talk_txt: eui.Label;
    private right_talk: eui.Group;
    private right_talk_txt: eui.Label;
    private my_talk: eui.Group;
    private my_talk_txt: eui.Label;
    private bg_rect: eui.Rect;
    private snd_btn: eui.CheckBox;
    private music_btn: eui.CheckBox;
    private difen_txt: eui.Label;
    private beishu_txt: eui.Label;
    private moshi_txt: eui.Label;
    private _grabTimer: egret.Timer;//抢地主计时器
    private _jiabeiTimer: egret.Timer;//是否加倍计时器
    private _gameTimer: egret.Timer;//打牌计时器

    public constructor(channel: CommandChannel) {
        super();
        this._channel = channel;
        this._player = Player.instance;
        this._myCardBox = new egret.Sprite();
        this._dizhuCardBox = new egret.Sprite();
        this._myCardBox.y = 160;
        this.addChild(this._myCardBox);
        this.addChild(this._dizhuCardBox);
        this.addChild(this.left_card_box);
        this.addChild(this.my_card_box);
        this.my_card_box.x = 0;
        this.my_card_box.y = 530;
        this.addChild(this.right_card_box);
        this._dizhuBmp = new egret.Bitmap(RES.getRes('landLord_png'));
        this._dizhuBmp_small = new egret.Bitmap(RES.getRes('landLord_png'));
        this._dizhuBmp_small.width = 62;
        this._dizhuBmp_small.height = 63;
        this._maxHorizontalWidth = this._horizontalNum * this._gap + ConfigData.SHOWCARDWIDTH;
        this._grabTimer = new egret.Timer(1000);
        this._grabTimer.addEventListener(egret.TimerEvent.TIMER, this.jiaodizhuFunc, this);
        this._jiabeiTimer = new egret.Timer(1000);
        this._jiabeiTimer.addEventListener(egret.TimerEvent.TIMER, this.jiabeiFunc, this);
        this._gameTimer = new egret.Timer(1000);
        this._gameTimer.addEventListener(egret.TimerEvent.TIMER, this.gameTimerFunc, this);
    }

    public init(): void {
        this.setBalance();
        this.call_txt && (this.call_txt.visible = false);
        // this.score_txt && (this.score_txt.text = '底注：' + this._player.baseNum);
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['battle_snd_mp3']);
        this.snd_btn && (this.snd_btn.selected = this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_GET_PLAY_SND));
        this.music_btn && (this.music_btn.selected = this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_GET_PLAY_MUSIC));
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
        instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
            switch (partName) {
                case "snd_btn":
                    this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
                    this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_IS_PLAY_SND, this.snd_btn.selected);
                    break;
                case "music_btn":
                    this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
                    this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_IS_PLAY_MUSIC, this.music_btn.selected);
                    break;
            }
        }, this);
    }

    private _timer: egret.Timer;
    private _count: number;

    protected childrenCreated(): void {
        super.childrenCreated();
        CardUtils.instance.setPosByDir({
            left: { x: this.left_call_txt.x, y: this.left_call_txt.y },
            right: { x: this.right_call_txt.x, y: this.right_call_txt.y }, my: { x: this.call_txt.x, y: this.call_txt.y }
        });
        GameTools.addGrayFilter([this.tuoguan_btn]);
        this.right_card_box.x = this.right_head_img.x - this.right_head_img.width / 2 - 50;
        this.right_card_box.y = 144;
        this.left_card_box.x = this.left_head_img.x + this.left_head_img.width + 50;
        this.left_card_box.y = 144;
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['欢迎来到斗地主', 500, -1, 57]);
        this.play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playCard, this);
        this.pass_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.passCard, this);
        this.tip_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipCard, this);
        this.no_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wantDizhu, this);
        this.score1_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wantDizhu, this);
        this.score2_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wantDizhu, this);
        this.score3_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wantDizhu, this);
        this.jiabei_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiabei, this);
        this.bujiabei_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jiabei, this);
        this.return_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnGround, this);
        this.talk_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
            this.talk_bg.visible = !this.talk_bg.visible;
            this.talk_scroller.visible = !this.talk_scroller.visible;
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
            console.log(evt.target.name, evt.currentTarget.name);
            if (evt.target != this.talk_btn && evt.target != this.talk_group && evt.target.name.indexOf("item") < 0) {
                this.talk_bg.visible = false;
                this.talk_scroller.visible = false;
            }
        }, this);
        this.talk_group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.talkFunc, this);
        // this.setChildIndex(this.findTxt, this.numChildren - 1);
        // this.setChildIndex(this.timeTxt, this.numChildren - 1);
        // this.stage && this.stage.addEventListener(egret.Event.ACTIVATE, this.activate, this);
        // this.stage && this.stage.addEventListener(egret.Event.DEACTIVATE, this.deactivate, this);
        this.setBalance();
        this.addChild(this.talk_bg);
        this.addChild(this.talk_btn);
        this.addChild(this.talk_scroller);
    }

    private talkTime: number = 0;
    private talkObj: Object = {
        'item_0': '快点吧，等到花儿都谢了～',
        'item_1': '刚刚手抖了，不好意思哈！',
        'item_2': '你的牌打得也太好了！',
        'item_3': '这一手牌，有毒啊～～～',
        'item_4': '和你合作真的是太愉快了',
        'item_5': '不要走，我们决战到天亮',
        'item_6': '再见了，我会再回来的！',
        'item_7': '不好意思，我要离开一会儿'
    };
    /**聊天功能*/
    private talkFunc(evt: egret.TouchEvent): void {
        let chats = this.talkObj[evt.target.name];
        if (chats) {
            let time: number = (new Date()).getTime();
            if (time - this.talkTime < 2500) {
                this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['请不要频繁发送消息', 500]);
                return;
            }
            this.talkTime = time;
            var data = new BaseMsg();
            data.MsgType = NetCommands.MSG_TYPE_OF_CHAT;
            data.Data = { "Chats": chats };
            this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SENDDATA, [data]);
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
            this.talk_bg.visible = false;
            this.talk_scroller.visible = false;
            this.setChat(this.my_talk, this.my_talk_txt, chats)
        }
    }

    /** 
     * 收到聊条信息
    */
    public onBattleChat(data): void {
        let seatNo = data.SeatNo + 1;
        if (seatNo != this._player.seatNo) {
            console.log(data, 11111, this._player.seatNo);
            if (seatNo == this._player.leftSeatNo) this.setChat(this.left_talk, this.left_talk_txt, data.Msg);
            else if (seatNo == this._player.rightSeatNo) this.setChat(this.right_talk, this.right_talk_txt, data.Msg);
            // seatNo==this._player.leftSeatNo?this.setChat(this.left_talk,this.left_talk_txt,data.Msg):this.setChat(this.right_talk,this.right_talk_txt,data.Msg);    
        }
    }

    /**
     * 设置聊天信息
     */
    private setChat(talkBox: eui.Group, talkTxt: eui.Label, chats: string): void {
        talkBox.visible = true;
        talkTxt.text = chats;
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['chat_snd_mp3']);
        setTimeout(() => (talkBox.visible = false), 2500);
    }

    //未激活时间
    private _deacTime;

    /** 
     * 激活处理
    */
    private activate(evt): void {
        if (this._deacTime == undefined) return;
        let passTime = (new Date()).getTime() - this._deacTime;
        if (passTime > 18000) {
            //超过18秒,强行断线，并重连
            this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_CLOSE);
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '重连服务器......');
        }
        this._deacTime = undefined;
    }

    /** 
     * 失去焦点处理
    */
    private deactivate(evt): void {
        this._deacTime = (new Date()).getTime();
    }

    /** 
     * 断掉匹配计时器
    */
    public closeMatchTimer(): void {
        if (this._timer) {
            this._timer.stop();
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }
    }

    public removeView(): void {
        this.closeMatchTimer();
    }

    /** 
     * 继续匹配
    */
    public getCards(): void {

    }

    /** 
     * 对局无效，返回大厅
    */
    public invaild(): void {
        this.clear();
        this.returnGround();
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['对局无效，返回大厅']);
    }

    /*
    *返回 
    */
    public returnGround(): void {
        this._timer && this._timer.stop();
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.BATTLE_VIEW]);
    }

    private setMyCard() {
        this._myCardBox.removeChildren();
        let cardlist: Array<Card> = this._player.cardList;
        var len: number = cardlist.length;
        var dis: number = ConfigData.stageWidth - ConfigData.LEFTGAP - ConfigData.CARDWIDTH;
        var gap: number = dis / (len - 1);
        if (gap > ConfigData.HORCARGAP) {
            gap = ConfigData.HORCARGAP;
        }

        var sx: number = ConfigData.LEFTGAP + (dis - gap * (len - 1) - ConfigData.CARDWIDTH) / 2;

        for (var i: number = 0; i < len; i++) {
            var card: Card = cardlist[i];
            card.isSelect = false;
            card.currentState = false;
            card.onTouch = false;
            card.touchEnabled = true;
            card.y = 528;
            card.x = sx + i * gap;
            this._myCardBox.addChild(card);
            if (i == len - 1 && this._player.seatNo == this._player.dizhuSeatNo) {
                //加上地主标志
                card.addChild(this._dizhuBmp);
                this._dizhuBmp.x = card.width - this._dizhuBmp.width;
            }
        }
    }

    private findTxt;
    public matchPlayers(): void {
        if (!this._timer) {
            this._timer = new egret.Timer(1000);
        }
        if (!this._timer.hasEventListener(egret.TimerEvent.TIMER))
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._count = 60;
        // this.timeTxt.visible = true;
        // this.findTxt.visible = true;
        // this.timeTxt.text = this._count + 's';
        this.findTxt = AnimateManager.instance.createDragonBones(egret.MainContext.instance.stage,"Loading_ske_json","Loading_tex_json","Loading_tex_png").display;
        this.findTxt.x = ConfigData.stageWidth / 2;
        this.findTxt.y = ConfigData.stageHeight / 2;
        this._timer.start();
        let RequestMatchModuleInfo = { type: 1 };
        var data = ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_MATCH, RequestMatchModuleInfo);
        // egret.Tween.get(this.findTxt,{loop:true}).to({alpha:0.7},1000).to({alpha:1.5},1000);
        // this.confirmMatch();
    }

    /** 
     * 有玩家加入桌子
    */
    public joinTable(data): void {

    }

    /** 
     * 有玩家退出桌子
    */
    public exitTable(data): void {

    }

    private my_name_box: eui.Group;
    private my_name_txt: eui.Label;
    private left_name_box: eui.Group;
    private left_name_txt: eui.Label;
    private right_name_box: eui.Group;
    private right_name_txt: eui.Label;

    /**匹配完毕,分配座位,开始发牌*/
    public onMatchPlayerBack(data: BaseMsg): void {
        this.clear();
        this.left_head_img.source = RES.getRes('man_head');
        this.right_head_img.source = RES.getRes('man_head');
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.MATCH_END_VIEW]);
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['start_snd_mp3']);
        // data.PlayerIndexIdDic[this._player.addr]!=undefined&&(this._player.seatNo=(data.PlayerIndexIdDic[this._player.addr]+1));
        let seatObj = new Object();
        for (let addr in data.PlayerIndexIdDic) {
            let addrStr = addr.slice(0, 4) + '...' + addr.slice(addr.length - 4, addr.length);
            seatObj[data.PlayerIndexIdDic[addr]] = addrStr;
        }
        this._player.leftSeatNo = (this._player.seatNo - 1) < 1 ? 3 : (this._player.seatNo - 1);
        this._player.rightSeatNo = (this._player.seatNo + 1) > 3 ? 1 : (this._player.seatNo + 1);
        // this.my_name_txt.text =this._player.seatNo+'号位';
        // let ektNum:number=this._player.balanceEkt;
        // let zhenshu:number=parseInt(ektNum.toString().split('.')[0]);
        // let showStr:string;
        // if(zhenshu>10000){
        //     showStr=(zhenshu/10000).toFixed(2)+'万';
        //     this.my_name_txt.text =showStr;
        // }else
        //     this.my_name_txt.text =ektNum+'';
        this.setBalance();
        this.right_name_txt.text = this._player.rightSeatNo + '号位';
        this.left_name_txt.text = this._player.leftSeatNo + '号位';
        // this.my_name_txt.text =this._player.seatNo+'号位'+'\n'+this._player.balanceEkt;
        // this.right_name_txt.text = seatObj[this._player.rightSeatNo-1];
        // this.left_name_txt.text = seatObj[this._player.leftSeatNo-1];
        // this.my_name_box.visible = true;
        // this.coin_bg.visible=true;
        // this.left_name_box.visible = true;
        // this.right_name_box.visible = true;
        // this.timeTxt.visible = false;
        this.findTxt.visible = false;
    }

    /** 
     * 设置玩家货币余额
    */
    private setBalance(): void {
        let ektNum: number = parseFloat(this._player.gold);
        let zhenshu: number = parseInt(ektNum.toString().split('.')[0]);
        let showStr: string;
        if (zhenshu > 10000) {
            showStr = (zhenshu / 10000).toFixed(2) + '万';
            this.my_name_txt && (this.my_name_txt.text = showStr);
        } else
            this.my_name_txt && (this.my_name_txt.text = ektNum + '');
    }

    //匹配玩家计时
    private onTimer(evt: egret.TimerEvent): void {
        this._count--;
        if (this._count <= 0) {
            this.closeMatchTimer();
            // this.timeTxt.visible = false;
            this.findTxt.visible = false;
            // egret.Tween.removeTweens(this.findTxt);

            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.MATCH_END_VIEW, 0, 0, ConstData.UI_LAYER]);
        }
        // this.timeTxt.text = this._count + 's';
    }

    /** 
     * 清理界面
    */
    public clear(): void {
        this._nowSeatNo = 999;
        this._nowPlaySeatNo = 999;
        this._scoreObj = { 1: 0, 2: 0, 3: 0 };
        this.removeDiCard();
        this._player.clear();
        AnimateManager.instance.removeAnimate();
        this.right_num_txt.text = '17';
        this.left_num_txt.text = '17';
        this.left_head_img.source = RES.getRes('man_head');
        this.right_head_img.source = RES.getRes('man_head');;
        this.my_head_img.source = RES.getRes('man_head');
        this.left_pass.visible = false;
        this.right_pass.visible = false;
        this.my_pass.visible = false;
        this.call_txt.visible = false;
        this.left_call_txt.visible = false;
        this.right_call_txt.visible = false;
        // this.timeTxt.visible = false;
        this.findTxt.visible = false;
        this._isSendOver = false;
        this.score1_btn.visible = false;
        this.score2_btn.visible = false;
        this.score3_btn.visible = false;
        this.no_btn.visible = false;
        this.my_clock.visible = false;
        this.left_clock.visible = false;
        this.right_clock.visible = false;
        this.right_name_txt.text = '?';
        this.left_name_txt.text = '?';
        this.my_time_txt.text = '';
        this.left_time_txt.text = '';
        this.right_time_txt.text = '';
        this.top_box.visible = false;
        this._myCardBox.removeChildren();
        this._dizhuCardBox.removeChildren();
        this.left_card_box.removeChildren();
        this.right_card_box.removeChildren();
        this.my_card_box.removeChildren();
        for (let i = 1; i < 4; i++) {
            this["card_" + i].source = RES.getRes("backPoker");
            // egret.Tween.get(dizhuCard).wait(500).to({ alpha: 1}, 500);
        }
        this.left_num_box.visible = false;
        this.right_num_box.visible = false;
        this.play_btn.visible = false;
        this.tip_btn.visible = false;
        this.pass_btn.visible = false;
        // this.talk_btn.visible=false;
        this.talk_bg.visible = false;
        this.talk_scroller.visible = false;
        this.left_talk.visible = false;
        this.right_talk.visible = false;
        this.my_talk.visible = false;
        this._dizhuBmp.parent && this._dizhuBmp.parent.removeChild(this._dizhuBmp);
        this._dizhuBmp_small.parent && this._dizhuBmp_small.parent.removeChild(this._dizhuBmp_small);
    }

    /** 
     * 断线重连
    */
    public reconGame(data): void {
        //{"MsgType":25,"SeatNo":0,"Cards":[14,2,53,54],"DizhuSeat":0,"DizhuCards":["9","36","30"],"BaseNum":50,"Score":3,"LastCardInfo":{"1":[],"2":[]},"NextSeatNo":1,"LeftCardNum":{"1":10,"2":17}}
        this.closeMatchTimer();
        this.clear();
        this.removeDiCard();
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'seatNo': data.SeatNo + 1 });
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'cardIndexList': data.Cards });
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'baseNum': data.BaseNum });
        data.DizhuCards && this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'dizhuIndexList': data.DizhuCards });
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'timesNum': data.crit });
        this._player.setDizhuSeatNo(data.DizhuSeat + 1);
        let seatNo: number = this._player.seatNo;
        if (this._player.seatNo > 0) {
            data.PlayerIndexIdDic[this._player.addr] != undefined && (this._player.seatNo = (data.PlayerIndexIdDic[this._player.addr] + 1));
            let seatObj = new Object();
            for (let addr in data.PlayerIndexIdDic) {
                let addrStr = addr.slice(0, 4) + '...' + addr.slice(addr.length - 4, addr.length);
                seatObj[data.PlayerIndexIdDic[addr]] = addrStr;
            }
            this._player.leftSeatNo = (this._player.seatNo - 1) < 1 ? 3 : (this._player.seatNo - 1);
            this._player.rightSeatNo = (this._player.seatNo + 1) > 3 ? 1 : (this._player.seatNo + 1);
            let ektNum: number = this._player.gold;
            let zhenshu: number = parseInt(ektNum.toString().split('.')[0]);
            let showStr: string;
            if (zhenshu > 10000) {
                showStr = (zhenshu / 10000).toFixed(2) + '万';
                this.my_name_txt.text = showStr;
            } else
                this.my_name_txt.text = ektNum + '';
            this.right_name_txt.text = seatObj[this._player.rightSeatNo - 1];
            this.left_name_txt.text = seatObj[this._player.leftSeatNo - 1];
        }
        // this.my_name_txt.visible = true;
        // this.coin_bg.visible=true;
        this.left_name_txt.visible = true;
        this.right_name_txt.visible = true;
        this.setMyCard();
        this.call_txt.visible = false;
        this.no_btn.visible = false;
        this.score1_btn.visible = false;
        this.score2_btn.visible = false;
        this.score3_btn.visible = false;
        this.my_clock.visible = false;
        let LeftCardNumObj = data.LeftCardNum;
        if (this._player.dizhuSeatNo > 0) {
            switch (this._player.dizhuSeatNo) {
                case this._player.seatNo:
                    this.setHeadImg(this.my_head_img, this.left_head_img, this.right_head_img);
                    break;
                case this._player.leftSeatNo:
                    this.setHeadImg(this.left_head_img, this.my_head_img, this.right_head_img);
                    break;
                case this._player.rightSeatNo:
                    this.setHeadImg(this.right_head_img, this.my_head_img, this.left_head_img);
                    break;
            }
            for (let i = 0; i < 3; i++) {
                let dizhuCard: Card = CardUtils.instance.getCardFromPool(Player.instance.dizhuCardList[i].index, 54, 76);
                dizhuCard.touchEnabled = false;
                dizhuCard.y = 8;
                dizhuCard.x = 575 + i * (dizhuCard.width + 3);
                this._dizhuCardBox.addChild(dizhuCard);
            }
            let LastCardInfo = data.LastCardInfo;
            let lastSeat: number = (seatNo - 1 > 0 ? seatNo - 1 : 3);
            if (!LastCardInfo[lastSeat - 1] || LastCardInfo[lastSeat - 1].length == 0) {
                let nextSeat: number = (seatNo + 1 < 4 ? seatNo + 1 : 1);
                if (LastCardInfo[nextSeat - 1] && LastCardInfo[nextSeat - 1].length > 0) {
                    this._player.curCards = CardUtils.instance.getCurCardsByIds(LastCardInfo[nextSeat - 1]);
                }
            }
            else {
                this._player.curCards = CardUtils.instance.getCurCardsByIds(LastCardInfo[lastSeat - 1]);
            }
            let seat: any;
            for (seat in LastCardInfo) {
                let cardIdArr = LastCardInfo[seat];
                if (!cardIdArr || cardIdArr.length == 0) {
                    //过牌
                    this.showCards(parseInt(seat) + 1, true);
                } else {
                    //渲染出牌界面
                    let curCards: CurCards = CardUtils.instance.getCurCardsByIds(cardIdArr);
                    this.showCards(parseInt(seat) + 1, false, curCards);
                }
            }
            this.setListener(true);
            this.left_num_box.visible = true;
            this.right_num_box.visible = true;
            this.talk_btn.visible = true;
        } else {
            //未叫地主
            this.left_head_img.source = RES.getRes('man_head');
            this.right_head_img.source = RES.getRes('man_head');
            for (let i: number = 0; i < this._player.dizhuCardList.length; i++) {
                var dizhuCard: Card = this._player.dizhuCardList[i];
                if (i == 0) {
                    dizhuCard.x = (ConfigData.stageWidth - 90) / 2 - ConfigData.CARDWIDTH - 10;
                } else if (i == 1) {
                    dizhuCard.x = (ConfigData.stageWidth - 90) / 2 + ConfigData.CARDWIDTH + 10;
                } else if (i == 2) {
                    dizhuCard.x = (ConfigData.stageWidth - 90) / 2;
                }
                dizhuCard.y = 144;
                this.addChild(dizhuCard);
            }
            // let dizhuCard_1:Card= CardUtils.instance.getCardFromPool(0,90,124);
            // dizhuCard_1.x=(ConfigData.stageWidth-90)/2-ConfigData.CARDWIDTH-10;
            // dizhuCard_1.y= 144;
            // let dizhuCard_2:Card= CardUtils.instance.getCardFromPool(0,90,124);
            // dizhuCard_2.x=(ConfigData.stageWidth-90)/2+ConfigData.CARDWIDTH+10;
            // dizhuCard_2.y=144;
            // let dizhuCard_3:Card= CardUtils.instance.getCardFromPool(0,90,124);
            // dizhuCard_3.x=(ConfigData.stageWidth-90)/2;
            // dizhuCard_3.y=144;
        }
        this.left_num_txt.text = LeftCardNumObj[this._player.leftSeatNo - 1] + '';
        this.right_num_txt.text = LeftCardNumObj[this._player.rightSeatNo - 1] + '';
        if (LeftCardNumObj[this._player.leftSeatNo - 1] < 3) {
            let alertMc: egret.MovieClip = AnimateManager.instance.createAnimate('redAlert', 1, this, -1, 3);
            alertMc.x = 226;
            alertMc.y = 273;
        }
        if (LeftCardNumObj[this._player.rightSeatNo - 1] < 3) {
            let alertMc: egret.MovieClip = AnimateManager.instance.createAnimate('redAlert', 1, this, -1, 3);
            alertMc.x = 1050;
            alertMc.y = 273;
        }
        this._isSendOver = true;
    }

	/**
	 *发牌
	*/
    public setCard(data): void {
        this.talk_btn.visible = true;
        this.closeMatchTimer();
        // egret.Tween.removeTweens(this.findTxt);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['游戏开始', 500, -1, 57]);
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'cardIndexList': CardUtils.instance.getIndexArr(data.cardList) });
        SendCardAnimal.instance.startAnimal(this._player.dizhuCardList, this._myCardBox, () => { this._isSendOver = true; this.top_box.visible = true; }, this);
    }

    private _isSendOver: boolean = false;

    private no_btn: eui.Button;
    private score1_btn: eui.Button;
    private score2_btn: eui.Button;
    private score3_btn: eui.Button;
    private jiabei_btn: eui.Button;
    private bujiabei_btn: eui.Button;
    private my_clock: eui.Group;
    private left_clock: eui.Group;
    private right_clock: eui.Group;
    private top_box: eui.Group;
    private tuoguan_btn: eui.Image;
    private card_1: eui.Image;
    private card_2: eui.Image;
    private card_3: eui.Image;
    /**抢地主*/
    private wantDizhu(e: egret.TouchEvent = null): void {
        this.stopTimer();
        let score = (e ? parseInt(e.target.name) : 0);
        // var data = new BaseMsg();
        // data.MsgType = NetCommands.MSG_TYPE_OF_CALL_SCORE;
        // data.Data = {"Score":score};
        ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_DO_GRAB, { type: score });
        // this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_SENDDATA,{type:score});
        this.no_btn.visible = false;
        this.score1_btn.visible = false;
        this.score2_btn.visible = false;
        this.score3_btn.visible = false;
        this.jiabei_btn.visible = false;
        this.bujiabei_btn.visible = false;
        this.my_clock.visible = false;
        this.call_txt.visible = true;
        // this.call_txt.x=583;
        // this.call_txt.y=421;
        this.call_txt.source = RES.getRes((score == 0 ? 'bujiao' : 'jiaodizhu'));
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['point' + score + '_snd_mp3']);
    }

    /** 
     * 抢地主成功
    */
    public grabLandLordSuccess(data): void {
        //展示一下地主,还有底牌
        let dizhuSeatNo = this._player.getSeatNoByRoleId(data.landId)//data.SeatNo + 1;
        let dizhuCards = CardUtils.instance.getIndexArr(data.cardList);
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'dizhuIndexList': dizhuCards, 'dizhuSeatNo': dizhuSeatNo });
        this.showDizhu(dizhuSeatNo, dizhuCards);
        this.stopTimer();
    }

    /**
     * 广播询问是否加倍（需要比对是否是玩家自己）
    */
    public isJiabei(data): void {
        this._currentData = data;
        this._jiabeiTimer.start();
        this._currentTime_txt && (this._currentTime_txt.text = '');
        if (data.roleId == this._player.roleId) {
            this.my_clock.visible = true;
            this.jiabei_btn.visible = this.bujiabei_btn.visible = true;
        }
    }

    /**
     * 广播玩家是否加倍
    */
    public jiabeiResult(data: com.protobuff.data.IRoleAddCritModule): void {
        //展示一下玩家是否加倍
        if (data.roleId == this._player.roleId) return;
        let seatNo = this._player.getSeatNoByRoleId(data.roleId)//data.SeatNo + 1;
        this.stopJiabeiTimer();
        let jiabeiSnd: string = (data.crit == 1 ? "jiabei" : "bujiabei");
        if (data.crit == 1) {
            this._player.timesNum *= 2;
            this.beishu_txt.text = this._player.timesNum + '';
        }
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, [jiabeiSnd + '_snd_mp3']);
    }

    /**
     *玩家是否加倍 
    */
    private jiabei(e: egret.TouchEvent = null): void {
        this.stopTimer();
        let btnName: string = e.target.name;
        // var data = new BaseMsg();
        // data.MsgType = NetCommands.MSG_TYPE_OF_CALL_SCORE;
        // data.Data = {"Score":score};
        ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_CALL_JIA_BEI, { crit: (btnName == "jiabei" ? 1 : 0) });
        // this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_SENDDATA,{type:score});
        this.no_btn.visible = false;
        this.score1_btn.visible = false;
        this.score2_btn.visible = false;
        this.score3_btn.visible = false;
        this.jiabei_btn.visible = false;
        this.bujiabei_btn.visible = false;
        this.my_clock.visible = false;
        // this.call_txt.visible = true;
        // this.call_txt.x=583;
        // this.call_txt.y=421;
        // this.call_txt.text = (btnName == "jiabei" ? '加倍' : '不加倍');
        // const tw = egret.Tween.get(this.call_txt);
        // tw.to({ alpha: 1 }, 2000, egret.Ease.backInOut).call(() => { this.call_txt.visible = false }, this);
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, [btnName + '_snd_mp3']);
    }

    private jiaodizhuFunc(): void {
        if (!this._currentData) return;
        // console.log(data.waitTime);
        let data = this._currentData;
        let msg = data.waitTime--;
        msg > 20 && (msg = 20);
        // console.log('叫地主倒计时',msg);
        msg < 0 && (msg = 0);
        this._currentTime_txt && (this._currentTime_txt.text = msg + '');
        let dataSeatNo: number = Player.instance.getSeatNoByRoleId(data.roleId);
        if (data.roleId == this._player.roleId) {
            if (msg == 5)
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['bibi_snd_mp3']);
            if (msg <= 0) {
                this._finishFunc && this._finishFunc.call(this);
                this._finishFunc = null;
            }
        }
        if (this._player.dizhuSeatNo > 0 || !this._isSendOver || this._nowSeatNo == dataSeatNo) {
            return;
        }
        this._nowSeatNo = dataSeatNo;
        this.showRect(dataSeatNo, true, msg);
        this.setFinishFunc(dataSeatNo, 1);
        if (data.roleId == this._player.roleId) {
            let maxScore: number = 0;
            for (let i in this._scoreObj) {
                this._scoreObj[i] > maxScore && (maxScore = this._scoreObj[i]);
            }
            for (let i = 1; i < 4; i++) {
                if (i > maxScore) {
                    this['score' + i + '_btn'].visible = true;
                }
                else {
                    this['score' + i + '_btn'].visible = false;
                }
                this.no_btn.visible = true;
                this.my_clock.visible = true;
            }
        }
    }

    private jiabeiFunc(): void {
        if (!this._currentData) return;
        let data = this._currentData;
        let msg = data.waitTime--;
        msg > 20 && (msg = 20);
        // console.log('是否加倍倒计时',msg);
        msg < 0 && (msg = 0);
        this._currentTime_txt && (this._currentTime_txt.text = msg + '');
        let dataSeatNo: number = Player.instance.getSeatNoByRoleId(data.roleId);
        if (data.roleId == this._player.roleId) {
            if (msg == 5)
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['bibi_snd_mp3']);
            if (msg <= 0) {
                this._finishFunc && this._finishFunc.call(this);
                this._finishFunc = null;
            }
        }
        if (this._player.dizhuSeatNo > 0 || !this._isSendOver || this._nowSeatNo == dataSeatNo) {
            return;
        }
        this._nowSeatNo = dataSeatNo;
        this.showRect(dataSeatNo, true, msg);
        this.setFinishFunc(dataSeatNo, 2);
        if (data.roleId == this._player.roleId) {
            let maxScore: number = 0;
            for (let i in this._scoreObj) {
                this._scoreObj[i] > maxScore && (maxScore = this._scoreObj[i]);
            }
            for (let i = 1; i < 4; i++) {
                if (i > maxScore) {
                    this['score' + i + '_btn'].visible = true;
                }
                else {
                    this['score' + i + '_btn'].visible = false;
                }
                this.no_btn.visible = true;
                this.my_clock.visible = true;
            }
        }
    }

    private gameTimerFunc(): void {
        this._playTime--;
        this._currentTime_txt && (this._currentTime_txt.text = this._playTime + '');
        if (this._currentRoleId == this._player.roleId) {
            // !this.my_clock.visible&&(this.my_clock.visible = true);
            // this._currentTime_txt=this.my_time_txt;
            // data.Status!=1&&!this.pass_btn.visible&&(this.pass_btn.visible = true);
            // !this.play_btn.visible&&(this.play_btn.visible = true);
            if (this._playTime == 5)
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['bibi_snd_mp3']);
            if (this._playTime <= 0) {
                this._finishFunc && this._finishFunc.call(this);
                this._finishFunc = null;
            }
        }
    }

    /** 
     * 广播询问一个玩家是否叫地主(需要对比是否是自己)(3012)
    */
    public callLandLord(data): void {
        this._currentData = data;
        this._grabTimer.start();
        this._currentTime_txt && (this._currentTime_txt.text = '');
        // let seatNo=data.SeatNo+1;
        let roleId: number = data.roleId;
        let seatNo = Player.instance.getSeatNoByRoleId(data.roleId);
        let nextSeatNo = (seatNo + 1 > 3 ? 1 : seatNo + 1);
        let score = data.type;
        this._scoreObj[seatNo] = score;
        if (data.roleId == this._player.roleId) {
            let maxScore: number = 0;
            for (let i in this._scoreObj) {
                this._scoreObj[i] > maxScore && (maxScore = this._scoreObj[i]);
            }
            for (let i = 1; i < 4; i++) {
                if (i > maxScore) {
                    this['score' + i + '_btn'].visible = true;
                }
                else {
                    this['score' + i + '_btn'].visible = false;
                }
                this.no_btn.visible = true;//不抢的按钮肯定要一直亮啊，还不准人家不抢么。。
                this.my_clock.visible = true;
            }
        }
    }

    private _currentData;
    /**
     * 广播一个玩家是否叫地主(3014)  
    */
    public roleGrab(data): void {
        this._currentTime_txt && (this._currentTime_txt.text = '');
        // let seatNo=data.SeatNo+1;
        let roleId: number = data.roleId;
        let seatNo = Player.instance.getSeatNoByRoleId(data.roleId);
        let nextSeatNo = (seatNo + 1 > 3 ? 1 : seatNo + 1);
        let score = data.type;
        this._scoreObj[seatNo] = score;
        if (roleId != this._player.roleId) {
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['point' + score + '_snd_mp3']);
            if (seatNo == this._player.leftSeatNo) {
                this.left_call_txt.visible = true;
                this.left_call_txt.source = RES.getRes((score == 0 ? 'bujiao' : 'jiaodizhu'));
            } else if (seatNo == this._player.rightSeatNo) {
                this.right_call_txt.visible = true;
                this.right_call_txt.source = RES.getRes((score == 0 ? 'bujiao' : 'jiaodizhu'));
            }
        }
    }


    /** 倍数发生变化*/
    public onScoreChange(data): void {
        this._player.timesNum = data.crit;
        this.beishu_txt.text = this._player.timesNum + '';
    }

    private call_txt: eui.Image;
    private left_call_txt: eui.Image;
    private right_call_txt: eui.Image;
    private _scoreObj: Object = { 1: 0, 2: 0, 3: 0 };
    private _nowSeatNo: number = 999;

    private stopTimer(): void {
        this._grabTimer.stop();
        this._currentData = null;
    }

    private stopJiabeiTimer(): void {
        this._jiabeiTimer.stop();
        this._currentData = null;
    }

    private my_head_img: eui.Image;
    private right_head_img: eui.Image;
    private left_head_img: eui.Image;
    private left_num_txt: eui.Label;
    private right_num_txt: eui.Label;
    private left_num_box: eui.Group;
    private right_num_box: eui.Group;
    private _startPlay: boolean = false;

    /**展示地主*/
    private showDizhu(dizhu: number, dizhuCards: Array<number>): void {
        this.call_txt.visible = false;
        this.left_call_txt.visible = false;
        this.right_call_txt.visible = false;
        this.no_btn.visible = false;
        this.score1_btn.visible = false;
        this.score2_btn.visible = false;
        this.score3_btn.visible = false;
        this.jiabei_btn.visible = false;
        this.bujiabei_btn.visible = false;
        this.my_clock.visible = false;
        // egret.Tween.get(this.call_txt).to({alpha:0},1000);
        // this.score_txt.text = '底注：' + this._player.baseNum + '   倍数：' + this._player.timesNum;
        this.left_num_box.visible = true;
        this.right_num_box.visible = true;
        let addTopTime: number = 1200;
        switch (dizhu) {
            case this._player.seatNo:
                this.setHeadImg(this.my_head_img, this.left_head_img, this.right_head_img);
                // for (let i = 0; i < 3; i++) {
                //     egret.Tween.removeAllTweens();
                //     egret.Tween.get(this._player.dizhuCardList[i]).wait(1000).to({ y: (ConfigData.stageHeight - ConfigData.CARDHEIGHT) / 2 - 100 + ConfigData.VERCARGAP + ConfigData.CARDHEIGHT }, 150).call(this.finishDizhuAnimate, this);
                // }
                break;
            case this._player.leftSeatNo:
                this.setHeadImg(this.left_head_img, this.my_head_img, this.right_head_img);
                this.left_num_txt.text = '20';
                this.right_num_txt.text = '17';
                // for (let j = 0; j < 3; j++) {
                //     egret.Tween.get(this._player.dizhuCardList[j]).wait(1000).to({ alpha: 0 }, 200).call(this.removeDiCard, this);
                // }
                this.setListener(true);
                break;
            case this._player.rightSeatNo:
                this.setHeadImg(this.right_head_img, this.my_head_img, this.left_head_img);
                this.right_num_txt.text = '20';
                this.left_num_txt.text = '17';
                // for (let k = 0; k < 3; k++) {
                //     egret.Tween.get(this._player.dizhuCardList[k]).wait(1000).to({ alpha: 0 }, 200).call(this.removeDiCard, this);
                // }
                this.setListener(true);
                break;
        }
        for (let i = 1; i < 4; i++) {
            this["card_" + i].source = RES.getRes(Player.instance.dizhuCardList[i - 1].index + '');
            // egret.Tween.get(dizhuCard).wait(500).to({ alpha: 1}, 500);
        }
        this.finishDizhuAnimate();
        // setTimeout(() => {
        //     this._dizhuCardBox.removeChildren();
        //     for (let i = 0; i < 3; i++) {
        //         let dizhuCard: Card = CardUtils.instance.getCardFromPool(Player.instance.dizhuCardList[i].index, 54, 76);
        //         dizhuCard.touchEnabled = false;
        //         // dizhuCard.alpha=0;
        //         dizhuCard.y = 25;
        //         dizhuCard.x = 575 + i * (dizhuCard.width + 3);
        //         this._dizhuCardBox.addChild(dizhuCard);
        //         // egret.Tween.get(dizhuCard).wait(500).to({ alpha: 1}, 500);
        //     }
        // }, addTopTime);
    }

    /** 
     *移除底牌 
    */
    private removeDiCard(): void {
        for (let i: number = 0; i < this._player.dizhuCardList.length; i++) {
            var dizhuCard: Card = this._player.dizhuCardList[i];
            dizhuCard.parent && dizhuCard.parent.removeChild(dizhuCard);
            // CardUtils.getInstance().addCardToPool(dizhuCard);
        }
    }

    /** 
     * 注册牌点击事件
    */
    private setListener(isSet: boolean = false): void {
        this._myCardBox.touchEnabled = isSet;
        if (isSet) {
            if (!this.stage.hasEventListener(egret.TouchEvent.TOUCH_BEGIN))
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginFunc, this);
            if (!this._myCardBox.hasEventListener(egret.TouchEvent.TOUCH_BEGIN))
                this._myCardBox.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCardFunc, this);
            if (!this._myCardBox.hasEventListener(egret.TouchEvent.TOUCH_MOVE))
                this._myCardBox.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveFunc, this);
            if (!this.stage.hasEventListener(egret.TouchEvent.TOUCH_END))
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndFunc, this);
        } else {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginFunc, this);
            this._myCardBox.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCardFunc, this);
            this._myCardBox.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveFunc, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndFunc, this);
        }
    }

    /** 
     * 完成地主牌发牌动画
    */
    private finishDizhuAnimate(): void {
        this.removeDiCard();
        this.setMyCard();
        this.setListener(true);
    }

    /**点击扑克*/
    private cardOnTouch(card: Card): void {
        let myPlayCards = this._player.myPlayCards;
        if (card.onTouch) {
            myPlayCards.push(card);
        } else {
            if (myPlayCards.indexOf(card) !== -1) {
                myPlayCards.splice(myPlayCards.indexOf(card), 1);
            }
        }
    }

    private _dx: number = 0;
    private _oldX: number = 0;
    private _nowDir: number = 0;
    private _dir: number = 0;
    private _startX: number = 0;
    private _move: boolean = false;
    private onBeginFunc(e: egret.TouchEvent): void {
        this._startX = e.stageX;
    }

    private onTouchCardFunc(e: egret.TouchEvent): void {
        var card: Card = <Card>e.target;
        card.isSelect = !card.currentState;
    }

    private onMoveFunc(e: egret.TouchEvent): void {
        var card: Card = <Card>e.target;
        // card.isSelect=true;
        if (!this._move) {
            this._dir = e.stageX - this._startX;
            this._move = true;
        }
        this._nowDir = this._oldX - e.stageX;
        if (this._dir > 0) {
            //往右滑
            if (e.stageX > this._oldX) {
                card.isSelect = !card.currentState;

            } else {
                //往回（左）滑
                card.isSelect = card.currentState;
            }
        }
        else if (this._dir < 0) {
            //往左滑
            if (e.stageX < this._oldX) {
                card.isSelect = !card.currentState;
            } else {
                //往回（右）滑
                card.isSelect = card.currentState;
            }
        }
        this._oldX = e.stageX;
    }

    private onEndFunc(e: egret.TouchEvent): void {
        this._move = false;
        let playSnd: boolean = false;
        for (let i: number = 0; i < this._myCardBox.numChildren; i++) {
            var card: Card = this._myCardBox.getChildAt(i) as Card;
            if (card.isSelect) {
                card.onTouch = !card.onTouch;
                this.cardOnTouch(card);
                card.isSelect = false;
                playSnd = true;
            }
            card.currentState = card.isSelect;
        }
        playSnd && this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['play_card_snd_mp3']);
    }

    private finishPlay(mc: egret.MovieClip): void {
        this._dizhuHead.source = RES.getRes('dizhu_head');
        mc.parent && mc.parent.removeChild(mc);
    }

    private _dizhuHead: eui.Image;
    private setHeadImg(landlordImg: eui.Image, farmerImg1: eui.Image, farmerImg2: eui.Image): void {
        this._dizhuHead = landlordImg;
        let magicMc: egret.MovieClip = AnimateManager.instance.createAnimate("magic", 1, this, 0, 20, this.finishPlay, this);
        magicMc.x = landlordImg.localToGlobal(-3, -25).x;
        magicMc.y = landlordImg.localToGlobal(-3, -25).y;
        setTimeout(() => {
            this._dizhuHead.source = RES.getRes('dizhu_head');
        }, 1500);
        farmerImg1.source = RES.getRes('man_head');
        farmerImg2.source = RES.getRes('man_head');
    }

    private _nowPlaySeatNo: number = 999;
    private _playTime: number = -99;
    private _currentRoleId: number;
    /** 
     * 打牌中
    */
    public onPlayGame(data): void {
        let msg = data.waitTime;
        this._currentRoleId = data.roleId;
        this._playTime = data.waitTime - 2;
        // console.log('出牌计时器。。。',msg);
        msg > 20 && (msg = 20);
        msg < 0 && (msg = 0);
        this._currentTime_txt && (this._currentTime_txt.text = msg + '');
        let dataSeatNo: number = this._player.getSeatNoByRoleId(data.roleId);
        this._gameTimer.start();
        // if (data.roleId == this._player.roleId) {
        //     // !this.my_clock.visible&&(this.my_clock.visible = true);
        //     // this._currentTime_txt=this.my_time_txt;
        //     // data.Status!=1&&!this.pass_btn.visible&&(this.pass_btn.visible = true);
        //     // !this.play_btn.visible&&(this.play_btn.visible = true);
        //     if (msg == 5)
        //         this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['bibi_snd_mp3']);
        //     if (msg <= 0) {
        //         this._finishFunc && this._finishFunc.call(this);
        //         this._finishFunc = null;
        //     }
        // }
        // if (dataSeatNo < 1 || dataSeatNo > 3) {
        //     console.log('这玩家是从哪里出来的', data.SeatNo);
        //     return;
        // }
        // if (this._player.dizhuSeatNo < 1 || this._nowPlaySeatNo == dataSeatNo) {
        //     return;
        // }
        // this._nowPlaySeatNo = dataSeatNo;
        this.showRect(dataSeatNo, false, msg);
        let onMyTurn = data.roleId == this._player.roleId ? true : false;
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'onMyTurn': onMyTurn });
        let cardType: number;
        if (onMyTurn && data.type == 1) {
            this._player.curCards.type = -1;
            this._player.curCards.header = 0;
            this.pass_btn.visible = false;
            cardType = CardUtils.instance.calcCardType(this._player.cardList);
            if (cardType != 0) {
                //分两种情况，第一种情况上局我最大,单牌，对子，三不带，顺子，炸弹，王炸，三带一，三带一对
                // if(cardType<4||cardType==7||cardType==12||cardType==13)
                if (cardType != 6 && cardType != 14) {
                    this._player.myPlayCards.splice(0, this._player.myPlayCards.length);
                    let len: number = this._player.cardList.length;
                    for (let i: number = 0; i < len; i++) {
                        let card: Card = this._player.cardList[i];
                        this._player.myPlayCards.push(card);
                    }
                    this.playCard();
                }
            }
        } else if (onMyTurn) {
            if (!CardUtils.instance.biggerThan(this._player.curCards.type, this._player.curCards.header, this._player.curCards.cards.length, this._player.cardList)) {
                this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['您没有牌大过上家', 1500, -1, 630]);
            } else {
                //玩家剩余的牌能管上上家，那就自动出牌
                cardType = CardUtils.instance.calcCardType(this._player.cardList);
                if (cardType != 0 && (cardType == this._player.curCards.type || cardType == 12 || cardType == 13)) {
                    this._player.myPlayCards.splice(0, this._player.myPlayCards.length);
                    let len: number = this._player.cardList.length;
                    for (let i: number = 0; i < len; i++) {
                        let card: Card = this._player.cardList[i];
                        this._player.myPlayCards.push(card);
                    }
                    this.playCard();
                }
            }
        }
        this.setFinishFunc(dataSeatNo, 0);
    }

    private stopGameTimer(): void {
        this._gameTimer.stop();
        this._playTime = -99;
        this._currentRoleId = null;
    }

    /** 
     * 过牌返回信息处理
    */
    public onPassCard(data): void {
        this.showCards(data.SeatNo + 1, true)
    }


    /** 
     * 出牌错误提示返回
    */
    public playCardError(data): void {
        console.log('错误信息......');
    }

    /** 
     * 出牌信息广播
    * */
    public onPlayCard(data): void {
        let seat = this._player.getSeatNoByRoleId(data.roleId);
        //记录新牌
        let curCards = CardUtils.instance.getCurCards(data.cardList);
        this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'curCards': curCards });
        console.log("出的牌。。。", this._player.curCards);
        if (this._player.curCards.cards.length > 0) {
            if (!this._startPlay) {
                this._startPlay = true;
            }
        }
        this.showCards(seat, false, curCards);
    }

    /** 
     * 
    * */
    /**显示出的牌（包括过）*/
    private showCards(seat: number, showPass: boolean = false, curCards: CurCards = null) {
        if (seat == this._player.seatNo) return;
        !curCards && (curCards = this._player.curCards);
        let whose;
        let cardLen: number = curCards.cards.length;
        let startX = 0;
        switch (seat) {
            case this._player.leftSeatNo:
                whose = 'left';
                break;
            case this._player.rightSeatNo:
                whose = 'right';
                // startX = cardLen > this._horizontalNum ? 0 : (this._maxHorizontalWidth - (cardLen - 1) * this._gap - ConfigData.SHOWCARDWIDTH);
                break;
            case this._player.seatNo:
                whose = 'my';
                // startX = (729 - (cardLen - 1) * this._gap - ConfigData.SHOWCARDWIDTH) / 2;
                break;
        }
        let group = <eui.Group>this[whose + '_card_box'];
        group.removeChildren();
        if (showPass) {
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['pass_snd_mp3']);
            this[whose + '_pass'].visible = true;
            return;
        } else {
            this[whose + '_pass'].visible = false;
            group.visible = true;
        }
        let card: Card;
        cardLen > 0 && this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['play_card_snd_mp3']);
        CardUtils.instance.playCardSnd(whose, curCards);
        let maxCardNum = Math.min(cardLen, this._horizontalNum) - 1;
        startX = whose == 'left' ? 36 : -(maxCardNum * this._gap + ConfigData.SHOWCARDWIDTH);
        for (let i = 0; i < cardLen; i++) {
            card = CardUtils.instance.getCardFromPool(curCards.cards[i], 90, 124);
            group.addChild(card);
            if (whose != 'my') {
                card.y = i <= this._horizontalNum ? 0 : (card.height * 0.4);
                // if (i > this._horizontalNum) {
                //     startX = whose == 'left' ? 36 : -(cardLen*this._gap + card.width);
                // }
                card.x = (i % (this._horizontalNum + 1)) * this._gap + startX;
                // card.x = (i % (this._horizontalNum + 1)) * this._gap + startX;
            } else {
                card.y = 0;
                card.x = i * this._gap + startX;
            }
            if (i == cardLen - 1 && seat == this._player.dizhuSeatNo) {
                //加上地主标志
                card.addChild(this._dizhuBmp_small);
                this._dizhuBmp_small.x = card.width - this._dizhuBmp_small.width;
            }
        }
        if (seat != this._player.seatNo) {
            //更新玩家的计牌数
            let cardNumLabel = (seat == this._player.rightSeatNo ? this.right_num_txt : this.left_num_txt);
            let redName: string = (seat == this._player.rightSeatNo ? 'rightRed' : 'leftRed');
            let cardNum: number = parseInt(cardNumLabel.text) - curCards.cards.length;
            if (cardNum < 3 && !AnimateManager.instance.hasAnimate(redName)) {
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['fast_snd_mp3']);
                //玩家还剩下三张牌，红灯警报
                // redBmp.visible=true;
                let alertMc: egret.MovieClip;
                if (seat == this._player.rightSeatNo) {
                    alertMc = AnimateManager.instance.createAnimate('redAlert', 1, this, -1, 3);
                    alertMc.x = 1456;
                    alertMc.y = 324;
                }
                else {
                    alertMc = AnimateManager.instance.createAnimate('redAlert', 1, this, -1, 3);
                    alertMc.x = 418;
                    alertMc.y = 324;
                }
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['left' + cardNum + '_snd_mp3']);
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['bibi_snd_mp3']);
            }
            cardNumLabel.text = '' + cardNum;
        }
    }

    /**
     * grabType,0:游戏中，1:是否叫地主，2：是否加倍
     */
    private setFinishFunc(index: number, grabType: number = 0): void {
        this._finishFunc = null;
        if (index == this._player.seatNo) {
            this._currentTime_txt = this.my_time_txt;
            if (grabType == 0) {
                if (this._player.curCards.type == CARD_TYPE.NO_CARDS) {
                    //出当前玩家牌中最小的牌
                    this._finishFunc = this.setMinCard;
                }
                else {
                    this._finishFunc = this.passCard;
                }
            } else if (grabType == 1) {
                this._finishFunc = this.wantDizhu;
            }
            else if (grabType == 2) {
                this._finishFunc = this.jiabei;
            }
        }
    }

    private left_pass: eui.Label;
    private right_pass: eui.Label;
    private my_pass: eui.Label;
    private left_time_txt: eui.Label;
    private right_time_txt: eui.Label;
    private my_time_txt: eui.Label;
    private _currentTime_txt: eui.Label;

    private showRect(seatNo: number, isGrabLand: boolean = false, msg): void {
        if (seatNo == this._player.leftSeatNo) {
            this.left_clock.visible = true;
            this._currentTime_txt = this.left_time_txt;
            this.right_clock.visible = false;
            this.my_clock.visible = false;
            this.play_btn.visible = false;
            this.tip_btn.visible = false;
            this.pass_btn.visible = false;
            this.jiabei_btn.visible = false;
            this.bujiabei_btn.visible = false;
            this.left_card_box.visible = false;
            this.left_pass.visible = false;
        } else if (seatNo == this._player.seatNo) {
            this.left_clock.visible = false;
            this.right_clock.visible = false;
            this.my_clock.visible = true;
            this._currentTime_txt = this.my_time_txt;
            if (!isGrabLand) {
                this.pass_btn.visible = true;
                this.play_btn.visible = true;
                this.tip_btn.visible = true;
            }
            this.my_card_box.visible = false;
            this.my_pass.visible = false;
        } else if (seatNo == this._player.rightSeatNo) {
            this.left_clock.visible = false;
            this.right_clock.visible = true;
            this._currentTime_txt = this.right_time_txt;
            this.my_clock.visible = false;
            this.play_btn.visible = false;
            this.tip_btn.visible = false;
            this.pass_btn.visible = false;
            this.jiabei_btn.visible = false;
            this.bujiabei_btn.visible = false;
            this.right_card_box.visible = false;
            this.right_pass.visible = false;
        }
        // this._currentTime_txt && (this._currentTime_txt.text = msg + '');
    }

    /** 
     * 前两个玩家都过，玩家超时，出最小的牌
    */
    private setMinCard(): void {
        if (this._player.cardList.length > 0) {
            for (let i: number = 0; i < this._player.myPlayCards.length; i++) {
                this._player.myPlayCards[i].onTouch = false;
            }
            this._player.myPlayCards.splice(0, this._player.myPlayCards.length);
            let minCards = this._player.cardList[this._player.cardList.length - 1];
            this._player.myPlayCards.push(minCards);
            this.playCard();
        }
    }

    /**点击出牌按钮*/
    private playCard(): void {
        if (!CardUtils.instance.canPlay(this._player.curCards, this._player.myPlayCards)) {
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['您选择的牌不符合规则', 500, -1, 630]);
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['forbid_snd_mp3']);
            return;
        }
        let myPlayCards = this._player.myPlayCards;
        //对出的牌排序
        myPlayCards.sort(function (cardA: Card, cardB: Card) { return cardA.point - cardB.point });
        let type = CardUtils.instance.calcCardType(myPlayCards);
        let header = CardUtils.instance.calcHeadPoker(type, myPlayCards);
        let cardIds = CardUtils.instance.transCardsToIndex(myPlayCards);
        let cardList = CardUtils.instance.transCardsToCardList(myPlayCards);
        // data.Data = { roomId:this._player.roomId, index:this._player.seatNo, curCards:{type:type, header:header, CardId:CardUtils.getInstance().transCardsToIndex(myPlayCards)}};
        // this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_SENDDATA,[data,this.playCardSuccess,this]);
        // this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SENDDATA, [data]);
        ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_PLAY_CARD, { cardList: cardList });
        this._player.removeCards();
        this._dizhuBmp.parent && this._dizhuBmp.parent.removeChild(this._dizhuBmp);
        this.my_card_box.removeChildren();
        this.my_card_box.visible = true;
        let card: Card;
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['play_card_snd_mp3']);
        let curCards = new CurCards(type, header, cardIds);
        CardUtils.instance.playCardSnd('my', curCards);

        let cardLen = curCards.cards.length;
        var dis: number = ConfigData.stageWidth - ConfigData.LEFTGAP - ConfigData.CARDWIDTH;


        var sx: number = ConfigData.LEFTGAP + (dis - this._gap * (cardLen - 1) - ConfigData.CARDWIDTH) / 2;

        for (let i = 0; i < cardLen; i++) {
            card = CardUtils.instance.getCardFromPool(curCards.cards[i], 90, 124);
            this.my_card_box.addChild(card);
            card.y = 0;
            //card.x=i*this._gap+(729-(cardLen-1)*this._gap-ConfigData.SHOWCARDWIDTH)/2;
            card.x = sx + i * this._gap;
            if (i == cardLen - 1 && this._player.isLandlord) {
                //加上地主标志
                card.addChild(this._dizhuBmp_small);
                this._dizhuBmp_small.x = card.width - this._dizhuBmp_small.width;
            }
        }
        this.my_clock.visible = false;
        this.play_btn.visible = false;
        this.tip_btn.visible = false;
        this.pass_btn.visible = false;
        this._finishFunc = null;
        this.setMyCard();
        if (this._player.cardList.length < 3 && this._player.cardList.length > 0) {
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['fast_snd_mp3']);
            //玩家还剩下三张牌，红灯警报
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['left' + this._player.cardList.length + '_snd_mp3']);
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['bibi_snd_mp3']);
        }
        this.stopGameTimer();
    }

    /** 出牌成功*/
    public playCardSuccess(data): void {
    }

    /**点击过*/
    private passCard(): void {
        // var data = new BaseMsg();
        // data.MsgType = NetCommands.MSG_TYPE_OF_PASS;
        // // data.Data = { roomId:this._player.roomId, index:this._player.seatNo, curCards:{ type:CARD_TYPE.PASS_CARDS, cards:[]}};
        // this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SENDDATA, [data]);
        ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_PLAY_CARD);
        let len: number = this._player.myPlayCards.length;
        for (var i: number = 0; i < len; i++) {
            let card: Card = this._player.myPlayCards[i];
            if (card.onTouch) {
                card.onTouch = false;
                card.isSelect = false;
                card.currentState = false;
            }
        }
        this._player.myPlayCards.splice(0, this._player.myPlayCards.length);
        len > 0 && this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['selected_snd_mp3']);
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['pass_snd_mp3']);
        this.my_pass.visible = true;
        this.my_clock.visible = false;
        this.play_btn.visible = false;
        this.tip_btn.visible = false;
        this.pass_btn.visible = false;
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_TIP);
        this.stopGameTimer();
    }

    /**提示出牌 */
    private tipCard(): void {
        let getCardArr: Array<Card> = CardUtils.instance.getBiggerThanCard(this._player.curCards, this._player.cardList, null);
        if (this._player.curCards.type < 0) {
            return;
        }
        if (getCardArr.length > 0) {
            let i: number;
            let len: number = this._player.myPlayCards.length;
            for (i = 0; i < len; i++) {
                let card: Card = this._player.myPlayCards[i];
                if (card.onTouch) {
                    card.onTouch = false;
                    card.isSelect = false;
                    card.currentState = false;
                }
            }
            this._player.myPlayCards.splice(0, this._player.myPlayCards.length);
            for (i = 0; i < getCardArr.length; i++) {
                var card: Card = getCardArr[i];
                card.onTouch = !card.onTouch;
                this.cardOnTouch(card);
                card.isSelect = false;
                card.currentState = card.isSelect;
            }
            this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_SOUND, ['play_card_snd_mp3']);
        } else {
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['您没有牌大过上家', 1500, -1, 630]);
        }
    }

    private gameOverData;
    private springBmp: egret.Bitmap;
    /** 
     * 展示玩家剩余的牌
    */
    public gameOver(data: com.protobuff.data.SettlementModule): void {
        //"RestCardInfo":{"1":[],"2":[]}
        AnimateManager.instance.removeAnimate();
        com.protobuff.data.RoleRoomModule
        this.left_num_box.visible = false;
        this.right_num_box.visible = false;
        this.my_clock.visible = false;
        this.left_clock.visible = false;
        this.right_clock.visible = false;
        this.gameOverData = data;
        this._startPlay = false;
        this._finishFunc = null;
        this.setListener(false);
        this.play_btn.visible = false;
        this.tip_btn.visible = false;
        this.pass_btn.visible = false;
        this.left_pass.visible = false;
        this.right_pass.visible = false;
        this.my_pass.visible = false;
        let myRole: com.protobuff.data.IRoleRoomModule;
        let roleList = data.roleList;
        let restCardInfo = {};
        let seatNo: any;
        for (let i: number = 0; i < roleList.length; i++) {
            let roleRoomModule: com.protobuff.data.IRoleRoomModule = roleList[i];
            if (roleRoomModule.roleId == this._player.roleId) {
                myRole = roleRoomModule;
            }
            seatNo = this._player.getSeatNoByRoleId(roleRoomModule.roleId);
            restCardInfo[seatNo] = CardUtils.instance.getIndexArr(roleRoomModule.cardList);
        }
        for (seatNo in restCardInfo) {
            seatNo = +seatNo;
            if (seatNo != this._player.seatNo) {
                var cardsArr = restCardInfo[seatNo];
                let cardLen: number = cardsArr.length;
                let startX = 0;
                let i = 0;
                let whose;
                switch (seatNo) {
                    case this._player.leftSeatNo:
                        whose = 'left';
                        break;
                    case this._player.rightSeatNo:
                        whose = 'right';
                        // startX = cardLen > this._horizontalNum ? 0 : (this._maxHorizontalWidth - (cardLen - 1) * this._gap - ConfigData.SHOWCARDWIDTH);
                        break;
                    case this._player.seatNo:
                        whose = 'my';
                        break;
                }
                cardsArr.sort(function (cardIdA, cardIdB) { return CardUtils.instance.getPoint(parseInt(cardIdB)) - CardUtils.instance.getPoint(parseInt(cardIdA)) });
                let maxCardNum = Math.min(cardLen, this._horizontalNum) - 1;
                startX = whose == 'left' ? 36 : -(maxCardNum * this._gap + ConfigData.SHOWCARDWIDTH);
                let group = <eui.Group>this[whose + '_card_box'];
                whose != 'my' && group.removeChildren();
                this[whose + '_pass'].visible = false;
                group.visible = true;
                for (i = 0; i < cardLen; i++) {
                    let card: Card;
                    card = CardUtils.instance.getCardFromPool(cardsArr[i], 90, 124);
                    group.addChild(card);
                    card.y = i <= this._horizontalNum ? 0 : (card.height * 0.4);
                    let cardX;
                    // if (i > this._horizontalNum) {
                    //     startX = whose == 'left' ? 36 : -(cardLen*this._gap + card.width);
                    // }
                    cardX = (i % (this._horizontalNum + 1)) * this._gap + startX;

                    // if (whose == 'right') {
                    //     cardX = startX - (i % (this._horizontalNum + 1)) * this._gap;
                    // } else if (whose == 'left') {
                    //     cardX = (i % (this._horizontalNum + 1)) * this._gap + startX;
                    // }
                    egret.Tween.get(card).to({ x: cardX }, i * 50);
                    if (i == cardLen - 1 && seatNo == this._player.dizhuSeatNo) {
                        //加上地主标志
                        card.addChild(this._dizhuBmp_small);
                        this._dizhuBmp_small.x = card.width - this._dizhuBmp_small.width;
                    }
                    // for (i = 0; i < cardLen; i++) {

                    // }
                }
            }
        }
        let showOverViewTime: number = 3000;
        if (data.isSingle == 1) {
            //春天，展示
            if (!this.springBmp) {
                this.springBmp = new egret.Bitmap();
                this.springBmp.texture = RES.getRes('春天');
                this.springBmp.x = (ConfigData.stageWidth - this.springBmp.width) / 2;
                this.springBmp.y = 215;
                this.addChild(this.springBmp);
            }
            this.springBmp.visible = true;
            // this.springBmp.alpha=0.8;
            setTimeout(() => { this.springBmp.visible = false; }, 2000);
            // egret.Tween.get(this.springBmp).to({alpha:1},6000).wait(2000).call(()=>{this.springBmp.visible=false;});
            showOverViewTime = 4000;
        }
        setTimeout(() => {
            var overData: Object = new Object();
            var type = (this._player.isLandlord ? '地主 *2' : '农民 *1');
            overData['base'] = '底分 ' + this._player.baseNum;
            overData['type'] = type;
            overData['times'] = '倍数 *' + this.gameOverData.Score;
            if (myRole.settleResult == 1) {
                //胜利
                overData['overType'] = 'win';
                // overData['ekt'] = '+ ' + Math.abs(this.gameOverData.SettleInfoDic[this._player.addr]) + ' EKT';
            }
            else {
                //失败
                overData['overType'] = 'lose';
                // overData['ekt'] = '- ' + Math.abs(this.gameOverData.SettleInfoDic[this._player.addr]) + ' EKT';
            }
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_OVER, overData);
            // this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.BATTLE_VIEW]);
            // this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_OVER_CLOSE);
            this._nowSeatNo = 999;
            this._nowPlaySeatNo = 999;
            this._scoreObj = { 1: 0, 2: 0, 3: 0 };
            this._player.clear();
            this._player.clearRoom();
        }, showOverViewTime);
    }

    /** 
	 * 销毁界面，释放内存
	*/
    public destroy(): void {
        this.removeView();
        this._channel = null;
        // this.timeTxt = null;
        this.findTxt = null;
        this.play_btn = null;
        this.pass_btn = null;
        this.tip_btn = null;
        this.return_btn = null;
        this._player = null;
        this._myCardBox = null;
        this._dizhuCardBox = null;
        this.my_card_box = null;
        this.left_card_box = null;
        this.right_card_box = null;
        if (this._dizhuBmp && this._dizhuBmp.texture)
            this._dizhuBmp.texture.dispose();
        if (this._dizhuBmp_small && this._dizhuBmp_small.texture)
            this._dizhuBmp_small.texture.dispose();
        this._dizhuBmp_small = null;
        this._finishFunc = null;
        this.my_name_txt = null;
        this.left_name_txt = null;
        this.right_name_txt = null;
        this.snd_btn = null;
        this.music_btn = null;
        if (this.coin_bg && this.coin_bg.texture)
            this.coin_bg.texture.dispose();
        this.coin_bg = null;
        this.talk_btn = null;
        this.talk_bg = null;
        this.talk_scroller = null;
        this.talk_group = null;
        this.left_talk = null;
        this.left_talk_txt = null;
        this.right_talk = null;
        this.right_talk_txt = null;
        this.my_talk = null;
        this.my_talk_txt = null;
        this.call_txt = null;
        this._scoreObj = null;
        if (this.my_head_img && this.my_head_img.texture)
            this.my_head_img.texture.dispose();
        this.my_head_img = null;
        if (this.right_head_img && this.right_head_img.texture)
            this.right_head_img.texture.dispose();
        this.right_head_img = null;
        if (this.left_head_img && this.left_head_img.texture)
            this.left_head_img.texture.dispose();
        this.left_head_img = null;
        this.left_num_txt = null;
        this.right_num_txt = null;
        this.left_num_box = null;
        this.right_num_box = null;
        this.left_num_box = null;
        if (this._dizhuHead && this._dizhuHead.texture)
            this._dizhuHead.texture.dispose();
        this._dizhuHead = null;
        this.left_pass = null;
        this.right_pass = null;
        this.my_pass = null;
        this.left_time_txt = null;
        this.right_time_txt = null;
        this.my_time_txt = null;
        this._currentTime_txt = null;
        this.gameOverData = null;
        if (this.springBmp && this.springBmp.texture)
            this.springBmp.texture.dispose();
        this.springBmp = null;
    }
}