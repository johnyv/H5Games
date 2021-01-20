class RoleChangeModuleLogic {
    private _channel: CommandChannel;
    public constructor(channel: CommandChannel) {
        this._channel = channel;
    }

    public decode(data: com.protobuff.data.RoleChangeModule): void {
        let roleRoomModule: com.protobuff.data.RoleRoomModule = data.role as com.protobuff.data.RoleRoomModule;
        if (roleRoomModule.roleId == Player.instance.roleId) {
            Player.instance.seatNo = roleRoomModule.index + 1;
        }
        if(data.type == 0){
            //离开
        }else{
            Player.instance.addRole = data.role;
        }
    }
}