class Player{
    private static _instance:Player;
    private _channel:CommandChannel;
    //roleid
    private _roleId:number;
    //昵称
    private _nickName:string;
    //底注
    private _baseNum:number=10;
    private _minEkt:number;
    //倍数
    private _timesNum:number;
    //手里的牌
    private _cardList:Array<Card>=[];
    //地主的三张牌
    private _dizhuCardList:Array<Card>=[];
    //房间id
    private _roomId:number=0;
    //座位号
    private _seatNo:number=-1;
    //左边座位号
    private _leftSeatNo:number=-1;
    //右边座位号
    private _rightSeatNo:number=-1;
    //地主座位号
    private _dizhuSeatNo:number=-1;
    //玩家名字
    private _addr:string=(new Date()).getTime()+'';
    // private _addr:string='1546487355368';
    //上家出的牌
    private _curCards:CurCards=new CurCards();
    //是否该轮玩家出牌
    private _onMyTurn:boolean=false;
    //玩家选择的牌
    private _myPlayCards:Array<Card>=[];
    //是否正在游戏
    private _isPlay:boolean=false;
    //玩家游戏中的ekt余额
    private _gold:any;
    //copper
    private _copper:number;
    //当前房间玩家列表
    private _roleRoomList:Array<any> = [];
    //牛牛庄家id
    private _landId:number;

    public constructor(){
        this._channel=CommandChannel.instance;
        for(let i:number=0;i<3;i++){
            this._dizhuCardList.push(new Card(0));
        }
        this.dizhuIndexList=[0,0,0];
    }

    public static get instance():Player{
        return Player._instance?Player._instance:(Player._instance=new Player(),Player._instance);
    }

    public get roleId():number{
        return this._roleId;
    }

    public set roleId(value:number){
        this._roleId = value;
    }

    public get nickName():string{
        return this._nickName;
    }

    public set nickName(value:string){
        this._nickName=value;
    }

    public get gold():any{
        return this._gold;
    }

    public set gold(value:any){
        this._gold=value;
    }

    public get copper():any{
        return this._copper;
    }

    public set copper(value:any){
        this._copper=value;
    }

    public get baseNum():number{
        return this._baseNum;
    }

    public set baseNum(value:number){
        this._baseNum=value;
    }

    public get minEkt():number{
        return this._minEkt;
    }

    public set minEkt(value:number){
        this._minEkt=value;
    }

    public get timesNum():number{
        return this._timesNum;
    }

    public set timesNum(value:number){
        this._timesNum=value;
    }

    public get cardList():Array<Card>{
        return this._cardList;
    }

    public set cardIndexList(value:Array<number>){
        let len:number=value.length;
        for(let i:number=0;i<len;i++){
            this._cardList.push(CardUtils.instance.getCardFromPool(value[i],ConfigData.CARDWIDTH,ConfigData.CARDHEIGHT));
        }
        this._cardList.sort(function(cardA:Card,cardB:Card){return cardB.point-cardA.point});
    }

    public get roleRoomList():Array<any>{
        return this._roleRoomList;
    }

    public addDizhuList():void{
        this.cardIndexList=[this.dizhuCardList[0].index,this.dizhuCardList[1].index,this.dizhuCardList[2].index];
    }

    public get dizhuCardList():Array<Card>{
        return this._dizhuCardList;
    }

    public set dizhuIndexList(value:Array<any>){
        let len:number=value.length;
        for(let i:number=0;i<len;i++){
            this._dizhuCardList[i].index=parseInt(value[i]);
            this._dizhuCardList[i].setWidth(90);
            this._dizhuCardList[i].setHeight(124);
        }
    }

    public get isLandlord():boolean{
        return this._seatNo==this._dizhuSeatNo;
    }

    public get roomId():number{
        return this._roomId;
    }

    public set roomId(value:number){
        this._roomId=value;
    }

    public get seatNo():number{
        return this._seatNo;
    }

