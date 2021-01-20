class NiuNiuLevel {

    /**
     * 牛牛的等级
     * 0：无牛 1-6 牛一到牛六 7-9 牛七到牛九 10 牛牛 11 四花 12 五花 13炸弹 14小牛牛
     */
    private  level;
    /**
     * 最大手牌的花色
     * 1-方块 2-梅花 3-红桃 4-黑桃 和牌组的百位相同 如果是最小的牛牛，此处是0，牌组也是0
     */
    private  bigColor;

    /**
     * 最大手牌的数字
     */
    private bigCard;

    /**
     * 赔率
     * 无牛到牛六-1 牛七到牛九-2 牛牛-3  四花-4  五花 -5  炸弹-6  小牛牛-10
     */
    private odds;

    /**
     * 牌型名称，与level一一对应
     */
    public static cardsType:Array<string> = [
            "无牛", "牛一", "牛二", "牛三", "牛四",
            "牛五", "牛六", "牛七", "牛八", "牛九",
            "牛牛", "四花", "五花", "炸弹", "小牛牛"
    ];

    /**
     * 五小牛倍率
     */
    public static FIVE_SMALL_NIU_ODD = 10;
    /**
     * 炸弹倍率
     */
    public static BOMB_NIU_ODD = 7;
    /**
     * 五花赔率
     */
    public static FIVE_FLOWER_NIU_ODD = 5;
    /**
     * 四花赔率
     */
    public static FOUR_FLOWER_NIU_ODD = 4;
    /**
     * 牛牛赔率
     */
    public static NIU_NIU_ODD = 3;
    /**
     * 牛七到牛九赔率
     */
    public static NIU_SEVEN_TO_NINE_ODD = 2;
    /**
     * 无牛到牛六的赔率
     */
    public static UNDER_SEVEN_NIU_ODD = 1;

    public setLevel(value){
        this.level = value;
    }

    public setOdds(value){
        this.odds = value;
    }

    public setBigColor(value){
        this.bigColor = value;
    }

    public setBigCard(value){
        this.bigCard = value;
    }

    public getLevel(){
        return this.level;
    }
}
