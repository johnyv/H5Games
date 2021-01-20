class UIController extends Controller{
    //view创建列表
    private _viewList:Object=new Object();
    //view映射列表
    private _viewHash:Object=new Object();
    //舞台根
    private _root:egret.Stage;
    //当前界面名字
    private _currentViewName;

    public constructor(channel:CommandChannel){
        super(channel);
        this.addCommand(ConstData.UI_GET_VIEW_BY_NAME,this.getViewByName,this);
        this.addCommand(ConstData.UI_SHOW_VIEW_BY_NAME,this.showViewByName,this);
        this.addCommand(ConstData.UI_REMOVE_VIEW_BY_NAME,this.removeViewByName,this);
        this.addCommand(ConstData.UI_REMOVE_ALL_VIEW,this.removeAllView,this);
        this.addCommand(ConstData.UI_DESTROY_VIEW_BY_NAME,this.destroyViewByName,this);
        this.addCommand(ConstData.UI_DESTROY_ALL_VIEW,this.destroyAllView,this);
        this.addCommand(ConstData.UI_ADD_WAIT,this.addWaitView,this);
        this.addCommand(ConstData.UI_REMOVE_WAIT,this.removeWaitView,this);
        this.addCommand(ConstData.UI_ADD_TIP,this.addTip,this);
        this.addCommand(ConstData.UI_REMOVE_TIP,this.removeTip,this);
        this.addCommand(ConstData.UI_SHOW_OVER,this.showOver,this);
        this.addCommand(ConstData.UI_GET_CURRENT_VIEW,this.getCurrentViewName,this);
    }

    private init():void{
        this._viewHash[ConstData.LOGIN_VIEW] = Login;
        this._viewHash[ConstData.HALL_VIEW] = Hall;
        this._viewHash[ConstData.GROUND_VIEW]=Ground;
        this._viewHash[ConstData.PREGAME_VIEW]=Pregame;
        this._viewHash[ConstData.BATTLE_VIEW]=Battle;
        this._viewHash[ConstData.WIN_VIEW]=Win;
        this._viewHash[ConstData.LOSE_VIEW]=Lose;
        this._viewHash[ConstData.WAIT_VIEW]=WaitView;
        this._viewHash[ConstData.TIP_VIEW]=TipView;
        this._viewHash[ConstData.RECHARGE_VIEW]=Recharge;
        this._viewHash[ConstData.CASH_VIEW]=Cash;
        this._viewHash[ConstData.MATCH_END_VIEW]=MatchEnd;
        this._viewHash[ConstData.GAME_RULE_VIEW]=GameRule;
        this._viewHash[ConstData.NIUNIU_LOADING_VIEW]=NiuniuLoadingView;
        this._viewHash[ConstData.NIUNIU_GROUND_VIEW]=NiuniuGround;
        this._viewHash[ConstData.NIUNIU_BATTLE_VIEW]=NiuniuBattle;
        this._viewHash[ConstData.BAIREN_NIUNIU_GROUND_VIEW]=BairenNiuniuGround;
        this._viewHash[ConstData.BAIREN_NIUNIU_BATTLE_VIEW]=BairenNiuniuBattle;

        this._root=Game.instance.root;
    }

    //根据viewName返回界面
    private getViewByName(viewName:string):any{
        if(!this._viewList[viewName]){
            this._viewList[viewName]=new this._viewHash[viewName](this.channel);
        }
        return this._viewList[viewName];
    }

    //根据viewName显示界面
    private showViewByName(params:Array<any>):any{
        let viewName=params[0];
        let view=this.getViewByName(viewName);
        if(params[1]==undefined){
            //默认舞台居中
            view.x=(this._root.stageWidth-view.width)/2;
            view.y=(this._root.stageHeight-view.height)/2;
        }
        else{
            //根据参数设置界面位置
            let posX=params[1];
            let posY=params[2];
            //默认舞台居中
            view.x=posX;
            view.y=posY;
        }
        if(view instanceof Ground){
            this._currentViewName=ConstData.GROUND_VIEW;
        }else if(view instanceof Battle){
            this._currentViewName=ConstData.BATTLE_VIEW;
        }else if(view instanceof Win){
            this._currentViewName=ConstData.WIN_VIEW;
        }else if(view instanceof Lose){
            this._currentViewName=ConstData.LOSE_VIEW;
        }
        var parentView:egret.DisplayObjectContainer=this.channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_GET_LAYER,params[3]);
        parentView.addChild(view);
        view.init&&view.init();
        return view;
    }

    /** 
     * 获取当前所在的界面，用于返回按钮处理
    */
    private getCurrentViewName():string{
        return this._currentViewName;
    }

    //根据viewName移除界面,destroy:是否销毁界面
    private removeViewByName(params:Array<any>):any{
        let viewName:string=params[0];
        let isDestroy:boolean=params[1];
        var view=this.getViewByName(viewName);
        if(view.parent){
            view.parent.removeChild(view);
            view.removeView&&view.removeView();
            if(isDestroy){
                view.destroy();
            }
        }
        return view;
    }

    //移除所有界面
    private removeAllView(isDestroy:boolean):void{
        for(let viewName in this._viewList){
            this.removeViewByName([viewName,isDestroy]);
        }
    }

    //根据viewName销毁界面
    private destroyViewByName(viewName:string):void{
        var view=this.getViewByName(viewName);
        if(view){
            if(view.parent){
                view.parent.removeChild(view);
            }
            view.destroy&&view.destroy();
            delete this._viewList[viewName];
        }
    }

    //销毁所有界面
    private destroyAllView():void{
        for(let viewName in this._viewList){
            this.destroyViewByName(viewName);
        }
    }

    private _isBin:boolean=false;
    /** 
     * 添加等待界面
    */
    private addWaitView(tip:string):void{
        if(this._isBin)
            return;
        // this._root&&(this._root.touchChildren=false);
        var waitView:WaitView=this.showViewByName([ConstData.WAIT_VIEW,0,0,ConstData.UI_LAYER]);
        waitView.addWait(tip);
    }

    /** 
     * 移除等待界面
    */
    private removeWaitView(tip:string):void{
        if(this._isBin)
            return;
        this._root&&(this._root.touchChildren=true);
        var waitView:WaitView=this.removeViewByName([ConstData.WAIT_VIEW]);
        waitView.removeWait();
    }

    /** 添加提示界面*/
    private addTip(params:Array<any>=['',500,-1,-1]):void{
        var tipView:TipView=this.showViewByName([ConstData.TIP_VIEW,0,0,ConstData.TOP_LAYER]);
        tipView.addTip(params);
    }

    /** 移除提示界面*/
    private removeTip():void{
        var tipView:TipView=this.getViewByName(ConstData.TIP_VIEW);
        tipView.removeTip();
    }

    /** 
     * 显示核算界面
    */
    private showOver(overData):void{
        let overView;
        if(overData.overType=='win'){
            overView=this.showViewByName([ConstData.WIN_VIEW,0,0,ConstData.TOP_LAYER]);
        }else if(overData.overType=='lose'){
            overView=this.showViewByName([ConstData.LOSE_VIEW,0,0,ConstData.TOP_LAYER]);
        }
        overView&&overView.show(overData);
    }
}