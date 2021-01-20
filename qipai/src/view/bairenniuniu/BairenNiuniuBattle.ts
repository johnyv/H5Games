class BairenNiuniuBattle extends eui.Component implements eui.UIComponent {
    private _channel: CommandChannel;
    // private findTxt;
    private _timer: egret.Timer;
    private _count: number;
    private _waitCount: number = 0;//开局倒计时
    private _player: Player;
    private _currentData;
    private currentTimeType_txt: eui.Label;
    private currentTime_txt: eui.Label;
    private _finishFunc: Function;
    private _isSendOver: boolean = false;
    private coin_1: eui.Button;
    private coin_10: eui.Button;
    private coin_50: eui.Button;
    private coin_100: eui.Button;
    private coin_500: eui.Button;
    private coin_1000: eui.Button;

    private rank_0: RankHeadGroup;
    private rank_1: RankHeadGroup;
    private rank_2: RankHeadGroup;
    private rank_3: RankHeadGroup;
    private rank_4: RankHeadGroup;
    private rank_5: RankHeadGroup;

    private zhuangJiaCardGroup: BairenCardGroup;
    private doorGroup_1: DoorGroup;
    private doorGroup_2: DoorGroup;
    private doorGroup_3: DoorGroup;
    private doorGroup_4: DoorGroup;

    private zhuangJiaHead: HeadGroup;
    private shangZhuang_btn: eui.Image;
    private zhuangjiaGroup: eui.Group;
    private playerList_btn: eui.Image;

    private cardGroup: eui.Group;
    private currentDoor: DoorGroup;
    private xiaZhuLogo: any;
    private biPaiLogo: any;
    private seatObj: Object = {};//用来保存玩家roleId和对应座位号的映射关系，根据玩家进入离开动态调整
    private zhuangJiaScoreObj: Object = {};//用来保存玩家roleId 和对应的抢庄分数
    private currentPhase: number = 0;//当前阶段
    private currentCoin: eui.Image;

    private coinGroup: eui.Group;
    public constructor(channel: CommandChannel) {
        super();
        this._channel = channel;
        this._player = Player.instance;
        this._timer = new egret.Timer(1000);
    }

    public init(): void {
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['niuniubattle_snd_mp3']);
        let uiContainer: egret.Sprite = this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_GET_LAYER, ConstData.UI_LAYER);
        // this.findTxt = AnimateManager.instance.createDragonBones(uiContainer, "Loading_ske_json", "Loading_tex_json", "Loading_tex_png").display;
        // this.findTxt.x = ConfigData.stageWidth / 2;
        // this.findTxt.y = ConfigData.stageHeight / 2;
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.addListener();
        this.currentTime_txt.text = '';
        this.currentTimeType_txt.text = '';
        this.doorGroup_1.doorId = 1;
        // this.doorGroup_1.selected();
        // this.currentDoor = this.doorGroup_1;
        this.doorGroup_1.touchEnabled = true;
        this.doorGroup_1.touchChildren = false;
        this.doorGroup_2.doorId = 2;
        this.doorGroup_2.touchEnabled = true;
        this.doorGroup_2.touchChildren = false;
        this.doorGroup_3.doorId = 3;
        this.doorGroup_3.touchEnabled = true;
        this.doorGroup_3.touchChildren = false;
        this.doorGroup_4.doorId = 4;
        this.doorGroup_4.touchEnabled = true;
        this.doorGroup_4.touchChildren = false;
    }

    private addListener(): void {
        this.coin_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_50.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_500.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_1000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.doorGroup_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.shangZhuang_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shangZhuangFunc, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onStartGroudTimer.bind(this), this);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onNextGroudTimer.bind(this), this);
    }

    private selectDoor(evt: egret.TouchEvent, doorNo: number): void {
        let doorGroup: DoorGroup = evt.target;
        if (this.currentDoor == doorGroup) return;
        else if (this.currentDoor) this.currentDoor.selected();
        doorGroup.selected();
        this.currentDoor = doorGroup;
    }

    private removeListener(): void {
        this.coin_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_50.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_100.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_500.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.coin_1000.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.xiaZhufunc, this);
        this.doorGroup_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.doorGroup_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectDoor, this);
        this.shangZhuang_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.shangZhuangFunc, this);
    }

    private shangZhuangFunc(evt: egret.TouchEvent): void {
        if (!this.currentCoin) {
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['请选择底注，上庄底注需大于200']);
            return;
        }
        let coinNum: number = +this.currentCoin.name;
        if (coinNum < 200) {
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['上庄底注需大于200']);
            return;
        }
        let HdAddLandModuleInfo = { crit: coinNum };
        var data = ProtoRegister.Ins.setMessage(NetCommands.BAI_NIUNIU_REQUEST_GRAB, HdAddLandModuleInfo);
        this.shangZhuang_btn.visible = false;
    }

    public broadXiaZhu(data: com.protobuff.data.HdNiuNiuAddCritModule): void {
        this.currentPhase = 1;
        this._waitCount = data.waitTime;
        this.currentTimeType_txt.visible = true;
        this.currentTimeType_txt.text = "下注倒计时";
        this.currentTime_txt.text = this._waitCount + "s";
        this.currentTime_txt.visible = true;
        this.xiaZhuLogo.visible = true;
        egret.Tween.get(this.xiaZhuLogo).to({ alpha: 1 }, 800).wait(300).to({ alpha: 0.3 }, 800).call(() => { this.xiaZhuLogo.visible = false }, this);
    }

    private xiaZhufunc(evt: egret.TouchEvent): void {
        let coin: eui.Image = evt.target;
        let coinNum: number = +coin.name;
        coin.scaleX = coin.scaleY = 1.2;
        if (this.currentCoin && this.currentCoin != coin) {
            this.currentCoin.scaleX = this.currentCoin.scaleY = 1;
        }
        this.currentCoin = coin;

        if (this._player.isLand) {
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['您是庄家，无法下注']);
            return;
        }
        if (this.currentPhase == 1) {
            if (!this.currentDoor) {
                this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['请先选择要在哪一门下注']);
                return;
            }
            let HdNiuNiuDoAddCritModuleInfo = { index: this.currentDoor.doorId, crit: coinNum };
            var data = ProtoRegister.Ins.setMessage(NetCommands.BAI_NIUNIU_ROLE_XIAZHU, HdNiuNiuDoAddCritModuleInfo);
            this.currentDoor.addCoin(coinNum);
        }
    }

    /** 
      * 广播一个角色下注
     */
    public xiaZhu(data: com.protobuff.data.HdNiuNiuRoleAddCritModule): void {
        //如果是玩家自己，返回
        if (this._player.roleId == data.roleId) return;
        let doorGroup: DoorGroup = this["doorGroup_" + data.index];
        doorGroup.addCoin(data.crit);
    }

    public matchPlayers(): void {
        let HdNiuNiuRequestMatchModuleInfo = { type: 2 };
        var data = ProtoRegister.Ins.setMessage(NetCommands.BAI_NIUNIU_MATCH, HdNiuNiuRequestMatchModuleInfo);
    }

    public roomRoleChange(data: com.protobuff.data.HdNiuNiuEnterRoomModule): void {
        this._waitCount = data.waittime;
        this.cardGroup.visible = true;
        this.currentTimeType_txt.text = "开局倒计时";
        this.currentTime_txt.text = this._waitCount + "s";
        this._timer.start();
        if (data.landId) {
            this.zhuangjiaGroup.visible = true;
        }
        //判断自己是否在庄家列表里
        this.shangZhuang_btn.visible = !(data.landList.indexOf(this._player.roleId) >= 0)
    }

	/**
	 *发牌动画，只需要纯动画即可，无需数据支持
	*/
    public setCard(doorNo: number = 0, data: com.protobuff.data.HdNiuNiuSettlementModule): void {
        if (this.currentPhase != 2) {
            this.biPaiLogo.visible = true;
            this.currentPhase = 2;
            egret.Tween.get(this.biPaiLogo).to({ alpha: 1 }, 800).wait(300).to({ alpha: 0.3 }, 800).call(() => { this.biPaiLogo.visible = false }, this);
        }
        this.setCardTo(0);
        setTimeout(this.setCardTo.bind(this, 1), 1200);
        setTimeout(this.setCardTo.bind(this, 2), 2400);
        setTimeout(this.setCardTo.bind(this, 3), 3600);
        setTimeout(this.setCardTo.bind(this, 4), 4800);
        setTimeout(this.jieSuan.bind(this, data), 6000);
    }

    public setCardTo(doorNo: number = 0): void {
        let startP: egret.Point = new egret.Point(this.cardGroup.x, this.cardGroup.y);;
        let endP: egret.Point;
        if (doorNo == 0) {
            endP = this.zhuangJiaCardGroup.localToGlobal(this.zhuangJiaCardGroup.x, this.zhuangJiaCardGroup.y);
            EffectManager.instance.fromToEffect(egret.MainContext.instance.stage, startP, endP, 5, 500, "niuniu_card_json.card_back", 60, () => { this.zhuangJiaCardGroup.visible = true; }, 0.5);
        }
        else if (this["doorGroup_" + doorNo]) {
            let doorGroup: DoorGroup = this["doorGroup_" + doorNo];
            endP = doorGroup.localToGlobal(doorGroup.cardGroup.x, doorGroup.cardGroup.y);
            EffectManager.instance.fromToEffect(egret.MainContext.instance.stage, startP, endP, 5, 500, "niuniu_card_json.card_back", 60, () => {
                doorGroup.cardGroup.visible = true;
            }, 0.5);
        }
    }

    /**发牌动画之后显示玩家底牌
     * playerId:玩家对应的id
     * time：第几次发牌
     */
    private jieSuan(data: com.protobuff.data.HdNiuNiuSettlementModule): void {
        let cardMap: any = data.cardMap;
        let cardType: any = data.cardType;
        let bairenCardGroup: BairenCardGroup;
        for (let no in cardMap) {
            if (no == "0") {
                bairenCardGroup = this.zhuangJiaCardGroup;
            } else {
                let doorGroup: DoorGroup = this["doorGroup_" + no];
                bairenCardGroup = doorGroup.cardGroup;
            }
            bairenCardGroup.showCard(cardMap[no]);
            let carTypeResId: string = this.getCardType(cardType[no]);
            bairenCardGroup.setResultState(carTypeResId);
        }
        this.nextRound();
        this.currentPhase = 0;
    }


    public getCardType(data: any): string {
        let resId: string = '';
        let niuNo: number = data;
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
        return resId;
    }

    /**
     * 开局
    */
    private onStartGroudTimer(): void {
        if (this._waitCount <= 0) return;
        this.currentTime_txt.text = this._waitCount + "s";
        this._waitCount--;
    }

    /**下一局倒计时 */
    private nextRound(): void {
        let HdNiuNiuRolePrepareModuleInfo = { status: 1 };
        var data = ProtoRegister.Ins.setMessage(NetCommands.BAI_NIUNIU_PREPARE, HdNiuNiuRolePrepareModuleInfo);
        this._count = 0;
    }

    private onNextGroudTimer(): void {
        this._count++;
        if (this._count == 5) {
            // this.zhuangjiaGroup.visible = false;
            this.zhuangJiaCardGroup.visible = false;
            this.zhuangJiaCardGroup.reset();
            for (let i: number = 1; i <= 4; i++) {
                let doorGroup: DoorGroup = this["doorGroup_" + i];
                doorGroup.clear();
            }
        }
    }

    public shangZhuang(data: any): void {

    }

    public grabSuccess(data: com.protobuff.data.HdLandModule): void {
        this._player.landId = data.landId;
        this.zhuangjiaGroup.visible = true;
    }

    public onScoreChange(data: any): void {

    }

    public closeMatchTimer(): void {

    }

    public invaild(): void {

    }

    public returnGround(): void {

    }

    public clear(): void {

    }

    public reconGame(data: any): void {

    }
}