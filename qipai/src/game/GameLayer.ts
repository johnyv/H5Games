//游戏的场景，图层界面
class GameLayer extends egret.DisplayObjectContainer{
    //整个游戏场景容器
    public gameScene:eui.UILayer;
    //UI界面容器
    public UILayer:egret.Sprite;
    //动画容器
    public animateLayer:egret.Sprite;
    //特效容器
    public effectLayer:egret.Sprite;
    //最上层
    public topLayer:egret.Sprite;

    public constructor(){
        super();
    }

    public init():void{
        this.gameScene=new eui.UILayer();
        this.addChild(this.gameScene);

        this.UILayer=new egret.Sprite();
        this.gameScene.addChild(this.UILayer);
        this.animateLayer=new egret.Sprite();
        this.gameScene.addChild(this.animateLayer);
        this.effectLayer=new egret.Sprite();
        this.gameScene.addChild(this.effectLayer);
        this.topLayer=new egret.Sprite();
        this.gameScene.addChild(this.topLayer);
        var ratio:number=window.devicePixelRatio||1;
		var wid = document.documentElement.clientWidth*ratio;
        var hei = document.documentElement.clientHeight*ratio;
		// console.log('舞台的宽高度，',this.headImg.width,this.headImg.height,window.devicePixelRatio,window.outerWidth,window.outerHeight);
		// this.headImg.width=hei;
		// this.headImg.height=wid;
		// this.rect.width=hei;
		// this.rect.height=hei;
        // DisUtil.size(this.gameScene,1334,750);
        // DisUtil.get(this.gameScene).beCon();
    }

    public clearAllLayer():void{
        // let child:egret.DisplayObjectContainer;
        // let i:number=0;
        // for(i=0;i<this.UILayer.numChildren;i++){
        //     child=this.UILayer.getChildAt(i) as egret.DisplayObjectContainer;
        //     child&&child.removeChildren();
        // }
        this.UILayer.removeChildren();
        // for(i=0;i<this.animateLayer.numChildren;i++){
        //     child=this.animateLayer.getChildAt(i) as egret.DisplayObjectContainer;
        //     child&&child.removeChildren();
        // }
        this.animateLayer.removeChildren();
        // for(i=0;i<this.effectLayer.numChildren;i++){
        //     child=this.effectLayer.getChildAt(i) as egret.DisplayObjectContainer;
        //     child&&child.removeChildren();
        // }
        this.effectLayer.removeChildren();
        // for(i=0;i<this.topLayer.numChildren;i++){
        //     child=this.topLayer.getChildAt(i) as egret.DisplayObjectContainer;
        //     child&&child.removeChildren();
        // }
        this.topLayer.removeChildren();
    }
}