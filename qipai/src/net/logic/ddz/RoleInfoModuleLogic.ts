class RoleInfoModuleLogic{
    private _channel:CommandChannel;
    public constructor(channel:CommandChannel){
        this._channel = channel;
    }

    public decode(data:com.protobuff.data.RoleInfoModule):void{
        this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_SET_PLAYER,data);
    }
}