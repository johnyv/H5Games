/**
 *游戏中的控制中心，包括发牌，出牌，胜利，失败的逻辑处理 
*/
class NiuniuBattleController extends Controller {
    public constructor(channel: CommandChannel) {
        super(channel);
        this.addCommand(ConstData.BATTLE_NIU_MATCH_PLAYERS, this.matchPlayers, this);
        this.addCommand(ConstData.BATTLE_NIU_SET_CARD, this.setCard, this);
        this.addCommand(ConstData.BATTLE_NIU_GRAB_SUCCESS, this.grablandLordSuccess, this);
        this.addCommand(ConstData.BATTLE_NIU_CALL_LANDlORD, this.jiaoZhuang, this);
        this.addCommand(ConstData.BATTLE_NIU_XIAZHU, this.xiaZhu,this);
        this.addCommand(ConstData.BATTLE_NIU_JIESUAN, this.jiesuan, this);
        this.addCommand(ConstData.BATTLE_NIU_CLEAR, this.clear, this);
        this.addCommand(ConstData.BATTLE_NIU_RECON_GAME, this.reconName, this);
        this.addCommand(ConstData.BATTLE_NIU_SCORE_CHANGE, this.onScoreChange, this);
        this.addCommand(ConstData.BATTLE_NIU_QIANG_ZHUANG_BROAD,this.onScoreChange,this);
        this.addCommand(ConstData.BATTLE_NIU_CLOSE_MATCH_TIMER, this.closeMatchTimer, this);
        this.addCommand(ConstData.BATTLE_NIU_INVAILD, this.invaild, this);
        this.addCommand(ConstData.BATTLE_NIU_RETURN_GROUND, this.returnGround, this);
        this.addCommand(ConstData.BATTLE_NIU_ROOM_ROLE_CHANGE, this.roomRoleChange, this);
    }

    public init(): void {

    }

    /** 
     * 断线重连逻辑
    */
    private reconName(data): void {
        /** 
         * {SeatNo:1,Cards:[],DizhuSeat:2,DizhuCards:[]}
        */
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.reconGame(data);
    }

    /**
     *发牌命令
    */
    private setCard(data = null): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.onMatchPlayerBack(data);
        battle.setCard(data);
    }

    /** 
     *开始匹配玩家
    */
    private matchPlayers(): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.matchPlayers();
    }

    /**
     * 有玩家加入桌子
     */
    private roomRoleChange(data:any): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.roomRoleChange(data);
    }


    /** 
     * 抢庄家成功
    */
    private grablandLordSuccess(data = null): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.grabLandLordSuccess(data);
    }

    /** 
     * 玩家抢庄
    */
    private jiaoZhuang(data: any): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.jiaoZhuang(data);
    }

    /**
     * 玩家下注
    */
    private xiaZhu(data: any):void{
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        setTimeout(battle.xiaZhu.bind(battle,data), 2800);      
    }

    /** 
     * 倍数发生变化
    */
    private onScoreChange(data): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.onScoreChange(data);
    }

    /** 
     * 断掉匹配计时器
    */
    private closeMatchTimer(): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.closeMatchTimer();
    }

    /**
     * 对局无效，返回大厅
    */
    private invaild(): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.invaild();
    }

    /** 
     * 返回大厅
    */
    private returnGround(): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.returnGround();
    }

    /** 
     * 清理牌局
    */
    private clear(data): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        battle.clear();
    }

    /** 
     * 游戏结束,进行核算
    */
    private jiesuan(data = null): void {
        var battle: NiuniuBattle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.NIUNIU_BATTLE_VIEW);
        setTimeout(battle.jiesuan.bind(battle,data), 1000); 
    }
}