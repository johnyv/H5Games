class SoundController extends Controller{
    //背景音乐声道
    private _music_snd_channel:egret.SoundChannel;
    //音效声道
    private _snd_channel:egret.SoundChannel;
    //特效音效
    private _effect_snd_channel:egret.SoundChannel;
    //扑克牌人声
    private _poker_snd_channel:egret.SoundChannel;
    //其他音效的声道
    private _else_snd_channel:Array<egret.SoundChannel>=[];
    //是否进入后台
    private _isBack:boolean=false;
    //是否播放音效
    private _noPlaySnd:boolean=false;
    //是否播放音乐
    private _noPlayMusic:boolean=false;
    private _lastName:string;

    public constructor(channel:CommandChannel){
        super(channel);
        this.addCommand(ConstData.SOUND_PLAY_MUSIC,this.playMusic,this);
        this.addCommand(ConstData.SOUND_PLAY_SOUND,this.playSound,this);
        this.addCommand(ConstData.SOUND_PLAY_EFFECT,this.playEffectSound,this);
        this.addCommand(ConstData.SOUND_PLAY_POKER,this.playPokerSound,this);
        this.addCommand(ConstData.SOUND_STOP_SOUND,this.stopSound,this);
        this.addCommand(ConstData.SOUND_STOP_ALL_SOUND,this.stopAllSound,this);
        this.addCommand(ConstData.SOUND_PLAY_ONCE,this.playOnce,this);
        this.addCommand(ConstData.SOUND_SET_IS_BACK,this.setIsBack,this);
        this.addCommand(ConstData.SOUND_IS_PLAY_SND,this.setIsPlaySnd,this);
        this.addCommand(ConstData.SOUND_IS_PLAY_MUSIC,this.setIsPlayMusic,this);
        this.addCommand(ConstData.SOUND_GET_PLAY_SND,this.getIsPlaySnd,this);
        this.addCommand(ConstData.SOUND_GET_PLAY_MUSIC,this.getIsPlayMusic,this);
    }

    public init(){

    }

    private setIsPlaySnd(value:boolean){
        this._noPlaySnd=value;
    }

    private getIsPlaySnd():boolean{
        return this._noPlaySnd;
    }

    private setIsPlayMusic(value:boolean){
        this._noPlayMusic=value;
        !this._noPlayMusic?this.playMusic([this._lastName]):this.stopSound(1);
        console.log(this._noPlayMusic);
    }

    private getIsPlayMusic():boolean{
        return this._noPlayMusic;
    }

    /** 
     * 设置是否进入后台
    */
    private setIsBack(isBack:boolean):void{
        this._isBack=isBack;
    }

    /** 
     * 播放一次音效，不分配声道，比较少用
    */
    private playOnce(params:Array<any>):void{
        if(this._isBack||this._noPlaySnd) return;
        let sndName:string=params[0];
        let loopTimes:number=(!params[1]?1:params[1]);
        var snd:egret.Sound=RES.getRes(sndName);
        snd&&(this._else_snd_channel.push(snd.play(0,loopTimes)));
    }
    
    /** 
     * 根据音乐名称播放音乐
    */
    private playMusic(params:Array<any>):void{
        let sndName:string=params[0];
        this._lastName=params[0];
        if(this._isBack||this._noPlayMusic) return;
        let loopTimes:number=(!params[1]?0:params[1]);
        var snd:egret.Sound=RES.getRes(sndName);
        this.stopSound(1);
        snd&&(this._music_snd_channel=snd.play(0,loopTimes));
    }

    /** 
     * 根据名称播放音效
    */
    private playSound(params:Array<any>):void{
        if(this._isBack||this._noPlaySnd) return;
        let sndName:string=params[0];
        let loopTimes:number=(!params[1]?1:params[1]);
        var snd:egret.Sound=RES.getRes(sndName);
        this.stopSound(0);
        snd&&(this._snd_channel=snd.play(0,loopTimes));
    }

    /** 
     * 根据名称播放扑克牌音效
    */
    private playPokerSound(params:Array<any>):void{
        if(this._isBack||this._noPlaySnd) return;
        let sndName:string=params[0];
        let loopTimes:number=(!params[1]?1:params[1]);
        var snd:egret.Sound=RES.getRes(sndName);
        this.stopSound(3);
        snd&&(this._poker_snd_channel=snd.play(0,loopTimes));
    }

    /** 
     * 根据名称播放特效音效
    */
    private playEffectSound(params:Array<any>):void{
        if(this._isBack||this._noPlaySnd) return;
        let sndName:string=params[0];
        let loopTimes:number=(!params[1]?1:params[1]);
        var snd:egret.Sound=RES.getRes(sndName);
        this.stopSound(2);
        snd&&(this._effect_snd_channel=snd.play(0,loopTimes));
    }

    /** 
     * 停止音效或者音乐 0音效 1音乐 2特效音效
    */
    private stopSound(type:number=0):void{
        if(type==0){
            this._snd_channel&&this._snd_channel.stop();
        }else if(type==1){
            this._music_snd_channel&&this._music_snd_channel.stop();
        }else if(type==2){
            this._effect_snd_channel&&this._effect_snd_channel.stop();
        }else if(type==3){
            this._poker_snd_channel&&this._poker_snd_channel.stop();
        }else if(type==4){
            //其他声道
            for(let i:number=0;i<this._else_snd_channel.length;i++){
                 this._else_snd_channel[i]&&this._else_snd_channel[i].stop();
            }
        }
    }

    /** 
     * 停止所有音效,音乐
    */
    private stopAllSound(params:any=null):void{
        this._snd_channel&&this._snd_channel.stop();
        this._music_snd_channel&&this._music_snd_channel.stop();
        this._effect_snd_channel&&this._effect_snd_channel.stop();
        this._poker_snd_channel&&this._poker_snd_channel.stop();
    }
}