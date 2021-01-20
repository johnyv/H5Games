class Win extends eui.Component implements eui.UIComponent {
	private leave_btn: eui.Button;
	private continue_btn: eui.Button;
	private _channel: CommandChannel;
	// public baseNum_txt:eui.Label;
	// public type_txt:eui.Label;
	// public times_txt:eui.Label;
	// public ekt_txt:eui.Label;

	public constructor(channel: CommandChannel) {
		super();
		this._channel = channel;
	}

	public init(): void {
		document.bgColor = '#0d1b51';
		this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['win_snd_mp3', 1]);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.leave_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.leave, this);
		this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.continue, this);
		// this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_STOP_SOUND,ConfigData.MUSIC);
	}

	/** 
	 * 展示结算分数
	*/
	private show(data): void {
		// this.baseNum_txt.text=data.base;
		// this.type_txt.text=data.type;
		// this.times_txt.text=data.times;
		// this.ekt_txt.text=data.ekt;
		let filter: egret.Filter = new egret.GlowFilter(0x00174a, 0.8, 4, 4);
		// this.ekt_txt.filters=[filter];
	}

	private leave(): void {
		this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_ALL_VIEW);
		this._channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CLEAR);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
		ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_GAME_PREPARE, { status: 0 });
	}

	private continue(): void {
		this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['btn_click_snd_mp3']);
		// this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '正在进入游戏...');
		// setTimeout(() => { this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_WAIT); }, 1500);
		this._channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_CLEAR);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.WIN_VIEW]);
		// this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_CLOSE);
		// this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_ALL_VIEW);
		// this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_CLEAR_ALL_LAYER);
		this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.BATTLE_VIEW, 0, 0, ConstData.UI_LAYER]);
		ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_GAME_PREPARE, { status: 1 });
		// this._channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_MATCH_PLAYERS);
		// 	if(Player.instance.gold<Player.instance.minEkt){
		// 		this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您的金额不足',500]);	
		// 		return;		
		// 	}
		// 	this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.WIN_VIEW]);
		// 	// this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_CLOSE);
		// 	// this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_ALL_VIEW);
		// 	// this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_CLEAR_ALL_LAYER);
		// 	this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.BATTLE_VIEW,0,0,ConstData.UI_LAYER]);
		// 	this._channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_MATCH_PLAYERS);
		// })
	}

    /** 
	 * 销毁界面，释放内存
	*/
	public destroy(): void {
		this.leave_btn = null;
		this.continue_btn = null;
		this._channel = null;
		// this.baseNum_txt=null;
		// this.type_txt=null;
		// this.times_txt=null;
		// this.ekt_txt=null;
	}

}