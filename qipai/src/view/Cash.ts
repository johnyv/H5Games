class Cash extends eui.Component implements eui.UIComponent {
	private cash_txt:eui.Label;
	private tip_txt:eui.Label;
	private _channel:CommandChannel;
    private _ekt;
	private half_btn:eui.Button;
	private twice_btn:eui.Button;
	private max_btn:eui.Button;
    private urlloader:egret.URLLoader; 
    private urlreq:egret.URLRequest;
	private key_board:eui.Group;
    private reset_btn:eui.Button;

	public constructor(channel:CommandChannel) {
		super();
		this._channel=channel;
		this._channel.addFuncToDataProxy(ConstData.PLAYER_PROXY,ConstData.PLAYER_BALANCE,this.setBalance,this);
        this.urlloader = new egret.URLLoader(); 
        this.urlreq = new egret.URLRequest();	
		this.urlloader.addEventListener(egret.Event.COMPLETE, this.onComplete, this); 
}
	
	public init():void{
		this.cash_txt&&(this.cash_txt.text='1300');
		// this.recharge_txt.restrict
	}

	private setBalance(ektNum):void{
		this._ekt=parseFloat(ektNum);
		this.tip_txt.text='最多可提现EKT  '+this._ekt;
		this.cash_txt.text=this._ekt+'';
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
		switch (partName) {
			case "close_btn":
				this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.CASH_VIEW]);
				break;
			case "cash_btn":
				this.onCashFunc();
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
		let inputEkt:any=parseFloat(this.cash_txt.text);	
		if(!inputEkt) return;	

		if(targetBtn==this.half_btn){
			inputEkt=(inputEkt/2).toFixed(4);
		}else if(targetBtn==this.twice_btn){
			inputEkt=(inputEkt*2).toFixed(4);
		}else if(targetBtn==this.max_btn){
			inputEkt=this._ekt;
		}
		inputEkt=parseFloat(inputEkt);
		this.cash_txt.text=inputEkt+'';
	}

	/**
	 * 检查是否在游戏中
	 */
	private checkInGame():void{
        this.urlreq.requestHeaders = [new egret.URLRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")];
		this.urlreq.url = "/dapp/ddz/api/getStatus?address="+Player.instance.addr; 
        this.urlloader.load(this.urlreq ); 
        this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_WAIT,'请稍等...');
	}

 	private onComplete(event:egret.Event):void{ 
		this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_WAIT);
		let dataObj=JSON.parse(event.target.data);
		// console.log('是否可以提现',event.target.data);
		if(dataObj.result!=1){
			//未进行游戏可以提现
			this.onCashFunc();
        }else if(dataObj.result==1){
			//未进行游戏可以提现
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您有未结束的游戏，无法提现']);
        }
    }
	/** 
	 * 提现
	*/
	private onCashFunc():void{
		//调用app接口，密码确认
		let inputEkt:string=this.cash_txt.text;
		var price = /^[0-9]{1,9}([.]{1}[0-9]{1,4})?$/;
		if(!price.test(inputEkt)||parseFloat(inputEkt)==0){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['请输入正确的金额']);
		}else if(parseFloat(inputEkt)>this._ekt){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['提现金额大于所剩金额']);
		}
		else{
		}
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.cash_txt.text='1300';
		// this.cash_txt.type=egret.TextFieldType.INPUT;
		this.cash_txt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showKeyBoard,this);
		this.key_board.addEventListener(egret.TouchEvent.TOUCH_TAP,this.inputNum,this);
		this.reset_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{this.cash_txt.text=''},this);
	}

	private showKeyBoard():void{
		this.key_board.visible=!this.key_board.visible;
	}

	private inputNum(evt:egret.TouchEvent):void{
		var ektNum:string=this.cash_txt.text;
		if(ektNum.length>8){
			this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_TIP,['您输入的金额过大']);
			return;
		}
		ektNum+=evt.target.name;
		this.cash_txt.text=ektNum;
	}

	public removeView():void{
		this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_WAIT);
	}
	
	/** 
	 * 销毁界面，释放内存
	*/
	public destroy():void{
        this._channel=null;
		this.urlloader=null;
		this.tip_txt=null;
		this.half_btn=null;
		this.twice_btn=null;
		this.max_btn=null;
		this.key_board=null;
        this.reset_btn=null;
		this.urlreq=null;
	}
}