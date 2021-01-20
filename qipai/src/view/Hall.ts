class Hall extends eui.Component implements eui.UIComponent {
    private _channel: CommandChannel;
    public ddz_btn: eui.Button;
    public niuniu_btn: eui.Image;
    public bairen_niuniu_btn: eui.Image;
    public buyu_btn: eui.Image;
    public gold_txt: eui.Label;
    // public diamond_txt: eui.Label;

    public constructor(channel: CommandChannel) {
        super();
        this._channel = channel;
    }

    public init(): void {
        this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_MUSIC, ['dating_snd_mp3']);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.addListener();
        GameTools.addGrayFilter([this.buyu_btn]);
        this.gold_txt.text = "0";
        // this.diamond_txt.text = "0";
        // this.leave_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.leave,this);
        // this.continue_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.continue,this);
        // this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_STOP_SOUND,ConfigData.MUSIC);
    }

    private addListener(): void {
        this.ddz_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDdzFunc, this);
        this.niuniu_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNiuniuFunc, this);
        this.bairen_niuniu_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBairenNiuniuFunc,this);
        // this.buyu_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{ console.log("buyubuyu,11111")}, this);
        // this.buyu_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{ console.log("buyubuyu,11111")}, this);
        // this.buyu_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastStartFunc, this);
    }

    private onBuyuFunc():void{
    }

    private async onDdzFunc() {
        const loadingView = new NiuniuLoadingView();
        this.addChild(loadingView);
        await RES.loadGroup("ddz", 0, loadingView);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.HALL_VIEW]);
    }

    private async onNiuniuFunc() {
        const loadingView = new NiuniuLoadingView();
        this.addChild(loadingView);
        await RES.loadGroup("niuniu", 0, loadingView);
        // await RES.loadGroup("ddz", 0, loadingView);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.NIUNIU_GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.HALL_VIEW]);
    }

    private async onBairenNiuniuFunc(){
        const loadingView = new NiuniuLoadingView();
        this.addChild(loadingView);
        await RES.loadGroup("barrenniuniu", 0, loadingView);
        // await RES.loadGroup("ddz", 0, loadingView);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.BAIREN_NIUNIU_GROUND_VIEW, 0, 0, ConstData.UI_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.HALL_VIEW]);

    }
    public removeView(): void {
        // this.fast_start_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastStartFunc, this);
        // this.huanle_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastStartFunc, this);
        // this.bisai_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastStartFunc, this);
        // this.laizi_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastStartFunc, this);
    }

    /** 
	 * 销毁界面，释放内存
	*/
    public destroy(): void {
        this.removeView();
        this._channel = null;
        this.ddz_btn = null;
        this.niuniu_btn = null;
        this.bairen_niuniu_btn = null;
        this.buyu_btn = null;
        this.gold_txt = null;
        // this.diamond_txt = null;
    }
}