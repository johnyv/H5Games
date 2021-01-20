class EffectManager {
    private static _instance: EffectManager;

    public static get instance(): EffectManager {
        EffectManager._instance == null && (EffectManager._instance = new EffectManager());
        return EffectManager._instance;
    }

    /**物品滑翔效果
     * startP:起始点
     * endP:终止点
     * displayNum:粒子数量
     * time:每个粒子到达终点的时间
     * textureName:粒子贴图名称
     * gap:粒子出现间隔时间
     */
    public fromToEffect(container: egret.DisplayObjectContainer, startP: egret.Point, endP: egret.Point, displayNum: number, time: number, textureName: string, gap: number,finishFunc:Function = null,scale:number = 1): void {
        for (let i: number = 0; i < displayNum; i++) {
            let texture = RES.getRes(textureName);
            if (!texture) {
                try {
                    throw new Error("粒子资源不存在:" + textureName);
                }
                catch (e) {
                    alert("粒子资源不存在:" + textureName);
                }
                return;
            }
            let textureMc: eui.Image = new eui.Image(texture);
            textureMc.x = startP.x - textureMc.width/2;
            textureMc.y = startP.y - textureMc.height/2;
            textureMc.scaleX = textureMc.scaleY = scale;
            container.addChild(textureMc);
            egret.Tween.get(textureMc).wait(i * gap).to({ x: endP.x, y: endP.y }, time).call(() => { textureMc.parent.removeChild(textureMc);finishFunc && finishFunc() });
        }
    }
}