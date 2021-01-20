class Controller{
    protected channel:CommandChannel;
    protected commandList:Object=new Object();
    public constructor(channel:CommandChannel){
        this.channel=channel;
    }

    //添加命令
    public addCommand(commandName:string,func:Function,thisObj:any):void{
        if(!this.commandList.hasOwnProperty(commandName)){
            this.commandList[commandName]=[thisObj,func];
        }
    }

    //执行命令
    public executeCommand(commandName:string,params:any):any{
        return this.commandList[commandName]!=null?this.commandList[commandName][1].call(this.commandList[commandName][0],params):null;
    }
}