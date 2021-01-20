class Pregame extends eui.Component implements eui.UIComponent {
	private _channel:CommandChannel;
	public constructor(channel:CommandChannel) {
		super();
        this._channel=channel;
	}
	
	public init(){
		
	}
	
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
		switch (partName) {
			case "return_game_btn":
				this.returnGame();
				break;
			}			
		}, this);			
	}

	

	/** 
	 * 回到游戏,一般情况断线重连
	*/
	private returnGame():void{

		// this._channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_RECON_GAME);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

}