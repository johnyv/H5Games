class NiuniuBattle extends eui.Component implements eui.UIComponent {
    private _channel: CommandChannel;
    private findTxt;
    private _timer: egret.Timer;
    private _count: number;
    private _waitCount: number = 0;//开局倒计时
    private _player: Player;
    private _currentData;
    private currentTime_txt: eui.Label;
    private _finishFunc: Function;
    private _isSendOver: boolean = false;
    private _nowSeatNo: number = 999;
    private no_btn: eui.Button;
    private score1_btn: eui.Button;
    private score2_btn: eui.Button;
    private score3_btn: eui.Button;
    private score4_btn: eui.Button;
    private score5_btn: eui.Button;
    private score10_btn: eui.Button;
    private score15_btn: eui.Button;
    private score20_btn: eui.Button;
    private score25_btn: eui.Button;

    private player_group_0: eui.Group;
    private player_group_1: eui.Group;
    private player_group_2: eui.Group;
    private player_group_3: eui.Group;
    private player_group_4: eui.Group;
    private player_group_5: eui.Group;
    private card_0: eui.Image;
    private card_1: eui.Image;
    private card_2: eui.Image;
    private card_3: eui.Image;
    private card_4: eui.Image;
    private qz_btn_group: eui.Group;
    private xiazhu_btn_group: eui.Group;
    private seatObj: Object = {};//用来保存玩家roleId和对应座位号的映射关系，根据玩家进入离开动态调整
    private zhuangJiaScoreObj: Object = {};//用来保存玩家roleId 和对应的抢庄分数
    public constructor(channel: CommandChannel) {
        super();
        this._channel = channel;
        this._player = Player.instance;
        this._timer = new egret.Timer(1000);
    }

    public init(): void {
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['niuniubattle_snd_mp3']);
        this.findTxt = AnimateManager.instance.createDragonBones(egret.MainContext.instance.stage, "Loading_ske_json", "Loading_tex_json", "Loading_tex_png").display;
        this.findTxt.x = ConfigData.stageWidth / 2;
        this.findTxt.y = ConfigData.stageHeight / 2;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.addListener();
        this.currentTime_txt.text = '';
    }

    private addListener(): void {
        this.no_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score1_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score2_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score3_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score4_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);

        this.score5_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score10_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score15_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score20_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score25_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);

    }

    private removeListener(): void {
        this.no_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score1_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score2_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score3_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);
        this.score4_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.qiangZhuangFunc, this);

        this.score5_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score10_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score15_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score20_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.score25_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
    }

    private qiangZhuangFunc(evt: egret.TouchEvent): void {
        this.qz_btn_group.visible = false;
        let score: number = +evt.target.name;
        let niuNiuDoGrabModuleInfo = { type: score };
        var data = ProtoRegister.Ins.setMessage(NetCommands.NIUNIU_DO_GRAB, niuNiuDoGrabModuleInfo);
    }

    private xiaZhufunc(evt: egret.TouchEvent): void {
        this.xiazhu_btn_group.visible = false;
        let score: number = +evt.target.name;
        let niuNiuDoAddCritModule = { crit: score };
        var data = ProtoRegister.Ins.setMessage(NetCommands.NIUNIU_ROLE_XIAZHU, niuNiuDoAddCritModule);
    }

    public matchPlayers(): void {
        let RequestMatchModuleInfo = { type: 1 };
        var data = ProtoRegister.Ins.setMessage(NetCommands.NIUNIU_MATCH, RequestMatchModuleInfo);
    }

    /**
     * 场内有玩家进入或者退出,支持无序退出,分配作为按照顺序分配
    */
    public roomRoleChange(data: com.protobuff.data.NiuNiuEnterRoomModule): void {
        let roleList: Array<com.protobuff.data.NiuNiuRoleRoomModule> = this._player.roleRoomList;
        //计算一下还有哪几个位置没有分配
        let seatArr = [];
        let leftSeatArr = [];
        for (let roleId in this.seatObj) {
            seatArr.push(this.seatObj[roleId]);
        }
        let i: number = 1;
        while (this['player_group_' + i]) {
            seatArr.indexOf(i) < 0 && (leftSeatArr.push(i));
            i++;
        }
        let playerGroup: eui.Group;
        for (let j: number = 0; j < roleList.length; j++) {
            let roleRoomModule: com.protobuff.data.NiuNiuRoleRoomModule = roleList[j];
            let roleId: number = roleRoomModule.roleId;
            if (this.seatObj.hasOwnProperty(roleId + '')) {
                continue;
            } else if (roleId != this._player.roleId) {
                //如果没有分配座位，那么就给玩家分配一个座位
                this.seatObj[roleId] = leftSeatArr.shift();
                playerGroup = this['player_group_' + this.seatObj[roleId]];
            } else {
                this.seatObj[roleId] = 0;
                playerGroup = this.player_group_0;
            }
            playerGroup.visible = true;
            let tipState: eui.Image = playerGroup.getChildByName('tip_state') as eui.Image;
            tipState.visible = true;
            tipState.source = RES.getRes("niuniukaiju_json.nn_ready_1");
        }
        if (data instanceof com.protobuff.data.NiuNiuEnterRoomModule) {
            this._waitCount = data.waittime;
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.onStartGroudTimer, this);
            this._timer.start();
        }
    }

    /**
     * 开局
    */
    private onStartGroudTimer(): void {
        if (this._waitCount <= 0) return;
        this.currentTime_txt.visible = true;
        let timeStr: string = this._waitCount > 9 ? '开局倒计时：' : '开局倒计时：0'
        this.currentTime_txt.text = timeStr + this._waitCount;
        this._waitCount--;
    }

    /*
    * 倍数发生变化
    */
    public onScoreChange(data): void {
        if (data instanceof com.protobuff.data.NiuNiuRoomCritModule) {
            this._player.timesNum = data.crit;
        }
        this.showState(data);
    }

    /*
    *显示抢庄和下注状态 
    */
    public showState(data: any): void {
        let roleId: number = data.roleId;
        let playerGroup: eui.Group = this['player_group_' + this.seatObj[roleId]];
        if (playerGroup) {
            let beishuState: eui.Image = playerGroup.getChildByName('beishu_state') as eui.Image;
            beishuState.visible = true;
            if (data instanceof com.protobuff.data.NiuNiuRoleGrabModule) {
                //玩家叫庄广播
                beishuState.source = RES.getRes('niuniukaiju_json.' + 'x_' + data.type + 'x');
                this.zhuangJiaScoreObj[roleId] = data.type;
            } else if (data instanceof com.protobuff.data.NiuNiuRoleAddCritModule) {
                //玩家下注广播
                beishuState.source = RES.getRes('niuniukaiju_json.' + 'x_' + data.crit + 'x');
            }
        }
    }

	/**
	 *发牌
	*/
    public setCard(data: com.protobuff.data.NiuNiuStartModule): void {
        if (data.isFirst == 1) {
            this.currentTime_txt.text = '';
            this.currentTime_txt.visible = false;
            this._timer.stop();
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onStartGroudTimer, this);
            for (let i: number = 0; i < this._player.roleRoomList.length; i++) {
                let playerGroup: eui.Group = this["player_group_" + i];
                let tipState: eui.Image = playerGroup.getChildByName("tip_state") as eui.Image;
                tipState.visible = false;
            }
        }
        this.findTxt.visible = false;
        let cardNum: number = data.isFirst == 1 ? 4 : 1;
        let startP: egret.Point = new egret.Point(ConfigData.stageWidth / 2, ConfigData.stageHeight / 2);
        for (let i: number = 0; i < this._player.roleRoomList.length; i++) {
            let endP: egret.Point = new egret.Point(this["player_group_" + i].x, this["player_group_" + i].y);
            setTimeout(() => {
                EffectManager.instance.fromToEffect(egret.MainContext.instance.stage, startP, endP, cardNum, 500, "niuniu_card_json.card_back", 60, this.showCard.bind(this, i, data));
            }, i * 400);
        }
    }

    /**发牌动画之后显示玩家底牌
     * playerId:玩家对应的id
     * time：第几次发牌
     */
    private showCard(playerId: number = 0, data: com.protobuff.data.NiuNiuStartModule): void {
        let playerGroup: eui.Group = this["player_group_" + playerId];
        if (playerId == 0) {
            //玩家自己
            if (data.isFirst == 1) {
                for (let i: number = 0; i < data.cardList.length; i++) {
                    let card: eui.Image = this["card_" + i];
                    card.visible = true;
                    card.source = RES.getRes(data.cardList[i].value + "");
                }
            } else {
                //显示最后一张牌
                let card: eui.Image = this.card_4;
                card.visible = true;
                card.source = RES.getRes(data.cardList[0].value + "");
            }
        } else {
            //其他玩家
            let cardGroup: CardGroup = playerGroup.getChildByName("cardGroup") as CardGroup;
            if (data.isFirst == 1) {
                cardGroup.visible = true;
                cardGroup.showBgCard(data);
            } else {
                cardGroup.showEndCard();
            }
        }
    }

    /*
    *返回 
    */
    public returnGround(): void {
        this._timer && this._timer.stop();
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.NIUNIU_GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.NIUNIU_BATTLE_VIEW]);
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

    /**匹配完毕,分配座位,开始发牌*/
    public onMatchPlayerBack(data: BaseMsg): void {
        this.clear();
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.MATCH_END_VIEW]);
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_ONCE, ['start_snd_mp3']);
        let seatObj = new Object();
        for (let addr in data.PlayerIndexIdDic) {
            let addrStr = addr.slice(0, 4) + '...' + addr.slice(addr.length - 4, addr.length);
            seatObj[data.PlayerIndexIdDic[addr]] = addrStr;
        }
        this.setBalance();
        this.findTxt.visible = false;
    }

    /**
     * grabType,0:游戏中，1:是否叫地主，2：是否加倍
     */
    private setFinishFunc(index: number, grabType: number = 0): void {
        this._finishFunc = null;
        if (index == this._player.seatNo) {
            if (grabType == 0) {
                if (this._player.curCards.type == CARD_TYPE.NO_CARDS) {
                    //出当前玩家牌中最小的牌
                    // this._finishFunc = this.setMinCard;
                }
                else {
                    // this._finishFunc = this.passCard;
                }
            } else if (grabType == 1) {
                // this._finishFunc = this.wantDizhu;
            }
            else if (grabType == 2) {
                // this._finishFunc = this.jiabei;
            }
        }
    }


    /** 
     * 广播庄家
    */
    public grabLandLordSuccess(data: com.protobuff.data.NiuNiuLandModule): void {
        let landId: number = data.landId;
        this._player.landId = landId;
        let zhuangScore: number = this.zhuangJiaScoreObj[landId];
        let roleIdArr = [];
        for (let roleId in this.zhuangJiaScoreObj) {
            if (this.zhuangJiaScoreObj[roleId] == zhuangScore) {
                roleIdArr.push(roleId);
            }
        }
        if (roleIdArr.length > 1) {
            let shanEffectArr = [];
            //如果有一个以上玩家叫了相同最高分，那就播放随机动画
            for (let i: number = 0; i < roleIdArr.length; i++) {
                let roleId: number = roleIdArr[i];
                let playerGroup: eui.Group = this['player_group_' + this.seatObj[roleId]];
                let zhuangJia: Zhuangjia = playerGroup.getChildByName('zhuangJia') as Zhuangjia;
                let shanEffectAni = AnimateManager.instance.createDragonBones(zhuangJia, "niuniu_flash_ske_json", "niuniu_flash_tex_json", "niuniu_flash_tex_png");
                let shanEffectDisplay: egret.DisplayObjectContainer = shanEffectAni.display;
                shanEffectDisplay.x = zhuangJia.width / 2;
                shanEffectDisplay.y = zhuangJia.height / 2 - 4;
                shanEffectArr.push(shanEffectAni);
            }
            setTimeout(() => {
                for (let i: number = 0; i < shanEffectArr.length; i++) {
                    let shanEffectAni: dragonBones.Armature = shanEffectArr[i];
                    shanEffectAni.dispose();
                    shanEffectAni.display.parent.removeChild(shanEffectAni.display);
                }
                let playeGroup: eui.Group = this['player_group_' + this.seatObj[landId]];
                let zhuangJia: Zhuangjia = playeGroup.getChildByName('zhuangJia') as Zhuangjia;
                zhuangJia.showZhuangJia();
            }, 2500);
        } else {
            let playeGroup: eui.Group = this['player_group_' + this.seatObj[landId]];
            let zhuangJia: Zhuangjia = playeGroup.getChildByName('zhuangJia') as Zhuangjia;
            zhuangJia.showZhuangJia();
        }
    }

    /** 
      * 广播玩家可以开始叫庄
     */
    public jiaoZhuang(data: com.protobuff.data.NiuNiuGrabModule): void {
        this.qz_btn_group.visible = true;
    }

    /** 
      * 广播玩家可以开始下注
     */
    public xiaZhu(data: com.protobuff.data.NiuNiuAddCritModule): void {
        if (this._player.isLand) return;
        this.xiazhu_btn_group.visible = true;
    }

    /** 
     * 展示玩家的牌
    */
    public jiesuan(data: com.protobuff.data.NiuNiuSettlementModule): void {
        let copyRoleList = [];
        for (let i: number = 0; i < data.roleList.length; i++) {
            let roleRoomModule: com.protobuff.data.INiuNiuRoleRoomModule = data.roleList[i];
            if (roleRoomModule.roleId != this._player.roleId)
                copyRoleList.push(roleRoomModule);
            let playerGroup: eui.Group = this['player_group_' + this.seatObj[roleRoomModule.roleId]];
            let resultState: eui.Image = playerGroup.getChildByName('result_state') as eui.Image;
            resultState.visible = true;
            let niuNo: number = roleRoomModule.niuniuCardType;
            let resId: string = '';
            switch (niuNo) {
                case 0:
                    resId = 'mn';
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    resId = 'n0' + niuNo;
                    break;
                case 10:
                    resId = 'n00';
                    break;
                case 11:
                    resId = 'n4hn';
                    break;
                case 12:
                    resId = 'n5hn';
                    break;
            }
            resultState.source = RES.getRes('niuniukaiju_json.nn_' + resId);
        }
        let zhuangJiaGroup: eui.Group = this['player_group_' + this.seatObj[this._player.landId]];
        let zhuangJia: Zhuangjia = zhuangJiaGroup.getChildByName('zhuangJia') as Zhuangjia;
        let zhuangJiaGlobalP = zhuangJia.localToGlobal(zhuangJia.x, zhuangJia.y);
        for (let i: number = 0; i < copyRoleList.length; i++) {
            let roleRoomModule: com.protobuff.data.IRoleRoomModule = copyRoleList[i];
            let fromPlayerGroup: eui.Group = this["player_group_" + this.seatObj[roleRoomModule.roleId]];
            let cardGroup: CardGroup = fromPlayerGroup.getChildByName("cardGroup") as CardGroup;
            cardGroup.showCard(roleRoomModule);
        }

        for (let i: number = 0; i < data.roleList.length; i++) {
            let roleRoomModule: com.protobuff.data.IRoleRoomModule = data.roleList[i];
            if (roleRoomModule.roleId == this._player.landId)
                continue;
            let fromPlayerGroup: eui.Group = this["player_group_" + this.seatObj[roleRoomModule.roleId]];
            let fromZhuang: Zhuangjia = fromPlayerGroup.getChildByName('zhuangJia') as Zhuangjia;
            let globalPoint = fromZhuang.localToGlobal(fromZhuang.x, fromZhuang.y);
            if (!roleRoomModule.settleResult) {
                EffectManager.instance.fromToEffect(egret.MainContext.instance.stage, globalPoint, zhuangJiaGlobalP, 10, 900, "niuniukaiju_json.gold", 20);
            } else {
                EffectManager.instance.fromToEffect(egret.MainContext.instance.stage, zhuangJiaGlobalP, globalPoint, 10, 900, "niuniukaiju_json.gold", 20);
            }
        }

        this.nextRound();
        // setTimeout(this.nextRound.bind(this), 2500);
        for (let roleId in this.zhuangJiaScoreObj) {
            delete this.zhuangJiaScoreObj[roleId];
        }
        for (let roleId in this.seatObj) {
            delete this.zhuangJiaScoreObj[roleId];
        }
    }

    /** 
     * 设置玩家的ekt余额
    */
    private setBalance(): void {
        let ektNum: number = parseFloat(this._player.gold);
        let zhenshu: number = parseInt(ektNum.toString().split('.')[0]);
        // let showStr: string;
        // if (zhenshu > 10000) {
        //     showStr = (zhenshu / 10000).toFixed(2) + '万';
        //     this.my_name_txt && (this.my_name_txt.text = showStr);
        // } else
        //     this.my_name_txt && (this.my_name_txt.text = ektNum + '');
    }

    /**下一局倒计时 */
    private nextRound(): void {
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onNextGroudTimer.bind(this), this);
        this._count = 5;
    }

    private onNextGroudTimer(): void {
        this._count--;
        if (this._count == 0) {
            let niuNiuRolePrepareInfo = { status: 1 };
            var data = ProtoRegister.Ins.setMessage(NetCommands.NIUNIU_PREPARE, niuNiuRolePrepareInfo);
            for (let i: number = 0; i < this._player.roleRoomList.length; i++) {
                let playerGroup: eui.Group = this["player_group_" + i];
                let beishuState: eui.Image = playerGroup.getChildByName("beishu_state") as eui.Image;
                beishuState.visible = false;
                let resultState: eui.Image = playerGroup.getChildByName("result_state") as eui.Image;
                resultState.visible = false;               
                let tipState: eui.Image = playerGroup.getChildByName("tip_state") as eui.Image;
                tipState.visible = true;
                tipState.source = RES.getRes("niuniukaiju_json.nn_ready_1");
                if (i != 0) {
                    let crad_Group: CardGroup = playerGroup.getChildByName("cardGroup") as CardGroup;
                    crad_Group.hideEndCard();
                    crad_Group.visible = false;
                }
                let zhuangjia: Zhuangjia = playerGroup.getChildByName("zhuangJia") as Zhuangjia;
                zhuangjia.hideZhuangJia();
            }
            this.card_0.visible = false;
            this.card_1.visible = false;
            this.card_2.visible = false;
            this.card_3.visible = false;
            this.card_4.visible = false;
            this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onNextGroudTimer.bind(this), this);
        }
    }

    /** 
     * 断线重连
    */
    public reconGame(data): void {

    }

    /** 
     * 对局无效，返回大厅
    */
    public invaild(): void {
        this.clear();
        this.returnGround();
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['对局无效，返回大厅']);
    }

    /** 
     * 清理界面
    */
    public clear(): void {

    }
}