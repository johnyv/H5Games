class DoorGroup extends eui.Component implements eui.UIComponent {
    private _doorId: number = 0;
    public cardGroup: BairenCardGroup;
    private totalXiaZhu_txt: eui.Label;
    private nowXiaZhu_txt: eui.Label;
    private coin_container: eui.Group;
    private pingLogo: eui.Image;
    private selectLogo: eui.Rect;
    private _totalCoinNum: number = 0;

    public selected(): void {
        this.selectLogo.visible = !this.selectLogo.visible;
    }

    public get doorId(): number {
        return this._doorId;
    }

    public set doorId(value: number) {
        this._doorId = value;
    }

    public addCoin(coinNum: number): void {
        this._totalCoinNum += coinNum;
        this.totalXiaZhu_txt.text = "总：" + this._totalCoinNum;
        let coinImage: eui.Image = new eui.Image();
        coinImage.source = RES.getRes("BRNN_Battle_json.BRNN_weight_" + coinNum);
        this.coin_container.addChild(coinImage);
        let w: number = this.coin_container.width - coinImage.width * 1.5;
        let h: number = this.coin_container.height - coinImage.height * 1.5;
        coinImage.x = Math.floor(Math.random() * w);
        coinImage.y = Math.floor(Math.random() * h);
    }

    public clear(): void {
        this.coin_container.removeChildren();
        this.nowXiaZhu_txt.visible = false;
        this._totalCoinNum = 0;
        this.totalXiaZhu_txt.text = "总：" + this._totalCoinNum;
        this.cardGroup.visible = false;
        this.cardGroup.reset();
    }
}