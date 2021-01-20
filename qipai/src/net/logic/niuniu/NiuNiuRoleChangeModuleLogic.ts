class NiuNiuRoleChangeModuleLogic {
    private _channel: CommandChannel;
    public constructor(channel: CommandChannel) {
        this._channel = channel;
    }

    public decode(data: com.protobuff.data.NiuNiuRoleChangeModule): void {
        let roleRoomModule: com.protobuff.data.NiuNiuRoleRoomModule = data.role as com.protobuff.data.NiuNiuRoleRoomModule;
        if (roleRoomModule.roleId == Player.instance.roleId) {
        }
        if(data.type == 0){
            //离开
        }else{
            Player.instance.addRole = data.role;
            this._channel.postCommand(ConstData.NIUNIU_BATTLE_CONTROLLER,ConstData.BATTLE_NIU_ROOM_ROLE_CHANGE);
        }
    }
}