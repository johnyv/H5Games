class NiuNiuCards {

    /**
     * 牛牛的一副手牌
     */
    public static allCards: Array<number> = new Array<number>(
        // 方块   1-13分别为A-K
        101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
        // 梅花
        201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
        // 红桃
        301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313,
        // 黑桃
        401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413,
    );

    /**
     * 牛牛获取手牌的名称
     * @Param value 一张手牌的值
     */
    public static getOneCardName(value: number): string {
        //牌的花色类型
        let type = value / 100;
        //牌的值
        let num = value % 100;

        let cardName: string = "";

        switch (type) {
            case 1:
                cardName += "方块";
                break;
            case 2:
                cardName += "梅花";
                break;
            case 3:
                cardName += "红桃";
                break;
            case 4:
                cardName += "黑桃";
                break;
            default:
                break;
        }


        switch (num) {
            case 1:
                cardName += "A";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                cardName += num;
                break;
            case 11:
                cardName += "J";
                break;
            case 12:
                cardName += "Q";
                break;
            case 13:
                cardName += "K";
                break;
            default: break;
        }

        return cardName.toString();
    }

    /**
     * 牌组1减去牌组2
     *
     * @param cards1 牌组1
     * @param cards2 牌组2
     * @return 相减后的
     */
    public static subCards(cards1: Array<number>, cards2: Array<number>): Array<number> {
        if (null == cards2) {
            return cards1;
        }
        let res: Array<number> = cards1;
        for (let card2 in cards2) {
            res = this.removeOne(res, cards2[card2]);
        }
        return res;
    }

    /**
     * 牌组减去一张牌
     *
     * @param cards 牌组
     * @param card  牌
     * @return 相减后的
     */
    public static removeOne(cards: Array<number>, card: number): Array<number> {
        let tem: Array<number> = cards;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i] == card) {
                tem.splice(i, 1);
                break;
            }
        }
        return tem;
    }

    /**
     * 判断是不是小牛牛：五张牌的值全部小于等于5 且五张牌的值相加小于10
     * @param cards 牌组
     * @return true 是 false 不是
     */
    public static isSmallNiu(cards: Array<number>): Boolean {

        let sum = 0;

        for (let i: number = 0; i < cards.length; i++) {
            let card = cards[i];
            if ((card % 100) >= 5) {
                return false;
            }
            let cardValue = card % 100;
            sum += cardValue;
        }

        if (sum >= 10) {
            return false;
        }
        return true;
    }

    /**
     * 是否是炸弹：牌面有四张相同，第五张牌随意
     * @param cards 牌组
     * @return true 是 false 不是
     */
    public static isBomb(cards: Array<number>): Boolean {
        try {
            let cardValue: Array<number> = this.getValueCards(cards);
            let length = cardValue.length;
            for (let i = 0; i < length - 3; i++) {
                let sanmeCount = 1;
                let cardValve = cards[i] % 100;
                for (let j = i + 1; j < length; j++) {
                    if (cards[j] == cardValve) {
                        sanmeCount++;
                    }
                }

                if (sanmeCount >= 4) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    private static getValueCards(cards: Array<number>): Array<number> {
        let result: Array<number> = new Array<number>();
        for (let i = 0; i < cards.length; i++) {
            let value = cards[i] % 100;
            result.push(value);
        }
        return result;
    }

    /**
     * 判断是否是五花牛，牌面为JQK的任意组合
     * @param cards 牌组
     * @return true 是 false 不是
     */
    public static isFiveFlowerNiu(cards: Array<number>): Boolean {
        let count = 0;
        for (let i: number = 0; i < cards.length; i++) {
            let card = cards[i];
            let cardValue = card % 100;
            if (cardValue >= 11 && cardValue <= 13) {
                count++;
            }
        }

        if (count == 5) {
            return true;
        }
        return false;
    }

    /**
     * 是否是四花牛 四张牌为JQK。第五张牌为10
     * @param cards 牌组
     * @return true 是 false 不是
     */
    public static isFourFlowerNiu(cards: Array<number>): Boolean {
        let count = 0;

        for (let i: number = 0; i < cards.length; i++) {
            let card = cards[i];
            let cardValue = card % 100;
            if (cardValue >= 11 && cardValue <= 13) {
                count++;
                cards = this.subCards(cards, [card]);
            }
        }

        if (count == 4 && cards[0] % 100 == 10) {
            return true;
        }

        return false;
    }

    /**
     * 是否是最小的牛牛 一副牌组五张牌全部都是春夏秋冬梅兰竹菊中的牌
     * @param cards 牌组
     * @return true 是 false 不是
     */
    public static isSmallestNiu(cards: Array<number>): Boolean {
        let count = 0;
        for (let i: number = 0; i < cards.length; i++) {
            let card = cards[i];
            if (card < 100) {
                count++;
            }
        }

        if (count == 5) {
            return true;
        }

        return false;
    }

    /**
     * 获取牌组的牛牛牌组属性
     * @param cards 牌组
     * @return 牌组属性实体类
     */
    public static getCardsLevel(cards: Array<number>): NiuNiuLevel {
        //是否是小牛牛
        if (this.isSmallNiu(cards)) {
            return this.setNiuNiuLevelBean(14, NiuNiuLevel.FIVE_SMALL_NIU_ODD, cards);
        }

        if (this.isBomb(cards)) {
            return this.setNiuNiuLevelBean(13, NiuNiuLevel.FIVE_SMALL_NIU_ODD, cards);
        }

        if (this.isFiveFlowerNiu(cards)) {
            return this.setNiuNiuLevelBean(12, NiuNiuLevel.FIVE_FLOWER_NIU_ODD, cards);
        }

        if (this.isFourFlowerNiu(cards)) {
            return this.setNiuNiuLevelBean(11, NiuNiuLevel.FOUR_FLOWER_NIU_ODD, cards);
        }

        if (this.isSmallestNiu(cards)) {
            return this.setNiuNiuLevelBean(10, NiuNiuLevel.NIU_NIU_ODD, cards);
        }

        let level = this.getNiu(cards);

        switch (level) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return this.setNiuNiuLevelBean(level, NiuNiuLevel.UNDER_SEVEN_NIU_ODD, cards);
            case 7:
            case 8:
            case 9:
                return this.setNiuNiuLevelBean(level, NiuNiuLevel.NIU_SEVEN_TO_NINE_ODD, cards);
            case 10:
                return this.setNiuNiuLevelBean(level, NiuNiuLevel.NIU_NIU_ODD, cards);
        }
        return null;
    }

    /**
     * 获取手牌的等级 用于 无牛-牛牛的牌型
     * @param cards
     * @return
     */
    private static getNiu(cards: Array<number>): number {

        let sum = 0;
        let score = 0;

        let hasNiu = false;

        let niuCards = this.getNiuCards(cards);
        if (niuCards.length > 0) {
            hasNiu = true;
        }

        if (hasNiu) {
            for (let i: number = 0; i < cards.length; i++) {
                let value = cards[i];
                if (value % 100 < 10) {
                    sum += value % 100;
                } else {
                    sum += 10;
                }
            }

            score = sum % 10 == 0 ? 10 : sum % 10;
            return score;
        }

        return 0;
    }

    /**
     * 设置牛牛的等级Bean
     * @param level
     * @param odds
     * @param cards
     * @return
     */
    private static setNiuNiuLevelBean(level: number, odds: number, cards: Array<number>): NiuNiuLevel {
        let levelBean: NiuNiuLevel = new NiuNiuLevel();

        levelBean.setLevel(level);
        levelBean.setOdds(odds);
        let maxCard = this.getMaxCard(cards);
        if (maxCard < 100) {
            levelBean.setBigColor(0);
            levelBean.setBigCard(0);
        } else {
            levelBean.setBigColor(maxCard / 100);
            levelBean.setBigCard(maxCard % 100);
        }
        return levelBean;
    }

    /**
     * 获取手牌中的最大的一张
     * @param cards
     * @return
     */
    private static getMaxCard(cards: Array<number>): number {

        let cardList = [];
        for (let i: number = 0; i < cards.length; i++) {
            let card = cards[i];
            cardList.push(card);
        }

        cardList.sort((o1, o2) => {
            if (o1 < o2) {
                return 1;
            } else {
                return -1;
            }
        });

        return cardList[0];
    }

    /**
     * 排序
     * @param numbers
     */
    public static sort(numbers: Array<number>) {
        // 记录临时中间值
        let temp;
        // 数组大小
        let size = numbers.length;
        for (let i = 0; i < size - 1; i++) {
            for (let j = i + 1; j < size; j++) {
                // 交换两数的位置
                if (numbers[i] > numbers[j]) {
                    temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    }

    /**
     * 获取手牌中可以组成有牛牌的所有组合
     * @param cards
     * @return
     */
    public static getNiuCards(cards: Array<number>) {
        let resultList = [];
        for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < cards.length; j++) {
                for (let k = 0; k < cards.length; k++) {
                    if (cards[i] != cards[j] && cards[i] != cards[k] && cards[j] != cards[k]) {
                        if ((this.getCardValue(cards[i]) + this.getCardValue(cards[j]) + this.getCardValue(cards[k])) % 10 == 0) {
                            let niuArray = [cards[i], cards[j], cards[k]];
                            resultList.concat(niuArray);
                        }
                    }
                }
            }
        }
        return resultList;
    }

    private static getCardValue(card: number): number {
        return card % 100 > 10 ? 10 : card % 100;
    }

    /**
     * 将手牌按照3+2的形式进行排列，前面三张为牛排，后面两张为分牌
     * @param cards
     * @return
     */
    public static convertSortCardToString(cards: Array<number>): string {
        let builder = "";
        if (this.isSmallNiu(cards) || this.isFiveFlowerNiu(cards) || this.isFourFlowerNiu(cards) || this.isBomb(cards) || this.getCardsLevel(cards).getLevel() == 0) {
            let cardsList = [];
            for (let i = 0; i < cards.length; i++) {
                cardsList.push(cards[i]);
            }

            this.sortCardList(cardsList);

            for (let i = 0; i < cardsList.length; i++) {
                builder += cardsList[i];
                if (i != cardsList.length - 1) {
                    builder += "|";
                }
            }
        } else {

            let niuCards = this.getNiuCards(cards)[0];
            let otherCards = this.subCards(cards, niuCards);

            let niuList = [];
            let otherList = [];
            for (let i: number = 0; i < niuCards.length; i++) {
                niuList.push(i);
            }
            for (let i: number = 0; i < otherCards.length; i++) {
                otherList.push(i);
            }

            this.sortCardList(niuList);
            this.sortCardList(otherList);

            for (let i: number = 0; i < niuList.length; i++) {
                builder += i + "|";
            }

            for (let i = 0; i < otherList.length; i++) {
                builder += otherList[i];
                if (i != otherList.length - 1) {
                    builder += "|";
                }
            }

        }
        return builder;
    }

    /**
     * 排序
     * @param cardList
     */
    private static sortCardList(cardList: Array<number>) {
        cardList.sort((o1: number, o2: number) => {
            if (o1 % 100 < o2 % 100) {
                return 1;
            } else if (o1 % 100 > o2 % 100) {
                return -1;
            } else {
                if (o1 / 100 < o2 / 100) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
    }


    public static main(args: string) {

        //        int[] cards = new int[]{103,210,106,408,309};
        //        int[] cards = new int[]{110,213,202,405,208};
        let cards = [212, 311, 208, 301, 201];
        let level: NiuNiuLevel = this.getCardsLevel(cards);
        //        List<int[]> level = getNiuCards(cards);
        //        for (int i = 0;i < level.size();i++){
        //            System.out.println(Arrays.toString(level.get(i)));
        //        }
        console.log(level.getLevel());
    }
}
