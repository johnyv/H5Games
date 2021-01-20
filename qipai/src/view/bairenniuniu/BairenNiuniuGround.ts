class BairenNiuniuGround extends eui.Component implements eui.UIComponent {
	private _channel: CommandChannel;
	private ekt_txt: eui.Label;
	private primary: eui.Button;
	private high: eui.Button;
	private ekt: number = 0;
	private return_btn: eui.Button;
	// private tip_btn: eui.Label;
	private _finishFuc: Function;
	private _isGame: boolean = false;
	private sndBtn: eui.CheckBox;
	private musicBtn: eui.CheckBox;
	private fast_play_btn:eui.Image;

	public constructor(channel: CommandChannel) {
		super();
		this._channel = channel;
		// this._channel.addFuncToDataProxy(ConstData.PLAYER_PROXY, ConstData.PLAYER_BALANCE, this.setEktTxt, this);
	}

	public init(): void {
		document.bgColor = '#0d1b51';
		this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['niuniu_ground_snd_mp3']);
		// this.addSpark(this.primary);
		// this.addSpark(this.high);
		this.sndBtn && (this.sndBtn.selected = this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_GET_PLAY_SND));
		this.musicBtn && (this.musicBtn.selected = this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_GET_PLAY_MUSIC));
	}

	private setEktTxt(ekt): void {
		this.ekt = ekt;
		// this.ekt_txt&&(this.ekt_txt.text=ekt+'');
		if (this.ekt_txt) {
			let zhenshu: number = parseInt(ekt.toString().split('.')[0]);
			let showStr: string;
			if (zhenshu > 10000) {
				showStr = (zhenshu / 10000).toFixed(2) + '万';
				this.ekt_txt.text = showStr;
			} else
				this.ekt_txt.text = parseFloat(ekt) + '';
		}
	}

	private _tapTime: number = 0;
	private _tapNum: number = 0;
	/**
	 * 检查是否在游戏中
	 */
	private checkInGame(finishFuc: Function): void {
		this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
		this._finishFuc = finishFuc;
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '正在进入游戏...');
		setTimeout(() => { this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_WAIT); }, 1500);
	}

	private onComplete(event: egret.Event): void {
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_WAIT);
		let dataObj = JSON.parse(event.target.data);
		// console.log('是否进行游戏',event.target.data);
		if (dataObj.result == 1) {
			//进行游戏
			this._isGame = true;
			this._finishFuc && this._finishFuc();
			this._finishFuc = null;
			// this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您有未结束的游戏，无法提现']);
		} else {
			this._isGame = false;
		}
	}

	/**	
	 * 绑定不同场次以及回退按钮等事件
	 */
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		let date: Date;
		let nowTime: number = 0;
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
			switch (partName) {
				case "primary":
					// this.checkInGame(() => { this.selectBattle(2, 48, 37) });
                    this.enterGame_Now(2, 48);
					break;
				case "middle":
					this.checkInGame(() => { this.selectBattle(10, 240) });
					// this.selectBattle(10,240);
					break;
				case "high":
					// this.checkInGame(() => { this.selectBattle(50, 1200, 780) });
					// this.selectBattle(50,1200,780);	
                    this.enterGame_Now(2, 48);
					break;
				case "return_btn":
					// this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_STOP_ALL_SOUND);
					// this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_DESTROY);
					this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.HALL_VIEW, 0, 0, ConstData.UI_LAYER]);
					this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.GROUND_VIEW]);

					break;
				case "recharge_btn":

					this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.RECHARGE_VIEW, 0, 0, ConstData.UI_LAYER]);
					break;
				case "cash_btn":
					this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
					this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.CASH_VIEW, 0, 0, ConstData.UI_LAYER]);
					break;
				case "snd_btn":
					this.sndBtn.selected = !this.sndBtn.selected;
					this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
					this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_IS_PLAY_SND, this.sndBtn.selected);
					break;
				case "music_btn":
					this.musicBtn.selected = !this.musicBtn.selected;
					this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
					this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_IS_PLAY_MUSIC, this.musicBtn.selected);
					break;
				case "fast_play_btn":
					// this.checkInGame(() => { this.selectBattle(2, 48, 37) });
					this.enterGame_Now(2, 48);
					break;
			}
		}, this);
	}

	private enterGame_Now(baseNum, minEkt): void {
		this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'baseNum': baseNum });
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.BAIREN_NIUNIU_BATTLE_VIEW, 0, 0, ConstData.UI_LAYER]);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.BAIREN_NIUNIU_GROUND_VIEW]);
		this._channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_MATCH_PLAYERS);
	}

	private selectBattle(baseNum, minEkt, dx = -1): void {
		// this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_SOUND,['btn_click_snd_mp3']);
		if (this.ekt < minEkt && !ConfigData.DEBUG && !this._isGame) {
			if (this._tapNum > 3) {
				this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['请检查您的网络是否断开', 500]);
				return;
			}
			this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['您的金额不足', 500, dx]);
			return;
		}
		let date = new Date();
		let nowTime = date.getTime();
		if (nowTime - this._tapTime < 1000) {
			this._tapTime = nowTime;
			// this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您手速太快了',500,37]);
			return;
		}
		this._tapNum++;
		if (this._tapNum > 3) {
			this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['请检查您的网络是否断开', 500]);
		}
		this._tapTime = nowTime;
		this.enterGame(baseNum, minEkt);
		// setTimeout(()=> {
		// 	this.enterGame(baseNum,minEkt);
		// }, 200);
	}

	private enterGame(baseNum, minEkt): void {
		// this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_CONNECT);
		this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_SET_PLAYER, { 'baseNum': baseNum });
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.NIUNIU_BATTLE_VIEW, 0, 0, ConstData.UI_LAYER]);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.NIUNIU_GROUND_VIEW]);
		this._channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_NIU_MATCH_PLAYERS);
	}

	/** 
	 * 给按钮加入闪光动画
	*/
	private addSpark(button: eui.Button): void {
		if (!button) return;
		let spark = button.getChildByName('spark');
		if (!spark) {
			var mask: egret.Sprite = new egret.Sprite();
			spark = new egret.Bitmap(RES.getRes('spark_png'));
			// spark.width=150;
			// spark.height=200;
			mask.width = spark.width;
			mask.height = spark.height;
			mask.graphics.beginFill(0x000000);
			mask.graphics.drawRoundRect(20, 37, 284, 406, 20, 20);
			mask.graphics.endFill();
			button.addChild(mask);
			spark.mask = mask;
			spark.name = 'spark';
			spark.alpha = 0.2;
			spark.blendMode = egret.BlendMode.ADD;
			button.addChild(spark);
		}
		let w = spark.width;
		let h = spark.height;
		let radian = Math.atan2(w, h);
		//计算起点和终点
		let dx = Math.sin(radian) * Math.cos(radian) * h;
		let dy = Math.sin(radian) * Math.sin(radian) * h;
		spark.x = -dx;
		spark.y = dy;
		egret.Tween.get(spark, { loop: true }).to({ x: dx + 50, y: -dy - 50 }, 1350).wait(2000).to({ x: -dx, y: dy }, 0);
	}

	private removeSparkTween(button: eui.Button): void {
		let spark = button.getChildByName('spark');
		spark && egret.Tween.removeTweens(spark);
	}

	private bgContainer: eui.Group;
	private headImg: eui.Image;
	private rect: eui.Rect;
	protected childrenCreated(): void {
		// this.tip_btn.touchEnabled = true;
		super.childrenCreated();
		// this.addSpark(this.primary);
		// this.addSpark(this.high);
		// this.tip_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tipFunc, this);
		// document.getElementsByTagName("html")[0].setAttribute("background","#000000");
		// console.log(document.getElementsByTagName("body")[0].getAttribute("background"));
		// var ratio:number=window.devicePixelRatio||1;
		// var wid = document.documentElement.clientWidth*ratio;
		// var hei = document.documentElement.clientHeight*ratio;
		// var desRatio:number=ConfigData.stageWidth/ConfigData.stageHeight;
		// this.rect.scaleX=1.5;
		// this.rect.scaleY=1.5;
		// console.log('舞台的宽高度，',this.headImg.width,this.headImg.height,window.devicePixelRatio,window.outerWidth,window.outerHeight);
		// this.headImg.width=hei;
		// this.headImg.height=wid;
		// this.rect.width=hei;
		// this.rect.height=hei;
		// console.log('自适应后的宽高度，',wid,hei);
		// DisUtil.get(this.bgContainer).cover();
		// DisUtil.get(this.headImg).cover();
		// DisUtil.get(this.rect).cover();
		// for(let i:number=0;i<this.bgContainer.numChildren;i++){
		// 	var childObj=this.bgContainer.getChildAt(i);
		// 	childObj.width=this.bgContainer.width;
		// 	childObj.height=this.bgContainer.height;
		// }
	}

	private tipFunc(): void {
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.GAME_RULE_VIEW, 0, 0, ConstData.UI_LAYER]);
	}

	public removeView(): void {
		// this.removeSparkTween(this.primary);
		// this.removeSparkTween(this.middle);
		// this.removeSparkTween(this.high);
		this._tapNum = 0;
	}

	/** 
	 * 销毁界面，释放内存
	*/
	public destroy(): void {
		this.removeView();
		this._channel = null;
		this.ekt_txt = null;
		this.primary = null;
		this.high = null;
		this.return_btn = null;
		this.sndBtn = null;
		this.musicBtn = null;
	}
}