//保存全局配置数据
class ConfigData{
    public static stageHeight:number;
    public static stageWidth:number;
    public static CARDWIDTH:number = 139;
    public static CARDHEIGHT:number = 189;
    public static LEFTGAP:number = 270;       //距离左侧距离
    public static DOWNGAP:number = 98;       //距离下方距离
    public static VERCARGAP:number = 35;     //纵向卡牌间隔
    public static HORCARGAP:number = 60;     //横向卡牌间隔(最大)
    public static SHOWCARDWIDTH:number=90; //展示牌的大小
    public static RECONECTTIME:number=10;//尝试重连次数

    public static SOUND:number=0;//音效
    public static MUSIC:number=1;//音乐
    public static EFFECT:number=2;//特效音效
    public static POKER:number=3;//扑克人声
    public static ELSE:number=3;//其他音效
    public static DEBUG:boolean=false;//是否调试版本呢
}