class Zhuangjia extends eui.Component implements eui.UIComponent {
    public zhuangJia_logo:eui.Image;

    public showZhuangJia():void{
        this.zhuangJia_logo.visible = true;
    }

    public hideZhuangJia():void{
        this.zhuangJia_logo.visible = false;
    }
}
