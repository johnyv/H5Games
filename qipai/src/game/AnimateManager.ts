class AnimateManager {
    private static _instance: AnimateManager;
    private mcHash: Object = new Object();
    private funcHash: Object = new Object();


    public static get instance(): AnimateManager {
        AnimateManager._instance == null && (AnimateManager._instance = new AnimateManager());
        return AnimateManager._instance;
    }

    public hasAnimate(animateName): boolean {
        return this.mcHash.hasOwnProperty(animateName);
    }

    public createDragonBones(uiLayer: egret.DisplayObjectContainer,skeJson:string,texJson:string,texPng:string,finishFunc:Function = ()=>{}): dragonBones.Armature {
        // let container = new egret.DisplayObjectContainer();

        // uiLayer.addChild(container);
        // container.x = ConfigData.stageWidth / 2;
        // container.y = ConfigData.stageHeight / 2;

        //读取一个骨骼数据,并创建实例显示到舞台
        var skeletonData = RES.getRes(skeJson);
        var textureData = RES.getRes(texJson);
        var texture = RES.getRes(texPng);

        var factory = new dragonBones.EgretFactory();
        let dragonBonesData:dragonBones.DragonBonesData = dragonBones.DataParser.parseDragonBonesData(skeletonData);
        factory.addDragonBonesData(dragonBonesData);
        factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture));

        let armature: dragonBones.Armature;
        armature = factory.buildArmature(dragonBonesData.armatureNames[0]);
        let armatureDisplay = armature.display;
        dragonBones.WorldClock.clock.add(armature);
        uiLayer.addChild(armatureDisplay);

        //启动骨骼动画播放
        armature.animation.gotoAndPlay(dragonBonesData.stage.defaultAnimation.name);
        egret.startTick(this.onTicker, this);
        // armature.addEventListener(dragonBones.AnimationEvent.START, this.startPlay, this);
        armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, finishFunc, this);
        // armature.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.frame_event, this);
        return armature;
    }

	private _time:number;
    private onTicker(timeStamp:number) {

        if(!this._time) {
            this._time = timeStamp;
        }

        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;

        dragonBones.WorldClock.clock.advanceTime(pass / 1000);

        return false;
    }

    private startPlay(evt: dragonBones.ArmatureEvent) {
        console.log("armature 开始播放动画！");
    }
    private loop_com(evt: dragonBones.ArmatureEvent) {
        console.log("armature 动画播放完一轮完成！");
    }
    private frame_event(evt: dragonBones.FrameEvent) {
        console.log("armature 播放到了一个关键帧！ 帧标签为：", evt.frameLabel);
    }
    // egret.startTick(this.onTicker, this);

    // this.myTimer = new egret.Timer(10);
    // this.myTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);

    public createAnimate(jsonName: string, labelName: any, parentMc, playTimes: number = 0, frameRate: number = 24, finishFunc = null, thisObj = null): egret.MovieClip {
    // let mc:egret.MovieClip=this.mcHash[labelName];
    // if(!mc){
    //     let mcFactory:egret.MovieClipDataFactory=new egret.MovieClipDataFactory( RES.getRes(jsonName + "_json"), RES.getRes(jsonName + "_png"));
    //     mc= new egret.MovieClip(mcFactory.generateMovieClipData(labelName)); 
    //     if(mc.totalFrames == 0) return new egret.MovieClip();
    //     if(!mc.hasEventListener(egret.MovieClipEvent.COMPLETE))
    //         mc.addEventListener(egret.MovieClipEvent.COMPLETE,this.finishPlay,this);
    //     mc.frameRate=frameRate;
    //     this.mcHash[labelName]=mc;
    //     mc.name=labelName;
    //     finishFunc&&(this.funcHash[labelName]=[finishFunc,thisObj]);
    // }
    let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes(jsonName + "_json"), RES.getRes(jsonName + "_png"));
    let mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData(labelName));
    if (mc.totalFrames == 0) return new egret.MovieClip();
    mc.frameRate = frameRate;
    // this.mcHash[labelName] = mc;
    mc.name = labelName;
    if (finishFunc) {
        this.funcHash[labelName] = [finishFunc, thisObj]
        mc.addEventListener(egret.MovieClipEvent.COMPLETE, this.finishPlay, this);
    }
    mc.gotoAndStop(1);
    parentMc.addChild(mc);
    mc.play(playTimes);
    return mc;
}

    private finishPlay(evt: egret.MovieClipEvent): void {
    let mc: egret.MovieClip = evt.target;
    this.funcHash[mc.name] && this.funcHash[mc.name][0].call(this.funcHash[mc.name][1], mc);
    delete this.funcHash[mc.name];
    mc.removeEventListener(egret.MovieClipEvent.COMPLETE, this.finishPlay, this);
}

    public removeAnimate(): void {
    for(let animateName in this.mcHash) {
        let mc: egret.MovieClip = this.mcHash[animateName];
        mc && mc.gotoAndStop(1);
        mc && mc.parent && mc.parent.removeChild(mc);
        delete this.mcHash[animateName];
    }
}

    public destroy(): void {
    let animateName;
    for(animateName in this.mcHash) {
        let mc: egret.MovieClip = this.mcHash[animateName];
        if (mc) {
            if (mc.hasEventListener(egret.MovieClipEvent.COMPLETE))
                mc.removeEventListener(egret.MovieClipEvent.COMPLETE, this.finishPlay, this);
            mc.stop();
        }
        delete this.mcHash[animateName];
    }
        this.mcHash = null;
    for(animateName in this.funcHash) {
        delete this.funcHash[animateName];
    }
        this.funcHash = null;
    AnimateManager._instance = null;
}
}