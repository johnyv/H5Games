class Main extends eui.UILayer {


    protected createChildren(): void {
        document.bgColor='#0d1b51';
        super.createChildren();
        // (new egret.Sprite).graphics.draw
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        // this.createGameScene();
    }

    private async loadResource() {
        try {
            // DisUtil.size(this,1080,1920);
            this.stage.setContentSize(1920, 1080);
            // DisUtil.get(this).beCon();
            // DisUtil.get(this).cenVer();
            // DisUtil.get(this).cenHor();
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loading");
            ConfigData.stageWidth=this.stage.stageWidth;
            ConfigData.stageHeight=this.stage.stageHeight;
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            const loadingView = new LoadingView();
            this.addChild(loadingView);
            // DisUtil.get(loadingView,this).center();
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            // this.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise<void>((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        this.addChild(Game.instance);
    }
}
