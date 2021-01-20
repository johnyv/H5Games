class NiuniuLoadingView extends eui.Component implements RES.PromiseTaskReporter,eui.UIComponent {

    public constructor() {
        super();
    }

    private loading_txt: eui.Label;
    private loading_ani_point: eui.Rect;
    private _progressBg: egret.Bitmap;
    private _progressBar: eui.Image;
    // private _ddzCenterBmp:egret.Bitmap;

    protected childrenCreated():void{
        // var ddzBg: egret.Bitmap = new egret.Bitmap(RES.getRes('load_bg'));
        // this.addChild(ddzBg);

        // //进度条逻辑
        // this._progressBg= new egret.Bitmap(RES.getRes('progress_bg'));
        // this._progressBar = new eui.Image(RES.getRes('progress_bar'));
        // this._progressBg.x = (ConfigData.stageWidth - this._progressBg.width)/2;
        // this._progressBg.y = 931;
        // this.addChild(this._progressBg);
        // this._progressBar.x = this._progressBg.x + 5;
        // this._progressBar.y = this._progressBg.y + 5;
        // let rect: egret.Rectangle = new egret.Rectangle(17, 6, 820, 48);
        // (this._progressBar).scale9Grid = rect;
        // this._progressBar.width = 100;
        // this.addChild(this._progressBar);
        let loading_ani:dragonBones.Armature= AnimateManager.instance.createDragonBones(this,"qznn_loading_ske_json","qznn_loading_tex_json","qznn_loading_tex_png",()=>{
            loading_ani.dispose();
        });
        let loading_mc:egret.DisplayObjectContainer = loading_ani.display;
        loading_mc.x = this.loading_ani_point.x;
        loading_mc.y = this.loading_ani_point.y;
    }

    public onProgress(current: number, total: number): void {
        this.loading_txt.text = `正在加载 ...${current}/${total}`;
        // this._progressBar.width = 100 + (current / total) * (this._progressBg.width - 100);
        current == total && this.destroy();
    }

    private destroy(): void {
        this.parent.removeChild(this);
        this.loading_txt = null;
        // this._ddzCenterBmp=null;
    }
}