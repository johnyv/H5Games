class TipView extends BaseView{
    private _tipTxt:egret.TextField;
    // private _tipBg:egret.Bitmap;
    public constructor(channel:CommandChannel){
        super(channel);
        // this._tipBg=new egret.Bitmap(RES.getRes('tipBg_png'));
        // this.addChild(this._tipBg);
        this._tipTxt=new egret.TextField();
        this._tipTxt.bold=true;
        this._tipTxt.size=38;
        this._tipTxt.textColor=0xff2222;
        // var filter:egret.Filter=new egret.GlowFilter(0x0000ff,0.8,4,4);
        // this._tipTxt.filters=[filter];
        this.addChild(this._tipTxt);
        // this._tipBg.width=1000;
        // this._tipBg.height=57;
        this.width=1000;
        this.height=57;
        this._tipTxt.width=this.width;
        this._tipTxt.height=this.height;
        this._tipTxt.textAlign='center';
        this._tipTxt.verticalAlign='middle';
        
    }

    public addTip(params:Array<any>=['',800,-1,-1]):void{
        let value:string=params[0];
        let durTime:number=(!params[1]?500:params[1]);
        let dx:number=(!params[2]?-1:params[2]);
        let dy:number=(!params[3]?-1:params[3]);
        this._tipTxt.text=value;
        dx==-1?this.x=(ConfigData.stageWidth-this._tipTxt.width)/2:this.x=dx;
        dy==-1?this.y=(ConfigData.stageHeight-this._tipTxt.height)/2:this.y=dy;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({alpha:1},durTime).wait(300).to({alpha:0.3},durTime).call(this.removeTip,this);
    }

    public removeTip():void{
        this.parent&&this.parent.removeChild(this);
    }
}