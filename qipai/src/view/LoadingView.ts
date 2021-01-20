class LoadingView extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;
    private _ddzFontBmp: egret.Bitmap;
    private _progressBg: egret.Bitmap;
    private _progressBar: eui.Image;
    // private _ddzCenterBmp:egret.Bitmap;

    private createView(): void {
        var ddzBg: egret.Bitmap = new egret.Bitmap(RES.getRes('load_bg'));
        this.addChild(ddzBg);
        // ddzBg.width=1920;
        // ddzBg.height=1080;
        // var rect:egret.Shape=new egret.Shape();
        // rect.graphics.beginFill(0x162b64);
        // rect.graphics.drawRect(0,0,1334,750);
        // this.addChild(rect);
        this._ddzFontBmp = new egret.Bitmap(RES.getRes('logo'));
        // this._ddzFontBmp.width=468;
        // this._ddzFontBmp.height=468;
        // this._ddzFontBmp.anchorOffsetX=this._ddzFontBmp.width/2;
        // this._ddzFontBmp.anchorOffsetY=this._ddzFontBmp.height/2;
        this._ddzFontBmp.x = 55;
        this._ddzFontBmp.y = 31;
        // this._ddzCenterBmp=new egret.Bitmap(RES.getRes('loading_center_png'));
        // this._ddzCenterBmp.width=460;
        // this._ddzCenterBmp.height=460;
        // this._ddzCenterBmp.anchorOffsetX=this._ddzCenterBmp.width/2;
        // this._ddzCenterBmp.anchorOffsetY=this._ddzCenterBmp.height/2;
        // this._ddzCenterBmp.x=ConfigData.stageWidth/2;
        // this._ddzCenterBmp.y=ConfigData.stageHeight/2-50;
        // egret.Tween.get(this._ddzFontBmp,{loop:true}).to({rotation:360},8000).to({rotation:0},0);
        this.addChild(this._ddzFontBmp);
        // this.addChild(this._ddzCenterBmp);

        //进度条逻辑
        this._progressBg= new egret.Bitmap(RES.getRes('progress_bg'));
        this._progressBar = new eui.Image(RES.getRes('progress_bar'));
        this._progressBg.x = (ConfigData.stageWidth - this._progressBg.width)/2;
        this._progressBg.y = 931;
        this.addChild(this._progressBg);
        this._progressBar.x = this._progressBg.x + 5;
        this._progressBar.y = this._progressBg.y + 5;
        let rect: egret.Rectangle = new egret.Rectangle(17, 6, 820, 48);
        (this._progressBar).scale9Grid = rect;
        this._progressBar.width = 100;
        this.addChild(this._progressBar);

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.verticalAlign = "middle";
        this.textField.textColor = 0xffffff;
        this.textField.x = (ConfigData.stageWidth - this.textField.width) / 2;
        this.textField.y = this._progressBg.y - 10;
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `正在加载 ...${current}/${total}`;
        this._progressBar.width = 100 + (current / total) * (this._progressBg.width - 100);
        if (current == total) {
            this.removeChild(this._progressBg);
            this.removeChild(this._progressBar);
            // egret.Tween.removeTweens(this._tipTxt);
            egret.Tween.removeTweens(this._ddzFontBmp);
            // this.destroy();
            this.showLoginBtn();
        }
    }

    public showLoginBtn(): void {
        this.removeChild(this.textField);
        let youke_btn: egret.Bitmap = new egret.Bitmap(RES.getRes('youke_btn'));
        youke_btn.x = 156;
        youke_btn.y = 850;
        this.addChild(youke_btn);
        youke_btn.touchEnabled = true;
        youke_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLogin,this);
        let weixin_btn: egret.Bitmap = new egret.Bitmap(RES.getRes('weixin_btn'));
        weixin_btn.x = 719;
        weixin_btn.y = 850;
        this.addChild(weixin_btn);
        let zhanghao_btn: egret.Bitmap = new egret.Bitmap(RES.getRes('zhanghao_btn'));
        zhanghao_btn.x = 1281;
        zhanghao_btn.y = 850;
        this.addChild(zhanghao_btn);
    }

    private onLogin():void{
        this.stage.addChild(Game.instance);
        this.parent.removeChild(this);
        this.destroy();
    }

    private destroy(): void {
        this.textField = null;
        this._ddzFontBmp = null;
        this._progressBar = null;
        // this._ddzCenterBmp=null;
    }
}