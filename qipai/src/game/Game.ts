class Game extends egret.DisplayObjectContainer{
    public root:egret.Stage;
    private static _instance:Game;
    //整个游戏的命令管道，全局唯一
    private _channel:CommandChannel;

    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
    }
    // private sp:egret.Sprite;

    //游戏初始化
    private init():void{
        this.root=this.stage;
        this._channel=CommandChannel.instance;
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
        // ConfigData.stageWidth=this.stage.stageWidth;
        // ConfigData.stageHeight=this.stage.stageHeight;
        this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_INIT_GAME_LAYER);
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.GAME_VIEW,0,0,ConstData.UI_LAYER]);
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.SHOW_VIEW_BY_NAME,[ConstData.BATTLE_VIEW,0,0,ConstData.EFFECT_LAYER]);
        this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.LOGIN_VIEW,0,0,ConstData.UI_LAYER]);
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.HALL_VIEW,0,0,ConstData.UI_LAYER]);
        //  AnimateManager.instance.createAnimate('bow','bow',"explode_json","explode_png",577,317,this,0,15);
        // AnimateManager.instance.createAnimate('redAlert','redAlert','redAlert_json','redAlert_png',1050,273,this,-1,5);
        // this._channel.postCommand(ConstData.SOUND_CONTROLLER,ConstData.SOUND_PLAY_EFFECT,['bomb_effect_snd_mp3']);
        // AnimateManager.instance.createAnimate('bow','bow',"explode_json","explode_json",100,100,this);
        // AnimateManager.instance.createAnimate('bow','bow','explode_json','explode_json',1050,273,this,-1,45);
        // Player.instance.cardIndexList=[2,2,2,2,3,3,3,3];
        // var type=CardUtils.instance.calcCardType(Player.instance.cardList);
        // alert(type);
        // let shu=1234533;
        // let zhenshu:number=parseInt((shu).toString().split('.')[0]);
        // let showStr:any=shu;
        // if(zhenshu>10000){
        //     showStr=(zhenshu/10000).toFixed(2)+'万';
        // }
        // console.log(showStr);
        // new SendCardAnimal(this._channel);
        // this._channel.addFuncToDataProxy(ConstData.PLAER_PROXY,ConstData.DIZHU_CARD_LIST,this.test1,this);
        // this._channel.addFuncToDataProxy(ConstData.PLAER_PROXY,ConstData.DIZHU_CARD_LIST,this.test2,this);
        // this._channel.addFuncToDataProxy(ConstData.PLAER_PROXY,ConstData.DIZHU_CARD_LIST,this.test3,this);
        // this._channel.broadCastData(ConstData.PLAER_PROXY,ConstData.DIZHU_CARD_LIST);
        // this.sp=new egret.Sprite();
        // for(let i:number=0;i<10;i++){
        //     let card:Card=new Card(i+1);
        //     this.sp.addChild(card);
        //     card.x=100+i*50;
        // }
        // this.sp.touchEnabled=true;
        // // sp.touchChildren=true;
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBeginFunc,this);
        // this.sp.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchCardFunc,this);
        // this.sp.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMoveFunc,this);
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onEndFunc,this);
        // this.sp.x=100;
        // this.sp.y=100;
        // this.addChild(this.sp);
        // let cards=[new Card(26),new Card(13),new Card(5),new Card(54),new Card(12),new Card(25),new Card(38),new Card(3),new Card(8),new Card(8)];
        // let getArr:Array<Card>=CardUtils.instance.getBiggerThanCard(new CurCards(4,7,[7,7,7,4]),cards);
        // getArr.sort(function(a,b){return b.point-a.point});
        // for(let i:number=0;i<getArr.length;i++){
        //     console.log(getArr[i].point);
        // }
        // if(CardUtils.instance.biggerThan(5,4,5,null,[2,14,13,13,12,11,11,10,10,10,8,7,7,6,6,5,3]))
        //     console.log('能管上');
        // else{
        //     console.log('管不上');
        // }
        // this._channel.addFuncToDataProxy(ConstData.PLAYER_PROXY,ConstData.PLAYER_BALANCE,this.setBalance,this);
        // this._channel.addFuncToDataProxy(ConstData.PLAYER_PROXY,ConstData.PLAYER_EKT,this.setEktTxt,this);
        // this._channel.broadCastData(ConstData.PLAYER_PROXY,ConstData.PLAYER_BALANCE,10);
    }
  
    // private setBalance():void{
    //     console.log('获取余额')
    // }
    // private setEktTxt():void{
    //     console.log('获取ekt钱包')
    // }
    //每帧都要执行的刷新
    public update():void{

    }

    //单例模式创建游戏主类
    public static get instance():Game{
        return Game._instance!=null?Game._instance:(Game._instance=new Game(),Game._instance);
    }
}