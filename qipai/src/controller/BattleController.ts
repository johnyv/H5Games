/**
 *游戏中的控制中心，包括发牌，出牌，胜利，失败的逻辑处理 
*/
class BattleController extends Controller {
    public constructor(channel: CommandChannel) {
        super(channel);
        this.addCommand(ConstData.BATTLE_MATCH_PLAYERS, this.matchPlayers, this);
        this.addCommand(ConstData.BATTLE_SET_CARD, this.setCard, this);
        this.addCommand(ConstData.BATTLE_JIA_BEI, this.isJiabei, this);
        this.addCommand(ConstData.BATTLE_JIA_BEI_RESULT, this.jiabeiResult, this);
        this.addCommand(ConstData.BATTLE_GRAB_SUCCESS, this.grablandLordSuccess, this);
        this.addCommand(ConstData.BATTLE_CALL_LANDlORD, this.callLandLord, this);
        this.addCommand(ConstData.BATTLE_ROLE_GRAB, this.roleGrab, this);
        this.addCommand(ConstData.BATTLE_PLAY_GAME, this.onPlayGame, this);
        this.addCommand(ConstData.BATTLE_GAME_OVER, this.gameOver, this);
        this.addCommand(ConstData.BATTLE_ON_PLAY_CARD, this.onPlayCard, this);
        this.addCommand(ConstData.BATTLE_ON_PASS_CARD, this.onPassCard, this);
        this.addCommand(ConstData.BATTLE_CLEAR, this.clear, this);
        this.addCommand(ConstData.BATTLE_RECON_GAME, this.reconName, this);
        this.addCommand(ConstData.BATTLE_SCORE_CHANGE, this.onScoreChange, this);
        this.addCommand(ConstData.BATTLE_PLAY_ERROR, this.playError, this);
        this.addCommand(ConstData.BATTLE_CLOSE_MATCH_TIMER, this.closeMatchTimer, this);
        this.addCommand(ConstData.BATTLE_GET_CARDS, this.getCards, this);
        this.addCommand(ConstData.BATTLE_INVAILD, this.invaild, this);
        this.addCommand(ConstData.BATTLE_RETURN_GROUND, this.returnGround, this);
        this.addCommand(ConstData.BATTLE_JOIN_TABLE, this.joinTable, this);
        this.addCommand(ConstData.BATTLE_CHAT, this.onBattleChat, this);
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
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.reconGame(data);
    }

    /**
     *发牌命令+渲染座位号 
    */
    private setCard(data = null): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onMatchPlayerBack(data);
        battle.setCard(data);
    }

    /** 
     *开始匹配玩家
    */
    private matchPlayers(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.matchPlayers();
    }

    /**
     * 有玩家加入桌子
     */
    private joinTable(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.matchPlayers();
    }

    /**
     * 有玩家发送聊天信息
     */
    private onBattleChat(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onBattleChat(data);
    }

    /** 
     * 抢地主成功
    */
    private grablandLordSuccess(data = null): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.grabLandLordSuccess(data);
    }

    /** 
     * 玩家叫地主
    */
    private callLandLord(data: any): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.callLandLord(data);
    }

    /**
     * 广播一个玩家是否叫地主(3014)
    */
    private roleGrab(data: any): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.roleGrab(data);
    }
    
    /**
     * //广播询问是否加倍(3030)
    */
    private isJiabei(data: any): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.isJiabei(data);
    }

    /**
     * 广播一个角色是否加倍(3032)
    */
    private jiabeiResult(data: any): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.jiabeiResult(data);
    }

    /** 
     * 倍数发生变化
    */
    private onScoreChange(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onScoreChange(data);
    }

    /**出牌错误 */
    private playError(data): void {
        this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, [data.Msg, 500, -1, 536]);
    }

    /** 
     * 断掉匹配计时器
    */
    private closeMatchTimer(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.closeMatchTimer();
    }

    /** 
     * 获取当前牌局信息，一般是失去焦点然后重新获取焦点时候触发
    */
    private getCards(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.getCards();
    }

    /**
     * 对局无效，返回大厅
    */
    private invaild(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.invaild();
    }

    /** 
     * 返回大厅
    */
    private returnGround(): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.returnGround();
    }

    /** 
     * 游戏进行中
    */
    private onPlayGame(data = null): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onPlayGame(data);
    }

    /** 
     * 出牌成功
    */
    private onPlayCard(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onPlayCard(data);
    }

    /** 
     * 出牌成功
    */
    private onPassCard(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.onPassCard(data);
    }

    /** 
     * 出牌错误
    */
    private playCardError(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.playCardError(data);
    }

    /** 
     * 清理牌局
    */
    private clear(data): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.clear();
    }

    /** 
     * 游戏结束,进行核算
    */
    private gameOver(data = null): void {
        var battle: Battle = this.channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_VIEW_BY_NAME, ConstData.BATTLE_VIEW);
        battle.gameOver(data);
    }
}