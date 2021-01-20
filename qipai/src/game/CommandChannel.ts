class CommandChannel{
    private _controllerList:Object=new Object();
    private _dataProxyList:Object=new Object();

    private static _instance:CommandChannel;
    
    public constructor(){
        this.registerController(ConstData.GAME_CONTROLLER,new GameController(this));
        this.registerController(ConstData.UI_CONTROLLER,new UIController(this));
        this.registerController(ConstData.NET_CONTROLLER,new NetController(this));
        this.registerController(ConstData.BATTLE_CONTROLLER,new BattleController(this));
        this.registerController(ConstData.NIUNIU_BATTLE_CONTROLLER,new NiuniuBattleController(this));
        this.registerController(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER,new BairenNiuniuBattleController(this));
        this.registerController(ConstData.SOUND_CONTROLLER,new SoundController(this));
        this.registerDataProxy(ConstData.PLAYER_PROXY,new PlayerProxy(this));
        this.init();
    }

    public init():void{
        for(let controllerName in this._controllerList){
            this._controllerList[controllerName].init();
        }
        for(let dataProxyName in this._dataProxyList){
            this._dataProxyList[dataProxyName].init();
        }
    }

    //单例模式获取命令管线，全局唯一
    public static get instance():CommandChannel{
        return CommandChannel._instance!=null?CommandChannel._instance:(CommandChannel._instance=new CommandChannel(),CommandChannel._instance);
    }

    //注册控制器，通过commmandName和具体的控制器关联
    public registerController(controllerName:string,controller:Controller){
        if(!this._controllerList.hasOwnProperty(controllerName)){
            this._controllerList[controllerName]=controller;
        }
    }
    
    //根据commandName获取控制器
    public getController(controllerName:string):Controller{
        if(this._controllerList[controllerName]){
            return this._controllerList[controllerName];
        }
        return null;
    }

    //执行命令
    public postCommand(controllerName:string,commandName:string,params:any=null):any{
        var controller:Controller=this.getController(controllerName);
        return controller!=null?controller.executeCommand(commandName,params):null;
    }

    /** 
     * 注册数据处理中心
    */
    public registerDataProxy(dataProxyName:string,dataProxy:DataProxy):void{
        if(!this._dataProxyList.hasOwnProperty(dataProxyName)){
            this._dataProxyList[dataProxyName]=dataProxy;
        }
    }

    /** 
     * 注册具体数据到数据中心
    */
    public addFuncToDataProxy(dataProxyName:string,dataName:string,func:Function,thisObj:any):void{
        var dataProxy:DataProxy=this.getDataProxy(dataProxyName);
        dataProxy&&dataProxy.addDataFunc(dataName,func,thisObj);
    }

    //根据dataProxyName获取控制器
    public getDataProxy(dataProxyName:string):DataProxy{
        if(this._dataProxyList[dataProxyName]){
            return this._dataProxyList[dataProxyName];
        }
        return null;
    }

    /** 
     * 数据改变，广播消息
    */
    public broadCastData(dataProxyName:string,dataName:string,params:any=null):void{
        var dataProxy:DataProxy=this.getDataProxy(dataProxyName);
        return dataProxy!=null?dataProxy.executeCommand(dataName,params):null;
    }
}