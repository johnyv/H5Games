class SendCardAnimal {
        private static _instance:SendCardAnimal;
        private _cardLayer: egret.Sprite = null;
        private _overfun: Function = null;
        private _overThis: any = null;
        private _params:any=null;
        private _timer1: egret.Timer = null;
        private _mCard1: Card = null;
        private _mCard2: Card = null;
        private _mCard3: Card = null;
        private _channel:CommandChannel;
        private _dx:number=0;
        private _dy:number;
        //发牌速度
        private _sendSpeed=200;
        public constructor() {
            this._channel=CommandChannel.instance;
            this._dx=(ConfigData.stageWidth-90)/2;
            this._dy=144;
            this._timer1 = new egret.Timer(200, 17);
        }
    
        public static get instance():SendCardAnimal{
            !SendCardAnimal._instance&&(SendCardAnimal._instance=new SendCardAnimal());
            return SendCardAnimal._instance;
        }

        public startAnimal(dizhuCard:Array<Card>,cardLayer:egret.Sprite,overfun: Function, thisObj: any,params=null,) {
            this._mCard1=dizhuCard[0];
            this._mCard2=dizhuCard[1];
            this._mCard3=dizhuCard[2];
            this._overfun = overfun;
            this._overThis = thisObj;
            this._params=params;
            this._cardLayer = cardLayer;
            this.sendCardAni();
        }

        //发牌
        private sendCardAni(): void {
            //动画假牌底
            var card: Card = CardUtils.instance.getCardFromPool(0,90,124);
            // card.setWidth(90);
            // card.setHeight(124);
            var UILayer:egret.Sprite=this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_GET_LAYER,ConstData.UI_LAYER);
            UILayer.addChild(card);
            card.name='bottomCard';
            card.x = this._dx;
            card.y = this._dy;
            this._cardLayer.parent.addChild(this._mCard1);
            this._mCard1.x = this._dx;
            this._mCard1.y = this._dy;
            
            this._cardLayer.parent.addChild(this._mCard2);
            this._mCard2.x = this._dx;
            this._mCard2.y = this._dy;
            this._cardLayer.parent.addChild(this._mCard3);
            this._mCard3.x = this._dx;
            this._mCard3.y = this._dy;

            egret.Tween.get(this._mCard1, { loop: true }).wait(0).call(()=>{this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_SOUND,['play_card_snd_mp3']);}).to({ x: ConfigData.CARDWIDTH }, this._sendSpeed).to({ x:this._dx}, 0).wait(100);
            egret.Tween.get(this._mCard2, { loop: true }).wait(50).call(()=>{this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_SOUND,['play_card_snd_mp3']);}).to({ x: ConfigData.stageWidth-ConfigData.CARDWIDTH }, this._sendSpeed).to({ x: this._dx}, 0).wait(50);
            egret.Tween.get(this._mCard3, { loop: true }).wait(100).call(()=>{this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_SOUND,['play_card_snd_mp3']);}).to({ y: this._dy+ConfigData.VERCARGAP + ConfigData.CARDHEIGHT}, this._sendSpeed).to({ y: this._dy}, 0);

            this._timer1.start();
            if(!this._timer1.hasEventListener(egret.TimerEvent.TIMER))
                this._timer1.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        }
        
        private onTimer(e: egret.TimerEvent): void {
            var ccount: number = this._timer1.currentCount;
            if (ccount == this._timer1.repeatCount) {
                egret.Tween.removeTweens(this._mCard1);
                egret.Tween.removeTweens(this._mCard2);
                egret.Tween.removeTweens(this._mCard3);

                this.setCard(Player.instance.cardList);
                this._timer1.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this._timer1.reset();

                this.showOwnerAni();
            }
            else {
                var arr: Array<Card> = Player.instance.cardList.slice(0, ccount);
                this.setCard(arr);
            }
        }

        private showOwnerAni(): void {
            
            var UILayer:egret.Sprite=this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_GET_LAYER,ConstData.UI_LAYER);
            var bottomCard:Card=<Card>UILayer.getChildByName('bottomCard');
            bottomCard&&bottomCard.parent.removeChild(bottomCard);
            this._mCard1.parent && this._mCard1.parent.removeChild(this._mCard1);
            this._mCard2.parent && this._mCard2.parent.removeChild(this._mCard2);
            this._mCard3.parent && this._mCard3.parent.removeChild(this._mCard3);
            // this._mCard1.x = this._dx;
            // this._mCard1.y= this._dy;
            
            // this._mCard2.x = this._dx;
            // this._mCard2.y= this._dy;

            // this._mCard3.x = this._dx;
            // this._mCard3.y= this._dy;

            // egret.Tween.get(this._mCard1).to({ x: this._dx-ConfigData.CARDWIDTH-10 }, 150);
            // egret.Tween.get(this._mCard2).to({ x: this._dx+ConfigData.CARDWIDTH+10 }, 150);

            this._overfun&&this._overfun.call(this._overThis,this._params);
        }

        private setCard(cardlist: Array<Card>) {
            this._cardLayer.removeChildren();
            var len: number = cardlist.length;
            var dis: number = ConfigData.stageWidth - ConfigData.LEFTGAP - ConfigData.CARDWIDTH;
            var gap: number = dis / (len - 1);
            if (gap > ConfigData.HORCARGAP) {
                gap= ConfigData.HORCARGAP;
            }

            var sx: number = ConfigData.LEFTGAP+(dis-gap*(len-1)-ConfigData.CARDWIDTH)/2;

            for (var i:number = 0; i < len; i++) {
                var card: Card = cardlist[i];
                card.y = 528;
                card.x = sx + i * gap;
                this._cardLayer.addChild(card);
            }
        }

        //地主牌飞到指定位置
        public Release(loctid: number): void {
            if (loctid == 0) {
                var animateLayer:egret.DisplayObjectContainer=this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_GET_LAYER,ConstData.ANIMATE_LAYER);
                animateLayer.removeChildren();
                return;
            }
            var tx: number = 20;//500;20;
            var ty: number = 100;//100;700;
            if (loctid == 1) {
                tx = 40;
                ty = -520;
            }
            else if (loctid == 2) {
                tx = 500;
                ty = -520;
            }
            else if (loctid == 3) {
                tx = 250;
                ty = 0;
            }

            if (this._mCard3) {
                egret.Tween.get(this._mCard3).to({ x: tx, y: ty }, 500).call(function () {
                    this._gameScene.removeChildren();
                }, this);
            }

            if (this._mCard2) {
                egret.Tween.get(this._mCard2).to({ x: tx, y: ty }, 500).call(function () {
                    this._gameScene.removeChildren();
                }, this);
            }

            if (this._mCard1) {
                egret.Tween.get(this._mCard1).to({ x: tx, y: ty }, 500).call(function () {
                    this._gameScene.removeChildren();
                }, this);
            }

        }
}
