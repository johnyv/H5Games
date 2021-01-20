class BairenCardGroup extends eui.Component implements eui.UIComponent {
    private card_0: eui.Image;
    private card_1: eui.Image;
    private card_2: eui.Image;
    private card_3: eui.Image;
    private card_4: eui.Image;
    private result_state: eui.Image;

    constructor() {
        super();
    }

    public reset():void{
       for (let i: number = 0; i < 5; i++) {
            let card: eui.Image = this["card_" + i];
            card.visible = true;
            card.source = RES.getRes("niuniu_card_json.card_back");
        }
        this.result_state.visible = false;
    }

    public showCard(data: com.protobuff.data.HdNiuNiuCardModule): void {
        for (let i: number = 0; i < data.cards.length; i++) {
            let card: eui.Image = this["card_" + i];
            card.visible = true;
            card.source = RES.getRes(data.cards[i] + "");
        }
    }

    public setResultState(resId:string):void{
        this.result_state.visible = true;
        this.result_state.source = RES.getRes('niuniukaiju_json.nn_' + resId);
    }
}