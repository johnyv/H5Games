class GameUtils{
    private static _instance:GameUtils;
    public constructor(){

    }

    //通过单例模式创建GameUtils
    public static get instance():GameUtils{
        return GameUtils._instance!=null?GameUtils._instance:(GameUtils._instance=new GameUtils(),GameUtils._instance);
    }

    /**
    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    */
    public createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 根据参数创建一个动画
    */
    public setAnimation(aniObj:any,propertyObj:Object,dur:number,finishFun:Function=null,thisObj:any=null,params=null){
        egret.Tween.get(aniObj).to(propertyObj,dur).call(finishFun,thisObj,params);
    }
}