    public set seatNo(value:number){
        this._seatNo=value;
    }

    public get leftSeatNo():number{
        return this._leftSeatNo;
    }

    public set leftSeatNo(value:number){
        this._leftSeatNo=value;
    }

    public get rightSeatNo():number{
        return this._rightSeatNo;
    }

    public set rightSeatNo(value:number){
        this._rightSeatNo=value;
    }

    public get dizhuSeatNo():number{
        return this._dizhuSeatNo;
    }

    public setDizhuSeatNo(value:number){
        this._dizhuSeatNo=value;
    }

    public set dizhuSeatNo(value:number){
        this._dizhuSeatNo=value;
        if(this._dizhuSeatNo==this._seatNo){
            this.addDizhuList();
        }
    }

    public get addr():string{
        return this._addr;
    }

    public set addr(value:string){
        this._addr=value;
    }

    public get curCards():CurCards{
        return this._curCards;
    }

    public set curCards(value:CurCards){
        value.cards.length>0 && (this._curCards=value);
    }

    public get onMyTurn():boolean{
        return this._onMyTurn;
    }

    public set onMyTurn(value:boolean){
        this._onMyTurn=value;
    }

    public get myPlayCards():Array<Card>{
        return this._myPlayCards;
    }

    public get isPlay():boolean{
        return this._isPlay;
    }

    public set isPlay(value:boolean){
        this._isPlay=value;
    }

    public set addRole(data:any){
        for(let i:number = 0;i<this._roleRoomList.length;i++){
            if(this._roleRoomList[i].roleId == data.roleId)
            return;
        }
        this._roleRoomList.push(data);
    }

    public set landId(value:number){
        this._landId = value;
    }

    public get landId():number{
        return this._landId;
    }

    public get isLand():boolean{
        return this._roleId == this._landId;
    }

    public getSeatNoByRoleId(roleId:number):number{
        for(let i:number = 0;i<this._roleRoomList.length;i++){
            if(this._roleRoomList[i].roleId == roleId)
                return this._roleRoomList[i].index + 1;
        }
    }

    /** 
     * 玩家出牌了，移除
    */
    public removeCards():void{
        for(let i:number=0;i<this._myPlayCards.length;i++){
            let card:Card=this._myPlayCards[i];
            let cardIndex:number=this._cardList.indexOf(card);
            cardIndex>=0&&this._cardList.splice(cardIndex,1);
            card.parent&&card.parent.removeChild(card);
            CardUtils.instance.addCardToPool(card);   
        }
        this._myPlayCards.splice(0,this._myPlayCards.length);
        this._cardList.sort(function(cardA:Card,cardB:Card){return cardB.point-cardA.point});
    }

    /** 
     * 结束，清空玩家数据
    */
    public clear():void{
        let i:number=0;
        let len:number;
        for(let i:number=0;i<3;i++){
            this._dizhuCardList[i].alpha=1;
            this._dizhuCardList[i].index=0;
        }
        len=this._cardList.length;
        for(i=0;i<len;i++){
            CardUtils.instance.addCardToPool(this._cardList[i]);
        }
        this._cardList.splice(0,len);
        this._myPlayCards.splice(0,this._myPlayCards.length);
        this._onMyTurn=false;
        this._curCards.cards.splice(0,this._curCards.cards.length);
        this._curCards.type=-1;
        this._curCards.header=-1;
        this._dizhuSeatNo=-1;
        this._isPlay=false;
    }

    /**重新进入房间，需要清空之前房间数据 */
    public clearRoom():void{
        this._roleRoomList.splice(0,this._roleRoomList.length);
    }
    /** 
	 * 销毁,释放内存
	*/
	public destroy():void{
        Player._instance=null;
		this._channel=null;
		this._channel=null;
		this._cardList=null;
		this._dizhuCardList=null;
		this._addr=null;
		this._curCards=null;
        this._myPlayCards=null;
	}
}