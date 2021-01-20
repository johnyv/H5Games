class GameController extends Controller{
    private _gameLayer:GameLayer;
    public constructor(channel:CommandChannel){
        super(channel);
        this.addCommand(ConstData.GAME_INIT_GAME_LAYER,this.initGameLayer,this);
        this.addCommand(ConstData.GAME_GET_LAYER,this.getLayer,this);
        this.addCommand(ConstData.GAME_ENTER_GAME,this.enterGame,this);
        this.addCommand(ConstData.GAME_CLEAR_ALL_LAYER,this.clearAllLayer,this);
        this.addCommand(ConstData.GAME_SET_PLAYER, this.setPlayerData, this);
        this.addCommand(ConstData.GAME_DESTROY,this.destroy,this);

    }

    private init():void{
    }

    private initGameLayer():void{
        this._gameLayer=new GameLayer();
        this._gameLayer.init();
        Game.instance.addChild(this._gameLayer);
    }

    private getLayer(layerId:string=''):egret.DisplayObjectContainer{
        switch(layerId){
            case ConstData.UI_LAYER:
                return this._gameLayer.UILayer;
            case ConstData.ANIMATE_LAYER:
                return this._gameLayer.animateLayer;
            case ConstData.EFFECT_LAYER:
                return this._gameLayer.effectLayer;
            case ConstData.TOP_LAYER:
                return this._gameLayer.topLayer;
            default:
                return this._gameLayer;
            
        }
    }

    /** 
     * 填充player玩家数据
    */
    private setPlayerData(params): void {
        var player: Player = Player.instance;
        for (var propertyName in params) {
            player[propertyName] = params[propertyName];
        }
    }

    private clearAllLayer():void{
        this._gameLayer.clearAllLayer();
    }

    private enterGame():void{
        this.channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_SHOW_VIEW_BY_NAME,[ConstData.BATTLE_VIEW,0,0,ConstData.UI_LAYER]);
        this.channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_REMOVE_VIEW_BY_NAME,[ConstData.GROUND_VIEW]);
        this.channel.postCommand(ConstData.BATTLE_CONTROLLER,ConstData.BATTLE_MATCH_PLAYERS);
    }

    /** 
     * 销毁游戏资源，释放内存
    */
    private destroy():void{
        this.channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_DESTROY_ALL_VIEW);
        Player.instance.destroy();
        CardUtils.instance.destroy();
        this.channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_DESTROY);
    }
}