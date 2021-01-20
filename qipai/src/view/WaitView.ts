/**
 *加载等待界面 
*/
class WaitView extends BaseView{
    private _tipTxt:egret.TextField;
    private _mask:egret.Sprite;
    private filter:egret.GlowFilter;
    public constructor(channel:CommandChannel){
        super(channel);
        this.viewName=ConstData.WAIT_VIEW;
        this._mask=new egret.Sprite();
        this._mask.graphics.beginFill(0x000000,0);
        this.touchEnabled=true;
        this._mask.graphics.drawRect(120,0,1090,ConfigData.stageHeight);
        this._mask.graphics.endFill();
        this.addChild(this._mask);
        this._tipTxt=new egret.TextField();
        this._tipTxt.size=40;
        this._tipTxt.bold=true;
        // this._tipTxt.alpha=;
        this._tipTxt.width=ConfigData.stageWidth;
        this._tipTxt.height=50;
        this._tipTxt.textColor=0xffff00;
        this._tipTxt.textAlign='center';
        // this.filter=new egret.GlowFilter(0xffffff,0.8,5,5);
        // this._tipTxt.filters=[this.filter];
        this._tipTxt.x=(ConfigData.stageWidth- this._tipTxt.width)/2;
        this._tipTxt.y=(ConfigData.stageHeight- this._tipTxt.height)/2;
        this.addChild(this._tipTxt);
    }

    private isJ:boolean=true;
    // private one:number=0xff;
    // private two:number=0xff;
    // private three:number=0xff;
    public addWait(tip:string):void{
        this._tipTxt.text=tip;
    //     egret.Tween.get(this._tipTxt,{loop:true,onChange:()=>{
    //         if(this.isJ){
    //             // this.filter.alpha-=0.008;
    //             // if(this.filter.alpha<=0){
    //             //     this.isJ=false
    //             // }
    //             // this.one>0&&(this.one-=1);
    //             // this.two>0&&(this.two-=1);
    //             // this.three>0&&(this.three-=1);
    //             // this.two-=0x01;
    //             // this.three-=0x01;
    //             // console.log('0x'+this.one+this.two+this.three);
    //             this.filter.color>0&&(this.filter.color-=0x020202);
    //             this.filter.color<0&&(this.filter.color=0x000000);
    //             if(this.filter.color<0x000001){
    //                 this.isJ=false;
    //             }
    //         }else{
    //             // this.filter.alpha+=0.008;
    //             // if(this.filter.alpha>=0.8){
    //             //     this.isJ=true
    //             // }
    //             // this.one+=0x01;
    //             // this.two+=0x01;
    //             // this.three+=0x01;
    //             // this.one<0xff&&(this.one+=1);
    //             // this.two<0xff&&(this.two+=1);
    //             // this.three<0xff&&(this.three+=1);
    //             this.filter.color<0&&(this.filter.color=0x000000);
    //             this.filter.color+=0x020202;
    //             this.filter.color>0xffffff&&(this.filter.color=0xffffff);
    //             // this.filter.color+=0x010101;
    //             if(this.filter.color>0xfffffe){
    //                 this.isJ=true;
    //             }
    //         }
    //         this._tipTxt.filters=[this.filter];
    //         // console.log(this.filter.color.toString(16),this.isJ);
    //      }
    //    });//.to({alpha:0.2},1500).to({alpha:1},1500);
    }

    public removeWait():void{
        // egret.Tween.removeTweens(this._tipTxt);
    }

    public destroy():void{
        super.destroy();
        this.removeChild(this._tipTxt);
        this._tipTxt=null;
    }
}