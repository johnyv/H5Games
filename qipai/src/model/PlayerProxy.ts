class PlayerProxy extends DataProxy{
    public constructor(channel:CommandChannel){
        super(channel);
    }

    public init():void{
        this.funcListObj[ConstData.PLAYER_EKT]=[];
        this.funcListObj[ConstData.PLAYER_BALANCE]=[];
        this.funcListObj[ConstData.DIZHU_CARD_LIST]=[];
        this.funcListObj[ConstData.PLAYER_CARD_LIST]=[];
    }
}