class StartModuleLogic{
    private _channel:CommandChannel;
    public constructor(channel:CommandChannel){
        this._channel = channel;
    }

    public decode(data:com.protobuff.data.StartModule):void{
    }
}