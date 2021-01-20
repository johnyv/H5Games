class MatchEnd extends eui.Component implements eui.UIComponent {
	private _channel:CommandChannel;

	public constructor(channel:CommandChannel) {
		super();
        this._channel=channel;
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
		switch (partName) {
			case "continue_btn":
                this.continueMath();
				break;
            case "leave_btn":
                this.leaveMatch();
                break;
			}			
		}, this);			
	}

	
	/** 
	 * 继续匹配
	*/
	private continueMath():void{
		this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.MATCH_END_VIEW]);
		this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_MUSIC,['battle_snd_mp3']);
        this._channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_MATCH_PLAYERS);
	}

    /** 
     * 离开匹配，退回到大厅
    */
    private leaveMatch():void{
        this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.MATCH_END_VIEW]);
        this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.BATTLE_VIEW]);
        this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.GROUND_VIEW,0,0,ConstData.UI_LAYER]);
		this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_CLOSE);
    }

	/** 
	 * 销毁界面，释放内存
	*/
	public destroy():void{
		this._channel=null;
	}
}