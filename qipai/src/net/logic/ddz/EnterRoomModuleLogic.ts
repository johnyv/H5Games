class EnterRoomModuleLogic{
    private _channel:CommandChannel;
    public constructor(channel:CommandChannel){
        this._channel = channel;
    }

    public decode(data:com.protobuff.data.EnterRoomModule):void{
        for(let i = 0;i<data.roleList.length;i++){
            let roleRoomModule:com.protobuff.data.RoleRoomModule = data.roleList[i] as com.protobuff.data.RoleRoomModule;
            if(roleRoomModule.roleId == Player.instance.roleId){
                Player.instance.seatNo = roleRoomModule.index + 1;
            }
            Player.instance.addRole = roleRoomModule;
        }
    }
}