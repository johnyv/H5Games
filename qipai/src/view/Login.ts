class Login extends eui.Component implements eui.UIComponent {
    private _channel: CommandChannel;
    public login_btn: eui.Image;

    public constructor(channel: CommandChannel) {
        super();
        this._channel = channel;
    }

    protected childrenCreated(): void {
        this.login_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginFunc, this);
    }

    protected onLoginFunc(): void {
        this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_LOGIN);
    }

    public destroy(): void {
        super.removeChildren();
        this._channel = null;
        this.login_btn.texture.dispose();
        this.login_btn = null;
    }
}