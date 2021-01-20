class Recharge extends eui.Component implements eui.UIComponent {
	private recharge_txt:eui.Label;
	private tip_txt:eui.Label;
	private _channel:CommandChannel;
    private _ekt;
	private half_btn:eui.Button;
	private twice_btn:eui.Button;
	private max_btn:eui.Button;
	private key_board:eui.Group;
	private reset_btn:eui.Button;

	public constructor(channel:CommandChannel) {
		super();
		this._channel=channel;
		this._channel.addFuncToDataProxy(ConstData.PLAYER_PROXY,ConstData.PLAYER_EKT,this.setLeftEkt,this);
	}
	
	public init():void{
		this.recharge_txt&&(this.recharge_txt.text='1300');
	}

	private setLeftEkt(ektNum):void{
		this._ekt=ektNum;
		this.tip_txt.text='EKT可用余额  '+ektNum;
		this.recharge_txt.text=''+(1300<ektNum?'1300':ektNum);
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
		switch (partName) {
			case "close_btn":
				console.log(111111111);
				this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.RECHARGE_VIEW]);
				break;
			case "recharge_btn":
				this.onRechargeFunc();
				break;
			case "half_btn":
			case "twice_btn":
			case "max_btn":
				this.fastInput(e);
				break;
		}			
		}, this);
		
	}

	/** 
	 * 点击翻倍快捷按钮
	*/
	private fastInput(evt:egret.TouchEvent):void{
		let targetBtn:eui.Button=evt.target;
		// if(targetBtn.currentState=='down')
		// 	return;
		let inputEkt:any=parseFloat(this.recharge_txt.text);
		if(!inputEkt) return;	
		// targetBtn.currentState='down';
		if(targetBtn==this.half_btn){
			inputEkt=(inputEkt/2).toFixed(0);
		}else if(targetBtn==this.twice_btn){
			inputEkt=(inputEkt*2).toFixed(0);
		}else if(targetBtn==this.max_btn){
			inputEkt=parseInt(this._ekt);
		}
		inputEkt=parseFloat(inputEkt);
		this.recharge_txt.text=inputEkt+'';
	}

	/** 
	 * 发送充值消息
	*/
	private onRechargeFunc():void{
		//调用app接口，密码确认
		let inputEkt:string=this.recharge_txt.text;
		var price = /^[0-9]{1,9}([.]{1}[0-9]{1,4})?$/;
		if(!price.test(inputEkt)||parseFloat(inputEkt)==0){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['请输入正确的金额']);
		}else if(parseFloat(inputEkt)>this._ekt){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['充值金额大于所剩金额']);
		}
		else{
		}
	}

	/** 
	 * 密码确认成功之后发送充值消息
	*/
	// private onRechargeFunc():void{
	// }

	protected childrenCreated(): void {
		super.childrenCreated();
		this.recharge_txt.text='1300';
		// this.recharge_txt.type=egret.TextFieldType.INPUT;
		// this.recharge_txt.inputType=egret.TextFieldInputType.TEL;
		this.recharge_txt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showKeyBoard,this);
		this.key_board.addEventListener(egret.TouchEvent.TOUCH_TAP,this.inputNum,this);
		this.reset_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{this.recharge_txt.text=''},this);
	}

	private showKeyBoard():void{
		this.key_board.visible=!this.key_board.visible;
	}

	private inputNum(evt:egret.TouchEvent):void{
		var ektNum:string=this.recharge_txt.text;
		if(ektNum.length>8){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您输入的金额过大']);
			return;
		}
		ektNum+=evt.target.name;
		this.recharge_txt.text=ektNum;
	}

	public removeView():void{
		this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_WAIT);
	}

	/** 
	 * 销毁界面，释放内存
	*/
	public destroy():void{
        this._channel=null;
		this.recharge_txt=null;
		this.tip_txt=null;
		this.half_btn=null;
		this.twice_btn=null;
		this.max_btn=null;
		this.key_board=null;
        this.reset_btn=null;
	}
}