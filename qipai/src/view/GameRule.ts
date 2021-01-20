class GameRule extends eui.Component implements eui.UIComponent {
	private _channel:CommandChannel;
    private rule_txt:eui.Label;

	public constructor(channel:CommandChannel) {
		super();
        this._channel=channel;
	}

	public init(){
		document.bgColor='#0d1b51';
	}
	
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		instance.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent) {
		switch (partName) {
			case "return_btn":
				this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.GAME_RULE_VIEW]);
				break;
			}			
		}, this);			
	}

	protected childrenCreated(): void {
		super.childrenCreated();
        let ruleStr:string='\n斗地主是一种三人游戏，对局开始时通过叫抢地主决定阵营，阵营双方对战，先出完牌的一方获胜。\n\n';
        ruleStr+='地主拥有首出权，玩家按照逆时针方向跟牌，每位玩家可以选择用更大的牌组跟牌或者不跟牌。\n';
        ruleStr+='合法牌型（王炸＞炸弹＞其他牌型）\n';
        ruleStr+='王炸: 两张王    炸弹: 四张同样数字的牌\n';
        ruleStr+='单牌: 一张单独的牌    对牌: 两张相同数字的牌    三张: 三张相同数字的牌\n';
        ruleStr+='三带一: 三张相同数字的牌带一张任意不同数字的牌\n';
        ruleStr+='三带二: 三张相同数字的牌带两张相同数字的牌\n';
        ruleStr+='顺子: 五张（或以上）点数连续的牌（2和双王除外）\n';
        ruleStr+='连对: 三对（或以上）的连续对牌（2和双王除外）\n';
        ruleStr+='飞机: 两个（或以上）的连续三张（2和双王除外）\n';
        ruleStr+='飞机带翅膀: 飞机+同数量的单牌或飞机+同数量的对牌\n';
        ruleStr+='四带二: 四张+两张单牌 或 四张+两个对牌（四带二不是炸弹）\n';
        this.rule_txt.text=ruleStr;
	}

    public removeView():void{
        document.bgColor='#0d1b51';
    }

    public destroy():void{
        this._channel=null;
        this.rule_txt=null;
    }

}