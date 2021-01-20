class BaseView extends egret.Sprite{
    protected viewName:string;
    protected channel:CommandChannel;

    public constructor(channel:CommandChannel){
        super();
        this.channel=channel;
    }

    public init():void{

    }
    
    public destroy():void{
        this.parent&&this.parent.removeChild(this);
        this.viewName=null;
    }
}