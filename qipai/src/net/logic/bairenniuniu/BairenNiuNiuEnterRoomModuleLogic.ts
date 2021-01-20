class BairenNiuNiuEnterRoomModuleLogic {
    private _channel: CommandChannel;
    public constructor(channel: CommandChannel) {
        this._channel = channel;
    }

    public decode(data: com.protobuff.data.HdNiuNiuEnterRoomModule): void {
        for (let i = 0; i < data.roleList.length; i++) {
            let roleRoomModule: com.protobuff.data.HdNiuNiuRoleRoomModule = data.roleList[i] as com.protobuff.data.HdNiuNiuRoleRoomModule;
            Player.instance.addRole = roleRoomModule;
        }
        this._channel.postCommand(ConstData.BAI_NIUNIU_BATTLE_CONTROLLER, ConstData.BATTLE_BAI_NIU_ROOM_ROLE_CHANGE,data);
    }
}