class DataProxy{
    protected funcListObj:Object=new Object();
    protected channel:CommandChannel;
    public constructor(channel:CommandChannel){
        this.channel=channel;
    }

    /** 
     * 注册数据改变处理
    */
    public addDataFunc(dataName:string,func:Function,thisObj:any):void{
        if(!this.funcListObj.hasOwnProperty(dataName)){
            this.funcListObj[dataName]=[];
        }
        this.funcListObj[dataName].push(new Array(func,thisObj));
    }

    /** 
     * 广播并执行命令
    */
    public executeCommand(commandName:string,params:any):void{
        let funcArr=this.funcListObj[commandName];
        for(let funcName in funcArr){
            let funcListArr:Array<any>=funcArr[funcName];
            for(let i:number=0;i<funcListArr.length;i++){
                let func:Function=funcListArr[0];
                let thisObj:any=funcListArr[1];
                func&&func.call(thisObj,params);
            }
        }
    }
}