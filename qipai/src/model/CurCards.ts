/**
 * 当前桌面上的牌（上家的牌）
*/
//{type: CARD_TYPE.NO_CARDS, header:0, cards:[]};
class CurCards
{
    /**牌型*/
    public type:number=-1;
    /**头子（头子中最大的那张）*/
    public header:number=-1;
    /**具体是哪些牌,用于展示在桌面上(index)*/
    public cards:Array<number>=[];

    public constructor(type=-1,header=-1,cards=[]){
        this.type=type;
        this.header=header;
        this.cards=cards;
    }
}