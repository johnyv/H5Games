/**
 *  关于牌型的计算
*/

class CardUtils {
    private static _instance: CardUtils
    private effect_frame_rate:number = 8;
    private _channel: CommandChannel;

    public constructor() {
        this._channel = CommandChannel.instance;
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new CardUtils();
        }
        return this._instance;
    }

    /**
    * 根据牌的id，获得一张牌的等级
    *
    * @param id 牌的id
    * @return 与牌数字对应的等级
    */
    public getPoint(cardId): number {
        let point = 0;

        // 2个王必须放在前边判断
        if (cardId == 53) {
            //小王
            point = 16;
        } else if (cardId == 54) {
            //大王
            point = 17;
        } else {
            let modResult = cardId % 13;

            if (modResult == 1) {
                //A
                point = 14;
            } else if (modResult == 2) {
                //2
                point = 15;
            } else if (modResult == 3) {
                point = 3;
            } else if (modResult == 4) {
                point = 4;
            } else if (modResult == 5) {
                point = 5;
            } else if (modResult == 6) {
                point = 6;
            } else if (modResult == 7) {
                point = 7;
            } else if (modResult == 8) {
                point = 8;
            } else if (modResult == 9) {
                point = 9;
            } else if (modResult == 10) {
                point = 10;
            } else if (modResult == 11) {
                point = 11;
            } else if (modResult == 12) {
                point = 12;
            } else if (modResult == 0) {
                point = 13;
            }
        }

        return point;
    }

    private posObj = {};
    /**设置动画特效位置点 */
    public setPosByDir(value:Object):void{
        this.posObj = value;
    }

    /** 
     * 移除动画特效
    */
    private removeAnimate(): void {
        if (this.animateBmp) {
            egret.Tween.removeTweens(this.animateBmp);
            this.animateBmp.parent && this.animateBmp.parent.removeChild(this.animateBmp);
        }
    }

    private animateBmp: egret.Bitmap = new egret.Bitmap();
    /** 
     * 播放动画特效
    */
    public addAnimate(dir: string, choosenType): void {
        var uiLayer: egret.Sprite = this._channel.postCommand(ConstData.GAME_CONTROLLER, ConstData.GAME_GET_LAYER, ConstData.UI_LAYER);
        let dx: number;
        let dy: number;
        this.animateBmp.scaleX = ((dir == 'left' || dir == 'my') ? 1 : -1);
        this.animateBmp.alpha = 1;
        let mc:egret.MovieClip;
        let dragMc;
        switch (choosenType) {

            case 7://顺子
                this.removeAnimate();
                mc = AnimateManager.instance.createAnimate( "ddz_ani","shunzi", uiLayer, 0, this.effect_frame_rate, (mc) => {
                    mc.parent && mc.parent.removeChild(mc);
                });
                mc.x = this.posObj[dir].x;
                mc.y = this.posObj[dir].y;
                break;
            case 8://连对
                this.removeAnimate();
                mc = AnimateManager.instance.createAnimate("ddz_ani","liandui", uiLayer, 0, this.effect_frame_rate, (mc) => {
                    mc.parent && mc.parent.removeChild(mc);
                });
                mc.x = this.posObj[dir].x;
                mc.y = this.posObj[dir].y;
                break;
            case 9://三顺
            case 10://飞机带翅膀
            case 11://飞机带翅膀
                this.removeAnimate();
                mc = AnimateManager.instance.createAnimate( "ddz_ani","feiji", uiLayer, 0, this.effect_frame_rate, (mc) => {
                    mc.parent && mc.parent.removeChild(mc);
                });
                mc.x = this.posObj[dir].x;
                mc.y = this.posObj[dir].y;
                dragMc = AnimateManager.instance.createDragonBones(uiLayer,"aircraft-2_ske_json","aircraft-2_tex_json","aircraft-2_tex_png",()=>{this.finishDragonBones(dragMc)});
                dragMc.display.x = ConfigData.stageWidth / 2;
                dragMc.display.y = ConfigData.stageHeight / 2;
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_EFFECT, ['feiji_effect_snd_mp3']);
                break;
            case 12://炸弹
                this.removeAnimate();
                mc = AnimateManager.instance.createAnimate( "ddz_ani","zhadan" ,uiLayer, 0, this.effect_frame_rate, (mc) => {
                    mc.parent && mc.parent.removeChild(mc);
                });
                mc.x = this.posObj[dir].x;
                mc.y = this.posObj[dir].y;
                dragMc = AnimateManager.instance.createDragonBones(uiLayer,"Boom-1_ske_json","Boom-1_tex_json","Boom-1_tex_png",()=>{this.finishDragonBones(dragMc)});
                dragMc.display.x = ConfigData.stageWidth  / 2;
                dragMc.display.y = ConfigData.stageHeight / 2;
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_EFFECT, ['bomb_effect_snd_mp3']);
                break;
            case 13://火箭，王炸
                this.removeAnimate();
                mc = AnimateManager.instance.createAnimate("ddz_ani","huojian", uiLayer, 0, this.effect_frame_rate, (mc) => {
                    mc.parent && mc.parent.removeChild(mc);
                });
                mc.x = this.posObj[dir].x;
                mc.y = this.posObj[dir].y;
                dragMc = AnimateManager.instance.createDragonBones(uiLayer,"Boom-2_ske_json","Boom-2_tex_json","Boom-2_tex_png",()=>{this.finishDragonBones(dragMc)});
                dragMc.display.x = ConfigData.stageWidth / 2;
                dragMc.display.y = ConfigData.stageHeight / 2;
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_EFFECT, ['huojian_effect_snd_mp3']);
                break;
        }
    }

    /**
     * 动画播放完毕之后移除
     */
    private finishDragonBones(dragonMc:dragonBones.Armature):void{
        dragonMc.dispose();
        dragonMc.display && dragonMc.display.parent && dragonMc.display.parent.removeChild(dragonMc.display);
    }

    /** 播放音效*/
    public playCardSnd(dir: string, cur_card: CurCards): void {
        if (!cur_card) {
            return;
        }
        let choosenType = cur_card.type;
        let point = this.getPoint(cur_card.cards[0]);
        this.addAnimate(dir, choosenType);
        switch (choosenType) {
            case 1:
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['card' + point + '_snd_mp3']);
                break;
            case 2:
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['dui' + point + '_snd_mp3']);
                break;
            case 3:
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['san' + point + '_snd_mp3']);
                break;
            case 4://三带一
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['sandaiyi_snd_mp3']);
                break;
            case 5://三带一对
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['sandaiyidui_snd_mp3']);
                break;
            case 6://四代二
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['sidaier_snd_mp3']);
                break;
            case 7://顺子
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['shunzi_snd_mp3']);
                break;
            case 8://连对
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['liandui_snd_mp3']);
                break;
            case 9://三顺
            case 10://飞机带单翅膀
            case 11://飞机带对翅膀
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['feiji_snd_mp3']);
                break;
            case 12://炸弹
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['bomb_snd_mp3']);
                break;
            case 13://火箭，王炸
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['huojian_snd_mp3']);
                break;
            case 14://四带两对
                this._channel.postCommand(ConstData.SOUND_CONTROLLER, ConstData.SOUND_PLAY_POKER, ['sidailiangdui_snd_mp3']);
                break;
        }
    }

    public canPlay(curCards: CurCards, choosenCard: Array<Card>): boolean {
        if (!curCards) {
            CommandChannel.instance.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['上家还没出牌', 500, -1, 536]);
            return false;
        }
        let curHeadPoker = curCards.header;
        let curType = curCards.type;
        let choosenType = this.calcCardType(choosenCard);
        let choosenHeadPoker = this.calcHeadPoker(choosenType, choosenCard);
        //console.log('当前牌型', choosenType);
        /**如果牌型等于-1，说明是第一个出牌的，只要不是错误牌型就可以出牌*/
        if (curType == -1 && choosenType !== 0) return true;
        /**我是王炸什么牌不能出？*/
        if (choosenType == 13) return true;
        if (curType == 13) return false;
        /**就算是炸弹，也得看看前面是不是炸弹啊*/
        if (choosenType == 12) {
            if (curType == 12) {
                if (choosenHeadPoker > curHeadPoker) {
                    return true;
                }
            } else {
                return true;
            }
        }
        /**其余牌型需要牌型一致，头子更大，张数一致*/
        if (curType == choosenType && choosenHeadPoker > curHeadPoker && curCards.cards.length == choosenCard.length) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断牌型的函数
     * 这个函数可能会非常的长
    */
    public calcCardType(choosenCard: Array<Card>, pointsArr: Array<number> = null): number {
        let points = (choosenCard ? this.transCardsToPoint(choosenCard) : pointsArr);
        //console.log('计算牌型', points);
        //console.warn('是否连续',this.isNumContinuous(points))
        let len = points.length;
        if (len == 1) //单牌
        {
            return 1;
        } else if (len == 2) //对子
        {
            if (points[0] == points[1]) {
                return 2;
            }
            else if (points[0] + points[1] == 33) {
                return 13;
            }
            else {
                return 0;
            }
        } else if (len == 3 && points[0] == points[1] && points[1] == points[2]) //三不带
        {
            return 3
        }
        else if (len == 4) {
            if (points[0] == points[1] && points[1] == points[2] && points[2] == points[3]) //炸弹
            {
                return 12;
            } else if (this.calcSameNum(points) == 3) //最多有三张相等的，说明是三带一
            {
                return 4
            }
            return 0;
        } else if (len >= 5 && this.isNumContinuous(points)) //这里直接判断所有顺子，免得后面大于5的时候都去判断是否是顺子
        {
            return 7;
        } else if (len == 5 && this.calcSameNum(points) == 3 && this.calcDiffNum(points) == 2) //最大相同数为3，有两种点数，说明是三带二
        {
            return 5;
        } else if (len >= 6) //大于6的情况比较多，比如连对（n对），飞机（n飞，带或不带，3张飞还是4张飞）,四带二,四带两对
        {
            if (this.calcSameNum(points) == 3 && len % 3 == 0 && this.calcDiffNum(points) == len / 3 && this.calcDiffContin(points))//三张牌飞机不带
            {
                return 9;
            } else if (this.calcSameNum(points) == 2 && len % 2 == 0 && this.calcDiffNum(points) == len / 2 && this.calcDiffContin(points))//连对
            {
                return 8;
            } else if (len % 4 == 0 && this.sameNumAndContin(points, 3, len / 4))//三带一飞
            {
                return 10;
            } else if (len % 5 == 0 && this.calcSameNum(points) == 3 && this.sameNumAndContin(points, 3, len / 5) && this.calcDiffNum(points) == len / 5 * 2) //三带二飞
            {
                return 11;
            } else if (len == 6 && this.calcSameNum(points) == 4) //四带二
            {
                return 6
            } else if (len == 8 && this.calcSameNum(points) == 4 && this.getSameNum(points, 2) == 3)//四带两对
            {
                return 14;
            }
            return 0;

        } else {
            return 0; //什么牌型都不是，说明是错误牌型
        }
    }

    /**
     * 判断头子
    */
    public calcHeadPoker(type: CARD_TYPE, choosenCard: Array<Card>, pointsArr: Array<number> = null): number {
        let points = (choosenCard ? this.transCardsToPoint(choosenCard) : pointsArr);
        points.sort(function compare(a, b) {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            }
        });
        //console.log('计算头子', type, cards);
        switch (type) {
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
            case 9:
            case 12:
                return points[0];
            case 4:
            case 5:
            case 6:
            case 10:
                return points[2]; //机智的我，3带1或者3带2中第三张肯定是三同之一
            case 11:
                return this.calcFlightDouble(points);
        }
        return 0;
    }

    /**
     * 判断一个数组中最多有几个元素相等
    */
    public calcSameNum(arr: Array<number>): number {
        let bigSame = 0;
        for (let i = 0; i < arr.length; i++) {
            let temp = 1;
            for (let j = 0; j < arr.length; j++) {
                if (j == i) continue;
                if (arr[i] == arr[j]) {
                    temp++;
                }
            }
            if (temp > bigSame) {
                bigSame = temp;
            }
        }
        return bigSame;
    }

    /**过滤牌型gt数量限定，是否必须大于等于pointNum,false代表小于等于pointNum,true代表大于等于pointNum*/
    private getCardExpect(choosenCard: Array<Card>, expectArr: Array<any>, pointNum: number = 1, gt: boolean = false): Card {
        let j: number = 0;
        let cardLen: number = choosenCard.length;
        let points = this.transCardsToPoint(choosenCard);
        let getCards: Array<Card> = [];
        while (true) {
            for (j = 0; j < cardLen; j++) {
                let point = choosenCard[j].point;
                let isJump: boolean = false;
                for (let k: number = 0; k < expectArr.length; k++) {
                    if (expectArr[k] instanceof Card && expectArr[k] == choosenCard[j]) {
                        isJump = true;
                        break;
                    } else if (point == expectArr[k]) {
                        isJump = true;
                        break;
                    }
                }
                if (!gt) {
                    if (!this.getSameNumByPoint(points, pointNum + 1, point) && !isJump) {
                        getCards.push(choosenCard[j]);
                        // return choosenCard[j];
                    }
                } else {
                    if (this.getSameNumByPoint(points, pointNum, point) && !isJump) {
                        getCards.push(choosenCard[j]);
                        // return choosenCard[j];
                    }
                }
            }
            pointNum++;
            if (pointNum > 3) break;
        }
        if (getCards.length > 0) {
            getCards.sort(function (a, b) { return a.point - b.point });
            return getCards[0];
        }
        return null;
    }

    /**获取指定点数的牌*/
    private getCardArrByPoint(choosenCard: Array<Card>, point: number, getNum: number): Array<Card> {
        let cardsArr: Array<Card> = [];
        let cardLen: number = choosenCard.length;
        for (let j = 0; j < cardLen; j++) {
            //console.log(choosenCard[j].point,point,cardsArr.length,getNum,choosenCard[j].point==point&&cardsArr.length!=getNum);
            if (choosenCard[j].point == point && cardsArr.length != getNum) {
                cardsArr.push(choosenCard[j]);
            }
        }
        return cardsArr;
    }

    public getSameNumHeaderBigger(pointsArr: Array<number>, point: number, n = 0): Array<number> {
        let bigSame = 0;
        let sameNumArr: Array<number> = [];
        let getPoint: number;
        while (true) {
            for (let i = 0; i < pointsArr.length; i++) {
                getPoint = pointsArr[i];
                if (sameNumArr.indexOf(getPoint) >= 0 || point >= getPoint) continue;
                let temp = 1;
                for (let j = 0; j < pointsArr.length; j++) {
                    if (j == i) continue;
                    if (getPoint == pointsArr[j]) {
                        temp++;
                    }
                }
                if (temp == n) {
                    sameNumArr.push(pointsArr[i]);
                }
            }
            if (sameNumArr.length > 0) break;
            else {
                n++;
                if (n > 3) break;
            }
        }
        sameNumArr.length > 0 && sameNumArr.sort(function (a, b) { return b - a });
        return sameNumArr;
    }

    /**提示玩家牌中能够管上上一家的牌型 */
    public getBiggerThanCard(curCards: CurCards, choosenCard: Array<Card> = null, pointsArr: Array<number> = null): Array<Card> {
        let type: number = curCards.type;
        let header: number = curCards.header;
        let cursLen: number = curCards.cards.length;
        let getCards: Array<Card> = [];
        let points = (choosenCard ? this.transCardsToPoint(choosenCard) : pointsArr);
        let getPoint: number;
        let getPointArr: Array<any> = [];
        let i: number = 0;
        let j: number = 0;
        let cardNum: number = 0;
        let cardLen: number = choosenCard.length;
        let card: Card;
        if (type == 1 || type == 2 || type == 3 || type == 12) {
            //单张，对子，三张,炸弹
            cardNum = type < 4 ? type : 4;
            getPointArr = this.getSameNumHeaderBigger(points, header, cardNum);
            if (getPointArr.length > 0) {
                getPointArr.sort(function (a, b) { return a - b });
                // getPoint=getPointArr[Math.floor((Math.random()*getPointArr.length))];
                getPoint = getPointArr[0];//最小的能管上的点数
                // console.log('获取的数组',this.getCardArrByPoint(choosenCard,getPoint,cardNum));
                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, getPoint, cardNum));
                // console.log('得到的数组',getCards);
                if (getCards.length == cursLen) return getCards;
                else getCards.splice(0, getCards.length);
            }
        }
        if (type == 4 || type == 5 || type == 6 || type == 14) {
            //三带一，三带一对，四带二,四带两对
            if (type == 6 || type == 14)
                cardNum = 4;
            else
                cardNum = 3;

            getPointArr = this.getSameNumHeaderBigger(points, header, cardNum);
            if (getPointArr.length > 0) {
                getPointArr.sort(function (a, b) { return a - b });
                // getPoint=getPointArr[Math.floor((Math.random()*getPointArr.length))];
                getPoint = getPointArr[0];//最小的能管上的点数
                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, getPoint, cardNum));
                if (type == 4) {
                    //三带一
                    card = this.getCardExpect(choosenCard, [getPoint], 1);
                    card && (getCards.push(card));
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                } else if (type == 5) {
                    //三带一对
                    card = this.getCardExpect(choosenCard, [getPoint], 2);
                    card && (getCards = getCards.concat(this.getCardArrByPoint(choosenCard, card.point, 2)));
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                } else if (type == 6) {
                    //四带二
                    card = this.getCardExpect(choosenCard, [getPoint], 2);
                    card && (getCards.push(card));
                    card = this.getCardExpect(choosenCard, [getPoint, card], 2);
                    card && (getCards.push(card));
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                } else if (type == 14) {
                    //四带两对
                    card = this.getCardExpect(choosenCard, [getPoint], 2, true);
                    card && (getCards = getCards.concat(this.getCardArrByPoint(choosenCard, card.point, 2)));
                    card = this.getCardExpect(choosenCard, [getPoint, card.point], 2, true);
                    card && (getCards = getCards.concat(this.getCardArrByPoint(choosenCard, card.point, 2)));
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                }
            }
        }
        if (type == 7 || type == 8 || type == 9) {
            //顺子，连对，三顺
            cardNum = type - 6;
            getPointArr = this.getShunziBiggerThan(points, cursLen / cardNum, header, cardNum, true);
            if (getPointArr.length > 0) {
                for (i = 0; i < getPointArr.length; i++) {
                    getCards = getCards.concat(this.getCardArrByPoint(choosenCard, getPointArr[i], cardNum));
                }
                if (getCards.length == cursLen) return getCards;
                else getCards.splice(0, getCards.length);
            }
        }
        if (type == 10 || type == 11) {
            //飞机带单翅膀，飞机带对翅膀
            cardNum = 3;
            let coniNum: number = type == 10 ? cursLen / 4 : cursLen / 5;
            getPointArr = this.getShunziBiggerThan(points, coniNum, header, cardNum, true);
            if (getPointArr.length > 0) {
                for (i = 0; i < getPointArr.length; i++) {
                    getCards = getCards.concat(this.getCardArrByPoint(choosenCard, getPointArr[i], cardNum));
                }
                if (type == 11) {
                    //飞机带对翅膀单独判断
                    if (this.getSameNum(points, 2) > coniNum * 2) {
                        for (i = 0; i < coniNum; i++) {
                            card = this.getCardExpect(choosenCard, getPointArr, 2, true);
                            if (card) {
                                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, card.point, 2))
                                getPointArr.push(card.point);
                            }
                        }
                    }
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                } else {
                    for (i = 0; i < coniNum; i++) {
                        card = this.getCardExpect(choosenCard, getPointArr, 2);
                        if (card) {
                            getCards = getCards.concat(this.getCardArrByPoint(choosenCard, card.point, 1))
                            getPointArr.push(card);
                        }
                    }
                    if (getCards.length == cursLen) return getCards;
                    else getCards.splice(0, getCards.length);
                }
            }
        }
        //如果对方牌型不是炸弹，而我有炸弹，肯定能管上
        if (type != 12) {
            //是否有炸弹
            getPointArr = this.getSameNumHeaderByType(points, 4, true);
            if (getPointArr.length > 0) {
                getPointArr.sort(function (a, b) { return a - b });
                // getPoint=getPointArr[Math.floor((Math.random()*getPointArr.length))];
                getPoint = getPointArr[0];//最小的能管上的点数
                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, getPoint, 4))
                return getCards;
            }
            //是否有王炸
            if (this.getWangzha(points)) {
                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, 16, 1));
                getCards = getCards.concat(this.getCardArrByPoint(choosenCard, 17, 1));
                return getCards;
            }
        }
        return getCards;
    }


    /** 
     * 查询牌堆里是否具有某种类型的牌型
    */
    public biggerThan(type: number, header: number, cursLen: number, choosenCard: Array<Card> = null, pointsArr: Array<number> = null): boolean {
        if (type == -1)
            return true;
        let points = (choosenCard ? this.transCardsToPoint(choosenCard) : pointsArr);
        if (type == 13) return false;//对方的牌为王炸
        if (this.getWangzha(points)) return true;//王炸无敌
        if (type != 12 && this.getSameNumHeaderByType(points, 4) > -1) return true;//如果对方牌型不是炸弹，而我有炸弹，肯定能管上
        if (points.length < cursLen) return false;//如果我剩余牌的张数小于对方出的张数，肯定管不上
        let cardNum: number;
        if (type == 1 || type == 2 || type == 3 || type == 12) {
            //单张，对子，三张,炸弹
            cardNum = type < 4 ? type : 4;
            if (this.getSameNumHeaderByType(points, cardNum) > header) return true;
        }
        else if (type == 4 || type == 5 || type == 6 || type == 14) {
            //三带一，三带一对，四带二,四带两对
            if (type == 6 || type == 14)
                cardNum = 4;
            else
                cardNum = 3;
            // let bigHeader=this.getSameNumHeaderByType(points,cardNum);
            if (this.getSameNumHeaderByType(points, cardNum) < header) return false;
            if (type != 5 && type != 14)
                return true;
            else if (type == 5 && this.getSameNum(points, 2) > 1)
                return true;//三带二单独判断
            else if (type == 14 && this.getSameNum(points, 2) > 2) {
                return true;//四带两对单独判断
            }
        } else if (type == 7 || type == 8 || type == 9) {
            //顺子，连对，三顺
            cardNum = type - 6;
            if (this.getShunziBiggerThan(points, cursLen / cardNum, header, cardNum)) return true;
        } else if (type == 10 || type == 11) {
            //飞机带单翅膀，飞机带对翅膀
            cardNum = 3;
            let coniNum: number = type == 10 ? cursLen / 4 : cursLen / 5;
            if (this.getShunziBiggerThan(points, coniNum, header, cardNum)) {
                if (type == 11) {
                    if (this.getSameNum(points, 2) > 3) return true;
                    //飞机带对翅膀单独判断
                } else
                    return true;
            }
        }
        return false;
    }

    /**
     * 计算一个数组中相同数为num的点数有几种,并判断是否连续
    */
    private getSameNum(arr: Array<number>, num: number): number {
        var temp = 0;
        let calced = [];
        for (let i = 0; i < arr.length; i++) {
            //[3,3,3]
            if (calced.indexOf(arr[i]) != -1) continue;
            let temp1 = 1;
            for (let j = 0; j < arr.length; j++) {
                if (j == i) continue;
                if (arr[i] == arr[j]) {
                    temp1++;
                }
            }
            if (temp1 >= num) {
                calced.push(arr[i]);
                temp++;
            }
        }
        return temp
    }

    /** 
     * 判断是否有王炸
    */
    public getWangzha(pointsArr: Array<number>): boolean {
        return pointsArr.indexOf(16) >= 0 && pointsArr.indexOf(17) >= 0;
    }

    /** 
     * 判断一个数组中是否具有n个相等的元素，如果有返回最大元素的点数，否则返回-1
    */
    public getSameNumHeaderByType(pointsArr: Array<number>, n = 0, getArr: Boolean = false): any {
        let bigSame = 0;
        let sameNumArr: Array<number> = [];
        for (let i = 0; i < pointsArr.length; i++) {
            if (sameNumArr.indexOf(pointsArr[i]) >= 0) continue;
            let temp = 1;
            for (let j = 0; j < pointsArr.length; j++) {
                if (j == i) continue;
                if (pointsArr[i] == pointsArr[j]) {
                    temp++;
                }
            }
            if (temp >= n) {
                sameNumArr.push(pointsArr[i]);
            }
        }
        sameNumArr.length > 0 && sameNumArr.sort(function (a, b) { return b - a });
        if (!getArr) return sameNumArr.length > 0 ? sameNumArr[0] : -1;
        else return sameNumArr;
    }


    /** 
     * 判断一个数组中是否具有比某个顺子大的牌型,len牌的长度，header最小值，
    */
    public getShunziBiggerThan(pointsArr: Array<number>, len, header, n, isGetPoint: boolean = false): any {
        if (header == 14) return false;//如果顺子中带A那么肯定管不上
        //开始判断是否具有比header大的点数，而且是连续的
        let getPointArr: Array<number> = [];
        for (let i: number = header + 1; i <= 14; i++) {
            getPointArr.splice(0, getPointArr.length);
            if (pointsArr.indexOf(i) >= 0) {
                let getLen: number = 0;
                for (let j = i; j > i - len; j--) {
                    if (pointsArr.indexOf(j) < 0 || !this.getSameNumByPoint(pointsArr, n, j)) break;
                    getPointArr.push(j);
                    getLen++;
                }

                if (getLen == len) {
                    if (isGetPoint) {
                        return getPointArr;
                    } else return true;
                }
            }
        }
        if (isGetPoint) {
            return getPointArr;
        } else return true;
    }

    /** 
     * 判断一个牌组中是否具有n张以上点数为p的牌,如果samePoint不为null则获取所有予samePoint不相同的
    */
    public getSameNumByPoint(pointsArr: Array<number> = null, n, point): boolean {
        let len: number = pointsArr.length;
        let sameNum: number = 0;
        for (let i: number = 0; i < len; i++) {
            pointsArr[i] == point && sameNum++
        }
        return sameNum >= n;
    }

    /**
     * 判断一个数组有多少不相同的元素
    */
    private calcDiffNum(arr: Array<number>): number {
        let ele = 0;
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return temp.length;
    }

    private calcDiffContin(arr: Array<number>): boolean {
        let ele = 0;
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return this.isNumContinuous(temp);
    }

    /**
     * 判断一个数组是否是连续的
    */
    private isNumContinuous(arr: Array<number>): boolean {
        arr.sort(function (a, b) { return a - b });
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 15) return false;
            if (i == arr.length - 1) return true
            if (arr[i] != arr[i + 1] - 1) {
                return false;
            }
        }
        return true;
    }

    /**
     * 计算一个数组中相同数为num的点数有几种,并判断是否连续
    */
    private sameNumAndContin(arr: Array<number>, num: number, equNum: number): boolean {
        var temp = 0;
        let calced = [];
        for (let i = 0; i < arr.length; i++) {
            //[3,3,3]
            if (calced.indexOf(arr[i]) != -1) continue;
            let temp1 = 1;
            for (let j = 0; j < arr.length; j++) {
                if (j == i) continue;
                if (arr[i] == arr[j]) {
                    temp1++;
                }
            }
            if (temp1 == num) {
                calced.push(arr[i]);
                temp++;
            }
        }
        return temp == equNum && this.calcDiffContin(calced);
    }

    /**
     * 专门用来计算飞机带对子的头子
    */
    private calcFlightDouble(arr: Array<number>): number {
        //先找到有三张的
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            let num = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    num++;
                }
            }
            if (num == 3) {
                if (temp.indexOf(arr[i]) == -1) {
                    temp.push(arr[i]);
                }
            }
        }
        let max = 0;
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] > max) {
                max = temp[j];
            }
        }
        return max;
    }


    /**将牌组转换出index*/
    public transCardsToIndex(choosenCard: Array<Card>): Array<number> {
        let arr = [];
        for (let i = 0; i < choosenCard.length; i++) {
            arr.push(choosenCard[i].index);
        }
        return arr;
    }

    /**将牌组转换出CardModule发送给服务器用的消息*/
    public transCardsToCardList(choosenCard: Array<Card>): Array<number> {
        let arr = [];
        for (let i = 0; i < choosenCard.length; i++) {
            let card: Card = choosenCard[i];
            let cardModule: com.protobuff.data.CardModule = new com.protobuff.data.CardModule();
            cardModule.color = this.getColorByIndex(card.index);
            cardModule.value = this.getPoint(card.index);
            arr.push(cardModule);
        }
        return arr;
    }
    /**根据牌数据结构将牌组转换出point*/
    public transCardsToPoint(choosenCard: Array<Card>): Array<number> {
        let arr = [];
        for (let i = 0; i < choosenCard.length; i++) {
            arr.push(choosenCard[i].point);
        }
        return arr;
    }

    /** 
     * 解析从服务传过来的牌组
     * [
     * {"SeatNo":0,"Card":{"CardID":42,"CardValue":0,"CardSuit":"Spade","CardName":"3"}}
     * ]
    */
    public getIndexArr(cardsArr: Array<any>): Array<number> {
        var cardsIdArr: Array<number> = [];
        var len: number = cardsArr.length;

        for (let i: number = 0; i < len; i++) {
            cardsIdArr.push(this.getCardId(cardsArr[i].color, cardsArr[i].value));
            // cardsArr[i].Card?cardsIdArr.push(cardsArr[i].Card.CardID):cardsIdArr.push(cardsArr[i].CardID);
        }
        return cardsIdArr;
    }

    /**
     *根据牌id得到牌的花色
    **/
    public getColorByIndex(index: number): number {
        if (index >= 1 && index <= 13) {
            return 1;
        } else if (index >= 14 && index <= 26) {
            return 0;
        } else if (index >= 27 && index <= 39 || index == 54) {
            return 2;
        } else if (index >= 40 && index <= 53) {
            return 3;
        }
        return;
    }

    /** 做一下映射*/
    public getCardId(color: number, value: number): number {
        //花色(0.梅花;1.方块;2.红桃;3.黑桃)
        //值(3-15,小王:16,大王:17)
        if (value == 16) {
            return 53;
        } else if (value == 17) {
            return 54;
        }
        if (color == 0 || !color) {
            //梅花
            if (value == 14) {
                return 14;
            } else if (value == 15) {
                return 15;
            }
            return value + 13;
        } else if (color == 1) {
            //方块
            if (value == 14) {
                return 1;
            } else if (value == 15) {
                return 2;
            }
            return value;
        } else if (color == 2) {
            //红桃
            if (value == 14) {
                return 27;
            } else if (value == 15) {
                return 28;
            }
            return value + 26;
        } else if (color == 3) {
            //黑桃
            if (value == 14) {
                return 40;
            } else if (value == 15) {
                return 41;
            }
            return value + 39;
        }
    }

    /** 
     * 解析从服务器传过来的数据（牌的id）
    */
    public getCurCardsByIds(cardsArr: Array<any>): CurCards {
        let pointsArr: Array<any> = [];
        var curCards: CurCards = new CurCards();
        if (cardsArr) {
            let len: number = cardsArr.length;
            for (let i: number = 0; i < len; i++) {
                let cardID = parseInt(cardsArr[i]);
                curCards.cards.push(cardID);
                pointsArr.push(this.getPoint(cardID));
            }
            curCards.type = this.calcCardType(null, pointsArr);
            curCards.header = this.calcHeadPoker(curCards.type, null, pointsArr);
        }
        return curCards;
    }

    /** 
     * 解析从服务器传过来的数据并且得到CUR_CARDS数据
    */
    public getCurCards(cardsArr: Array<any>): CurCards {
        let pointsArr: Array<any> = [];
        let len: number = cardsArr.length;
        var curCards: CurCards = new CurCards();
        curCards.cards = [];
        for (let i: number = 0; i < len; i++) {
            let cardObj: com.protobuff.data.CardModule = cardsArr[i];
            let cardId: number = this.getCardId(cardObj.color, cardObj.value);
            curCards.cards.push(cardId);
            // curCards.cards.push(cardObj.CardID);
            pointsArr.push(this.getPoint(cardId));
        }
        curCards.type = this.calcCardType(null, pointsArr);
        curCards.header = this.calcHeadPoker(curCards.type, null, pointsArr);
        // if(data.Type==-1&&data.Header==-1){
        //     //可能断线，有服务器托管，动态解析服务器传过来牌组的Header和Type
        //     curCards.type=this.calcCardType(null,pointsArr);
        //     curCards.header= this.calcHeadPoker(curCards.type, null,pointsArr);
        // }
        // else{
        //     curCards.type=data.Type;
        //     curCards.header=data.Header;
        // }
        return curCards;
    }

    private _cardPool: Array<Card> = [];
    /** 
     * 从缓存池中取牌
    */
    public getCardFromPool(cardId: number, w: number, h: number): Card {
        let card: Card;
        for (let i: number = 0; i < this._cardPool.length; i++) {
            if (this._cardPool[i].index == cardId) {
                card = this._cardPool[i];
                this._cardPool.splice(i, 1);
            }
        }
        !card && (card = new Card(cardId));
        card.setWidth(w);
        card.setHeight(h);
        return card;
    }

    /** 
     * 缓存玩家的牌
    */
    public addCardToPool(card: Card): void {
        for (let i: number = 0; i < this._cardPool.length; i++) {
            if (this._cardPool[i].index == card.index) {
                return;
            }
        }
        card.isSelect = false;
        card.currentState = false;
        card.onTouch = false;
        card.touchEnabled = true;
        this._cardPool.push(card);
    }

    /** 
	 * 销毁,释放内存
	*/
    public destroy(): void {
        CardUtils._instance = null;
        this._channel = null;
        let len = this._cardPool.length;
        for (let i: number = 0; i < len; i++) {
            this._cardPool[i].destroy();
        }
        this._cardPool.splice(0, len);
        this._cardPool = null;
    }
}

/**
 * 牌型
*/
class CARD_TYPE {    //各种牌型的对应数字
    public static PASS_CARDS = -2; //过
    public static NO_CARDS = -1; //前面还没有牌（首家）
    public static ERROR_CARDS = 0; //错误牌型
    public static SINGLE_CARD = 1; //单牌
    public static DOUBLE_CARD = 2; //对子
    public static THREE_CARD = 3;//3不带
    public static THREE_ONE_CARD = 4;//3带1
    public static THREE_TWO_CARD = 5; //3带2
    public static BOMB_TWO_CARD = 6; //4带2
    public static BOMB_FOUR_CARD = 7; //连牌
    public static CONNECT_CARD = 8; //连对
    public static COMPANY_CARD = 9; //飞机不带
    public static AIRCRAFT_CARD = 10; //飞机带单牌
    public static AIRCRAFT_WING = 11; //飞机带对子
    public static BOMB_CARD = 12; //炸弹
    public static KINGBOMB_CARD = 13;//王炸
    public static BOMB_TWO_DOUBLE__CARD = 14;//四带两对
}