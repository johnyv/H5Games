class ConstData {
    //controller相关参数
    public static GAME_CONTROLLER: string = '1001';
    public static UI_CONTROLLER: string = '1002';
    public static NET_CONTROLLER: string = '1003';
    public static BATTLE_CONTROLLER: string = '1004';
    public static NIUNIU_BATTLE_CONTROLLER: string = '1005';
    public static BAI_NIUNIU_BATTLE_CONTROLLER: string = '1006';
    public static SOUND_CONTROLLER: string = '1007';

    //dataProxy相关参数
    public static PLAYER_PROXY: string = '1201';

    //dataPrxyName相关参数
    public static PLAYER_EKT = '1401';
    public static DIZHU_CARD_LIST = '1402';
    public static PLAYER_CARD_LIST = '1403';
    public static PLAYER_BALANCE = '1404';

    //GAME_CONTROLLER 命令相关参数
    public static GAME_INIT_GAME_LAYER: string = '2001';
    public static GAME_GET_LAYER: string = '2002';
    public static GAME_ENTER_GAME: string = '2003';
    public static GAME_CLEAR_ALL_LAYER: string = '2004';
    public static GAME_DESTROY: string = '2005';
    public static GAME_SET_PLAYER: string = '2006';

    //UIcontroller 命令相关参数
    public static UI_GET_VIEW_BY_NAME: string = '3001';
    public static UI_SHOW_VIEW_BY_NAME: string = '3002';
    public static UI_REMOVE_VIEW_BY_NAME: string = '3003';
    public static UI_REMOVE_ALL_VIEW: string = '3004';
    public static UI_DESTROY_VIEW_BY_NAME: string = '3005';
    public static UI_DESTROY_ALL_VIEW: string = '3006';
    public static UI_ADD_WAIT: string = '3007';
    public static UI_REMOVE_WAIT: string = '3008';
    public static UI_ADD_TIP: string = '3009';
    public static UI_REMOVE_TIP: string = '3010';
    public static UI_SHOW_OVER: string = '3011';
    public static UI_GET_CURRENT_VIEW: string = '3012';

    //NetController 命令相关参数
    public static NET_LOGIN: string = '4001';
    public static NET_CONNECT: string = '4002';
    public static NET_CLOSE: string = '4003';
    public static NET_READDATA: string = '4004';
    public static NET_ADDLISTENER: string = "4005";
    public static NET_SENDDATA: string = '4006';
    public static NET_SHOWSTATE: string = '4007';
    public static NET_CLEAR_HEART_BEAT: string = '4008';
    public static NET_DESTROY: string = '4009';
    public static NET_OVER_CLOSE: string = '4010';
    public static NET_REGISTER: string = '4011';

    //BattleController 命令相关参数
    public static BATTLE_MATCH_PLAYERS: string = '5002';
    public static BATTLE_SET_CARD: string = '5003';
    public static BATTLE_JIA_BEI: string = '5005';
    public static BATTLE_JIA_BEI_RESULT: string = '5006';
    public static BATTLE_GRAB_SUCCESS: string = '5007';
    public static BATTLE_PLAY_GAME: string = '5008';
    public static BATTLE_GAME_OVER: string = '5009';
    public static BATTLE_CALL_LANDlORD: string = '5010';
    public static BATTLE_ON_PLAY_CARD: string = '5011';
    public static BATTLE_ON_PASS_CARD: string = '5012';
    public static BATTLE_CARD_ERROR: string = '5013';
    public static BATTLE_CLEAR: string = '5014';
    public static BATTLE_RECON_GAME: string = '5015';
    public static BATTLE_SCORE_CHANGE: string = '5016';
    public static BATTLE_RETURN_GROUND: string = '5017';
    public static BATTLE_PLAY_ERROR: string = '5018';
    public static BATTLE_CLOSE_MATCH_TIMER: string = '5019';
    public static BATTLE_GET_CARDS: string = '5020';
    public static BATTLE_INVAILD: string = '5021';
    public static BATTLE_JOIN_TABLE: string = '5022';
    public static BATTLE_CHAT: string = '5023';
    public static BATTLE_ROLE_GRAB: string = "5024";

    //NiuniuBattleController 命令相关参数
    public static BATTLE_NIU_MATCH_PLAYERS: string = '5051';
    public static BATTLE_NIU_SET_CARD: string = '5052';
    public static BATTLE_NIU_GRAB_SUCCESS: string = '5056';
    public static BATTLE_NIU_JIESUAN: string = '5058';
    public static BATTLE_NIU_CALL_LANDlORD: string = '5059';
    public static BATTLE_NIU_CLEAR: string = '5060';
    public static BATTLE_NIU_RECON_GAME: string = '5061';
    public static BATTLE_NIU_SCORE_CHANGE: string = '5062';
    public static BATTLE_NIU_RETURN_GROUND: string = '5063';
    public static BATTLE_NIU_CLOSE_MATCH_TIMER: string = '5065';
    public static BATTLE_NIU_INVAILD: string = '5067';
    public static BATTLE_NIU_ROOM_ROLE_CHANGE: string = '5068';
    public static BATTLE_NIU_XIAZHU: string = "5070";
    public static BATTLE_NIU_QIANG_ZHUANG_BROAD: string = "5071";

    //BairenNiuniuBattleController 命令相关参数
    public static BATTLE_BAI_NIU_MATCH_PLAYERS: string = '5090';
    public static BATTLE_BAI_NIU_JIESUAN: string = '5091';
    public static BATTLE_BAI_NIU_CALL_LANDlORD: string = '5092';
    public static BATTLE_BAI_NIU_CLEAR: string = '5093';
    public static BATTLE_BAI_NIU_RECON_GAME: string = '5094';
    public static BATTLE_BAI_NIU_SCORE_CHANGE: string = '5095';
    public static BATTLE_BAI_NIU_RETURN_GROUND: string = '5096';
    public static BATTLE_BAI_NIU_CLOSE_MATCH_TIMER: string = '5097';
    public static BATTLE_BAI_NIU_INVAILD: string = '5098';
    public static BATTLE_BAI_NIU_ROOM_ROLE_CHANGE: string = '5099';
    public static BATTLE_BAI_NIU_BROAD_XIAZHU: string = "5100";
    public static BATTLE_BAI_NIU_XIAZHU: string = "5101";
    public static BATTLE_BAI_NIU_QIANG_ZHUANG_BROAD: string = "5102";
    public static BATTLE_BAI_NIU_GRAB_SUCCESS: string = "5103";

    //SoundController 命令相关参数
    public static SOUND_PLAY_MUSIC: string = '6001';
    public static SOUND_PLAY_SOUND: string = '6002';
    public static SOUND_PLAY_EFFECT: string = '6003';
    public static SOUND_PLAY_POKER: string = '6004';
    public static SOUND_STOP_SOUND: string = '6005';
    public static SOUND_STOP_ALL_SOUND: string = '6006';
    public static SOUND_PLAY_ONCE: string = '6007';
    public static SOUND_SET_IS_BACK: string = '6008';
    public static SOUND_IS_PLAY_SND: string = '6009';
    public static SOUND_IS_PLAY_MUSIC: string = '6010';
    public static SOUND_GET_PLAY_SND: string = '6011';
    public static SOUND_GET_PLAY_MUSIC: string = '6012';

    //ui界面相关参数
    public static LOGIN_VIEW: string = '8001';
    public static HALL_VIEW: string = '8002';
    public static GROUND_VIEW: string = '8003';
    public static PREGAME_VIEW: string = '8004';
    public static BATTLE_VIEW: string = '8005';
    public static WIN_VIEW: string = '8006';
    public static LOSE_VIEW: string = '8007';
    public static WAIT_VIEW: string = '8008';
    public static TIP_VIEW: string = '8009';
    public static RECHARGE_VIEW: string = '8010';
    public static CASH_VIEW: string = '8011';
    public static MATCH_END_VIEW: string = '8012';
    public static GAME_RULE_VIEW: string = '8013';
    public static NIUNIU_LOADING_VIEW: string = '8014';
    public static NIUNIU_GROUND_VIEW: string = '8015';
    public static NIUNIU_BATTLE_VIEW: string = '8016';
    public static BAIREN_NIUNIU_GROUND_VIEW: string = '8017';
    public static BAIREN_NIUNIU_BATTLE_VIEW: string = '8018';

    //layer常量
    public static UI_LAYER: string = '9001';
    public static ANIMATE_LAYER: string = '9002';
    public static EFFECT_LAYER: string = '9003';
    public static TOP_LAYER: string = '9004';
}
