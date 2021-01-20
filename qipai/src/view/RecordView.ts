class RecordView extends eui.Component implements eui.UIComponent {
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
			}			
		}, this);			
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

}