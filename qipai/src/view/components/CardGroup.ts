class CardGroup extends eui.Component implements eui.UIComponent {
    private card_0: eui.Image;
    private card_1: eui.Image;
    private card_2: eui.Image;
    private card_3: eui.Image;
    private card_4: eui.Image;

    constructor() {
        super();
    }

    public hideEndCard():void{
        this.card_4.visible = false;
    }

    public showEndCard(): void {
        this.card_4.source = RES.getRes('niuniu_card_json.card_back');
        this.card_4.visible = true;
    }

    public showBgCard(data: com.protobuff.data.NiuNiuStartModule): void {
        for (let i: number = 0; i < data.cardList.length; i++) {
            let card: eui.Image = this["card_" + i];
            card.visible = true;
            card.source = RES.getRes('niuniu_card_json.card_back');
        }
    }

    public showCard(data: com.protobuff.data.IRoleRoomModule): void {
        for (let i: number = 0; i < data.cardList.length; i++) {
            let card: eui.Image = this["card_" + i];
            card.visible = true;
            card.source = RES.getRes(data.cardList[i].value + "");
        }
    }
}