class ProtoRegister {
    private _protoHash: Object = {};
    private _serverResHash: Object = {};
    private _logicHash: Object = {};
    private static _ins: ProtoRegister;
    private _channel: CommandChannel;
    public constructor() {
        this._channel = CommandChannel.instance;
        /**loginInfo协议相关 */
        // 前端请求登录(1001)
        this._protoHash[NetCommands.MSG_TYPE_OF_LOGIN] = com.protobuff.data.LoginModule;
        // 服务器返回登录结果(1002)
        this._protoHash["1002"] = com.protobuff.data.LoginResultModule;
        //角色登录成功后，返回的角色基本信息(1004)
        this._protoHash[NetCommands.MSG_TYPE_OF_ROLE_INFO] = com.protobuff.data.RoleInfoModule;
        this._logicHash[NetCommands.MSG_TYPE_OF_ROLE_INFO] = new RoleInfoModuleLogic(this._channel);

        //断线重连(1005)
        this._protoHash["1005"] = com.protobuff.data.ReconnectionModule;
        //断线重连结果(1006)
        this._protoHash["1006"] = com.protobuff.data.ReconnectionResult;
        // //实名认证(1007)
        // this._protoHash["1007"] = com.protobuff.data.RealNameModule;
        // //实名认证结果(1008)
        // this._protoHash["1008"] = com.protobuff.data.RealNameResultModule;

        /**info协议相关 */
        //服务器返回文字提示(1040)
        this._protoHash["1040"] = com.protobuff.data.TipsModule;
        //服务器推送操作错误反馈(1042)
        this._protoHash["1042"] = com.protobuff.data.ResultErrorModule;
        // 前端心跳(1101)
        this._protoHash["1101"] = com.protobuff.data.HeartModule;
        // 服务器回应心跳(1102)
        this._protoHash["1102"] = com.protobuff.data.HeartResultModule;
        //服务器主动踢角色(1044)
        this._protoHash["1044"] = com.protobuff.data.KickOffRoleModule;
        //客户端请求主动断开连接(1045)
        this._protoHash["1045"] = com.protobuff.data.DisConnectionModule;

        /**battelInfo协议相关 */
        //请求匹配(3001)
        this._protoHash[NetCommands.MSG_TYPE_OF_MATCH] = com.protobuff.data.RequestMatchModule;
        //匹配结果(3002)
        this._protoHash["3002"] = com.protobuff.data.RequestMatchResultModule;
        //退出(只有在匹配阶段和准备阶段可以离开)(准备阶段其实是第一局结算后，自动进入第二局的准备阶段)(2003)
        this._protoHash["2003"] = com.protobuff.data.QuitModule;
        //成功退出(3004)
        this._protoHash["3004"] = com.protobuff.data.QuitResultModule;
        //匹配进入房间(3006)
        this._protoHash[NetCommands.MSG_TYPE_OF_ENTER_ROOM] = com.protobuff.data.EnterRoomModule;
        this._logicHash[NetCommands.MSG_TYPE_OF_ENTER_ROOM] = new EnterRoomModuleLogic(this._channel);
        //有人状态发生变化(3008)(进入或者离开或者准备)
        this._protoHash[NetCommands.MSG_TYPE_OF_ROLE_CHANGE] = com.protobuff.data.RoleChangeModule;
        this._logicHash[NetCommands.MSG_TYPE_OF_ROLE_CHANGE] = new RoleChangeModuleLogic(this._channel);

        //开始发牌(3010)
        this._protoHash[NetCommands.MSG_TYPE_OF_SEND_CARD] = com.protobuff.data.StartModule;
        this._logicHash[NetCommands.MSG_TYPE_OF_SEND_CARD] = new StartModuleLogic(this._channel);
        //广播询问一个玩家是否叫地主(需要对比是否是自己)(3012)
        this._protoHash[NetCommands.MSG_TYPE_OF_CALL_SCORE] = com.protobuff.data.GrabModule;
        this._logicHash[NetCommands.MSG_TYPE_OF_CALL_SCORE] = new GrabModuleLogic(this._channel);

        //玩家选择是否叫/抢地主(3013)
        this._protoHash["3013"] = com.protobuff.data.DoGrabModule;
        //广播一个玩家是否叫地主(3014)
        this._protoHash["3014"] = com.protobuff.data.RoleGrabModule;
        //广播地主和底牌(3016)
        this._protoHash["3016"] = com.protobuff.data.LandModule;
        //当前房间倍数(3018)
        this._protoHash["3018"] = com.protobuff.data.RoomCritModule;
        //广播询问一个玩家出牌(3020)
        this._protoHash["3020"] = com.protobuff.data.GoModule;
        //玩家出牌(3021)
        this._protoHash["3021"] = com.protobuff.data.StartGoModule;
        //玩家出牌结果(3022)
        this._protoHash["3022"] = com.protobuff.data.StartGoResultModule;
        //广播一个玩家出的牌(3024)
        this._protoHash["3024"] = com.protobuff.data.RoleStarGoModule;
        //比赛结果(3024)
        this._protoHash["3026"] = com.protobuff.data.ResultModule;
        //广播结算(3024)
        this._protoHash["3028"] = com.protobuff.data.SettlementModule;
        //准备(3024)
        this._protoHash["3029"] = com.protobuff.data.RolePrepareModule;
        //广播询问是否加倍(3030)
        this._protoHash["3030"] = com.protobuff.data.AddCritModule;
        //角色选择是否加倍(3031)
        this._protoHash["3031"] = com.protobuff.data.DoAddCritModule;
        //广播一个角色是否加倍(3032)
        this._protoHash["3032"] = com.protobuff.data.RoleAddCritModule;


        /**牛牛协议 */
        //请求匹配4001
        this._protoHash[NetCommands.NIUNIU_MATCH] = com.protobuff.data.NiuNiuRequestMatchModule;
        //匹配结果4002
        this._protoHash[NetCommands.NIUNIU_MATCH_RESULT] = com.protobuff.data.NiuNiuRequestMatchResultModule;
        //退出4003
        this._protoHash[NetCommands.NIUNIU_EXIT] = com.protobuff.data.NiuNiuQuitModule;
        //成功退出4004
        this._protoHash[NetCommands.NIUNIU_EXIT_SUCCESS] = com.protobuff.data.NiuNiuQuitResultModule;
        //匹配进入房间4006
        this._protoHash[NetCommands.NIUNIU_ENTER_ROOM] = com.protobuff.data.NiuNiuEnterRoomModule;
        this._logicHash[NetCommands.NIUNIU_ENTER_ROOM] = new NiuNiuEnterRoomModuleLogic(this._channel);
        //有人状态发生变化4008
        this._protoHash[NetCommands.NIUNIU_ROLE_CHANGE] = com.protobuff.data.NiuNiuRoleChangeModule;
        this._logicHash[NetCommands.NIUNIU_ROLE_CHANGE] = new NiuNiuRoleChangeModuleLogic(this._channel);
        //开始发牌4010
        this._protoHash[NetCommands.NIUNIU_SEND_CARD] = com.protobuff.data.NiuNiuStartModule;
        //广播询问一个玩家是否叫庄4012
        this._protoHash[NetCommands.NIUNIU_CALL_SCORE] = com.protobuff.data.NiuNiuGrabModule;
        //玩家选择叫/抢庄4013
        this._protoHash[NetCommands.NIUNIU_DO_GRAB] = com.protobuff.data.NiuNiuDoGrabModule;
        //广播一个玩家是否叫庄4014
        this._protoHash[NetCommands.NIUNIU_QIANG_ZHUANG_BROAD] = com.protobuff.data.NiuNiuRoleGrabModule;
        //广播庄家4016
        this._protoHash[NetCommands.NIUNIU_ROLE_GRAB_ID] = com.protobuff.data.NiuNiuLandModule;
        //广播询问下注4018
        this._protoHash[NetCommands.NIUNIU_ROLE_XIAZHU_BROAD] = com.protobuff.data.NiuNiuAddCritModule;
        //角色选择下注4019
        this._protoHash[NetCommands.NIUNIU_ROLE_XIAZHU] = com.protobuff.data.NiuNiuDoAddCritModule;
        //广播一个角色下注4020
        this._protoHash[NetCommands.NIUNIU_ROLE_XIAZHU_RESULT] = com.protobuff.data.NiuNiuRoleAddCritModule;
        //当前房间玩家倍数4022
        this._protoHash[NetCommands.NIUNIU_ROOM_SCORE] = com.protobuff.data.NiuNiuRoomCritModule;
        //广播结算4024
        this._protoHash[NetCommands.NIUNIU_JIESUAN] = com.protobuff.data.NiuNiuSettlementModule;
        //下一局是否继续开始4025
        this._protoHash[NetCommands.NIUNIU_PREPARE] = com.protobuff.data.NiuNiuRolePrepareModule;

        
        /**百人牛牛协议 */
        //请求匹配5001
        this._protoHash[NetCommands.BAI_NIUNIU_MATCH] = com.protobuff.data.HdNiuNiuRequestMatchModule;
        //匹配结果5002
        this._protoHash[NetCommands.BAI_NIUNIU_MATCH_RESULT] = com.protobuff.data.HdNiuNiuRequestMatchResultModule;
        //退出5003
        this._protoHash[NetCommands.BAI_NIUNIU_EXIT] = com.protobuff.data.HdNiuNiuQuitModule;
        //成功退出5004
        this._protoHash[NetCommands.BAI_NIUNIU_EXIT_SUCCESS] = com.protobuff.data.HdNiuNiuQuitResultModule;
        //匹配进入房间5006
        this._protoHash[NetCommands.BAI_NIUNIU_ENTER_ROOM] = com.protobuff.data.HdNiuNiuEnterRoomModule;
        this._logicHash[NetCommands.BAI_NIUNIU_ENTER_ROOM] = new BairenNiuNiuEnterRoomModuleLogic(this._channel);
        //有人状态发生变化5008
        this._protoHash[NetCommands.BAI_NIUNIU_ROLE_CHANGE] = com.protobuff.data.HdNiuNiuRoleChangeModule;
        this._logicHash[NetCommands.BAI_NIUNIU_ROLE_CHANGE] = new BairenNiuNiuRoleChangeModuleLogic(this._channel);
        //广播庄家5010
        this._protoHash[NetCommands.BAI_NIUNIU_ROLE_GRAB_ID] = com.protobuff.data.HdLandModule;
        //申请上庄5011
        this._protoHash[NetCommands.BAI_NIUNIU_REQUEST_GRAB] = com.protobuff.data.HdAddLandModule;
        //广播当前备选庄家列表5012
        this._protoHash[NetCommands.BAI_NIUNIU_GRAB_LIST] = com.protobuff.data.HdLandListModule;
        //广播询问下注5014
        this._protoHash[NetCommands.BAI_NIUNIU_ROLE_XIAZHU_BROAD] = com.protobuff.data.HdNiuNiuAddCritModule;
        //角色选择下注5015
        this._protoHash[NetCommands.BAI_NIUNIU_ROLE_XIAZHU] = com.protobuff.data.HdNiuNiuDoAddCritModule;
        //广播一个角色下注5016
        this._protoHash[NetCommands.BAI_NIUNIU_ROLE_XIAZHU_RESULT] = com.protobuff.data.HdNiuNiuRoleAddCritModule;
        //当前房间玩家倍数5018
        this._protoHash[NetCommands.BAI_NIUNIU_ROOM_SCORE] = com.protobuff.data.HdNiuNiuRoomCritModule;
        //广播结算5020
        this._protoHash[NetCommands.BAI_NIUNIU_JIESUAN] = com.protobuff.data.HdNiuNiuSettlementModule;
        //下一局是否继续开始5021
        this._protoHash[NetCommands.BAI_NIUNIU_PREPARE] = com.protobuff.data.HdNiuNiuRolePrepareModule;
    }

    public static get Ins(): ProtoRegister {
        return this._ins || (this._ins = new ProtoRegister(), this._ins);
    }

    public decode(typeId, buffer: ArrayBuffer): void {
        if (this._protoHash[typeId]) {
            let data: any = this._protoHash[typeId].decode(new Uint8Array(buffer));
            data["MsgType"] = typeId;
            this._serverResHash[typeId] = data;
            this._logicHash[typeId] && this._logicHash[typeId].decode(data);
            this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_READDATA, data);
        }
    }

    public setMessage(typeId, c2sInfo: Object = {}): void {
        let ModuleCls = this._protoHash[typeId];
        let c2sMes = new ModuleCls();
        var message = ModuleCls.create(c2sInfo); // or use .fromObject if conversion is necessary
        var buffer = ModuleCls.encode(message).finish();
        var byte: egret.ByteArray = new egret.ByteArray();
        var bufferByte: egret.ByteArray = new egret.ByteArray(buffer);
        byte.writeBytes(ByteIntUtils.int2Bytes(4 + bufferByte.length));
        byte.writeBytes(ByteIntUtils.int2Bytes(typeId));
        byte.writeBytes(bufferByte);
        byte.position = 0;
        this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SENDDATA, [byte]);
    }
}