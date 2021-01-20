/**基本操作代码*/
class NetCommands {
    public static MSG_TYPE_OF_READY = 0;
    public static MSG_TYPE_OF_UN_READY = 1;
    public static MSG_TYPE_OF_JOIN_TABLE = 2;
    public static MSG_TYPE_OF_LEAVE_TABLE = 3;
    public static MSG_TYPE_OF_LOGIN = "1001";//角色登录成功后，返回的角色基本信息
    public static MSG_TYPE_OF_ROLE_INFO = "1004";//角色登录成功后，返回的角色基本信息
    public static MSG_TYPE_OF_QUIT = "2003";//退出

    public static MSG_TYPE_OF_MATCH = "3001";//请求匹配
    // const MSG_TYPE_OF_HINT       =  4;     //提示
    public static MSG_TYPE_OF_PASS = 6;  //过牌
    // const MSG_TYPE_OF_AUTO		= 7;  //托管
    public static MSG_TYPE_OF_SEND_CARD = "3010";  //发牌
    public static MSG_TYPE_OF_ENTER_ROOM = "3006"; //匹配进入房间
    public static MSG_TYPE_OF_ROLE_CHANGE = "3008"; //有人状态发生变化(3008)(进入或者离开或者准备)
    public static MSG_TYPE_OF_CALL_SCORE = "3012";//广播询问一个玩家是否叫地主(需要对比是否是自己)(3012)
    public static MSG_TYPE_OF_DO_GRAB = "3013";//玩家选择是否叫/抢地主
    public static MSG_TYPE_OF_ROLE_GRAB = "3014";//广播一个玩家是否叫地主(3014)
    public static MSG_TYPE_OF_SEND_BOTTOM_CARDS = "3016"//广播地主和底牌(3016)
    public static MSG_TYPE_OF_SCORE_CHANGE = "3018"//当前房间倍数(3018)
    public static MSG_TYPE_OF_TIME_TICKER = "3020"//广播询问一个玩家出牌(3020)
    public static MSG_TYPE_OF_PLAY_CARD = "3021";//出牌
    public static MSG_TYPE_OF_PLAY_CARD_SUCCESS = "3024";//广播一个玩家出的牌(3024)
    public static MSG_TYPE_OF_JIA_BEI = "3030";//广播询问是否加倍(3030)
    public static MSG_TYPE_OF_CALL_JIA_BEI = "3031";//角色选择是否加倍(3031)
    public static MSG_TYPE_OF_JIA_BEI_RESULT = "3032";//广播一个角色是否加倍(3032)
    // const MSG_TYPE_OF_CONFIRM   = 10;   //客户端出牌等操作确认信息
    // const MSG_TYPE_OF_CALL_SCORE_TIME_OUT = 11; //叫地主超时
    public static MSG_TYPE_OF_PLAY_ERROR = 12; //出牌错误
    public static TYPE_OF_TABLE_BRODCAST = 14;
    // public static MSG_TYPE_OF_SCORE_CHANGE = 15; //牌局分数变化   15
    // const MSG_TYPE_OF_SETTLE_SCORE = 16    //结算玩家分数
    public static MSG_TYPE_OF_GAME_OVER = "3028"; //结算玩家分数
    public static MSG_TYPE_OF_GAME_PREPARE = "3029"; //准备(3029)
    // const MSG_TYPE_OF_LOGIN = 18           //玩家登陆成功
    public static MSG_TYPE_WS_CLOSE = 21;//断开socket连接
    // public static MSG_TYPE_OF_TIMESCORE_TICKER = 23; //抢地主计时器
    public static MSG_TYPE_OF_PASS_CARD_SUCCESS = 24; //过牌成功    24
    public static MSG_TYPE_OF_RECON_GAME = 25; //断线重连 25
    public static MSG_TYPE_OF_PVP_SUCCESS = 26; //匹配成功 26
    public static MSG_TYPE_OF_HEART_BEAT = 27; //心跳包
    public static MSG_TYPE_OF_GET_CARDS = 28; //获取当前牌局信息
    public static MSG_TYPE_OF_INVAILD = 29; //获取当前牌局信息
    public static MSG_TYPE_OF_OVER = 30; //结算断线
    public static MSG_TYPE_OF_CHAT = 31; //聊天     31


    /**牛牛协议相关 */
    public static NIUNIU_MATCH = "4001";//请求匹配
    public static NIUNIU_MATCH_RESULT = "4002";//匹配结果
    public static NIUNIU_EXIT = "4003";//退出
    public static NIUNIU_EXIT_SUCCESS = "4004"//成功退出
    public static NIUNIU_ENTER_ROOM = "4006";//匹配进入房间
    public static NIUNIU_ROLE_CHANGE = "4008";//有人状态发生变化
    public static NIUNIU_SEND_CARD = "4010";//开始发牌
    public static NIUNIU_CALL_SCORE = "4012";//广播询问叫庄
    public static NIUNIU_DO_GRAB = "4013";//玩家选择叫/抢庄
    public static NIUNIU_QIANG_ZHUANG_BROAD = "4014";//广播一个玩家叫庄
    public static NIUNIU_ROLE_GRAB_ID = "4016";//广播庄家
    public static NIUNIU_ROLE_XIAZHU_BROAD = "4018";//广播询问下注
    public static NIUNIU_ROLE_XIAZHU = "4019";//角色选择下注
    public static NIUNIU_ROLE_XIAZHU_RESULT = "4020";//广播一个玩家下注
    public static NIUNIU_ROOM_SCORE = "4022";//当前房间玩家倍数
    public static NIUNIU_JIESUAN = "4024";//广播结算
    public static NIUNIU_PREPARE = "4025";//下一局是否继续开始

    
    /**百人牛牛协议相关 */
    public static BAI_NIUNIU_MATCH = "5001";//请求匹配
    public static BAI_NIUNIU_MATCH_RESULT = "5002";//匹配结果
    public static BAI_NIUNIU_EXIT = "5003";//退出
    public static BAI_NIUNIU_EXIT_SUCCESS = "5004"//成功退出
    public static BAI_NIUNIU_ENTER_ROOM = "5006";//匹配进入房间
    public static BAI_NIUNIU_ROLE_CHANGE = "5008";//有人状态发生变化
    public static BAI_NIUNIU_ROLE_GRAB_ID = "5010";//广播当前庄家
    public static BAI_NIUNIU_REQUEST_GRAB = "5011";//申请上庄
    public static BAI_NIUNIU_GRAB_LIST = "5012";//广播当前备选庄家列表
    public static BAI_NIUNIU_ROLE_XIAZHU_BROAD = "5014";//广播询问下注
    public static BAI_NIUNIU_ROLE_XIAZHU = "5015";//角色选择下注
    public static BAI_NIUNIU_ROLE_XIAZHU_RESULT = "5016";//广播一个角色下注
    public static BAI_NIUNIU_ROOM_SCORE = "5018";//当前房间玩家倍数
    public static BAI_NIUNIU_JIESUAN = "5020";//广播结算
    public static BAI_NIUNIU_PREPARE = "5021";//下一局是否继续开始
}