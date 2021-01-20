class WS {
    private webSocket: egret.WebSocket;

    /*是否用二进制发送数据*/
    private isBin: boolean = true;
    private _channel: CommandChannel;
    private _loginInfoObj: any;
    //心跳包
    private _heartBeatMsg: BaseMsg = new BaseMsg();
    public static heartBeatCount: number = 0;
    public heartDelay: number = 0;
    //断线重连的次数
    public static connectTime: number = 0;
    private _heartId = null;

    public constructor(channel: CommandChannel) {
        this._channel = channel;
        this._heartBeatMsg.MsgType = NetCommands.MSG_TYPE_OF_HEART_BEAT;
    }

    public login(): void {
        // this.test();
        // return;
        // let xhr: XMLHttpRequest = new XMLHttpRequest();
        // xhr.onload = (evt: any) => {
        //     alert(evt.data);
        //     // this.connectByUrl("wss://game.xueyan.online");
        // }

        // xhr.onerror = (evt: any) => {
        //     alert(evt.data);
        // }
        // xhr.open("POST", "http://39.98.216.22:21080/cgi-bin/server");

        // // xhr.setRequestHeader("Content-type", "application/json");
        // let send_data = { 'openId': '123456' ,'password':"123456",'channelId':1};
        // xhr.send("openId=123456&version=1.0.0&channelId=1");
        var request: egret.HttpRequest;
        request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);

        request.open("http://39.98.216.22:21080/cgi-bin/server", egret.HttpMethod.POST);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let openId = Date.now();
        request.send(`openId=${openId}&version=1.0.0&channelId=1`);
    }

    private test(): void {
        if (this.webSocket && this.webSocket.connected) {
            ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_MATCH, { type: 1 });
        } else {
            var wsUri = `ws://39.98.216.22:15001/ws`;
            this.connectByUrl(wsUri);
        }
    }

    private onPostComplete(e: egret.Event): void {
        var request: any = e.currentTarget;
        egret.log("post data : ", request.response);
        let responseObj = JSON.parse(request.response);
        if (responseObj && responseObj.code == 0) {
            this._loginInfoObj = responseObj;
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_VIEW_BY_NAME, [ConstData.LOGIN_VIEW, true]);
            this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_SHOW_VIEW_BY_NAME, [ConstData.HALL_VIEW, 0, 0, ConstData.UI_LAYER]);
            // this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_CONNECT);
            var wsUri = `ws://${responseObj.serverIp}:${responseObj.serverPort}/ws`;
            this.connectByUrl(wsUri);
        }
    }

    private onPostIOError(e: egret.IOErrorEvent): void {

    }

    public register(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.onload = (evt: any) => {
            alert(evt.data);
            // this.connectByUrl("wss://game.xueyan.online");
        }

        xhr.onerror = (evt: any) => {
            alert("请求错误");
        }
        xhr.open("POST", "http://192.168.2.214:8080/cgi-bin/register");

        xhr.setRequestHeader("Content-type", "application/json");
        let send_data = { 'openId': '123456', 'password': "123456" }
        xhr.send(JSON.stringify(send_data));
    }

    public connectByUrl(url): void {
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_WAIT,'连接服务器......');
        if (!this.webSocket) {
            this.webSocket = new egret.WebSocket();
            this.webSocket.type = this.isBin ? egret.WebSocket.TYPE_BINARY : egret.WebSocket.TYPE_STRING;
            this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            // this.webSocket.connect(url, port);
        }
        // console.log('连接服务器的地址：',url);
        !this.webSocket.connected && this.webSocket.connectByUrl(url);
    }

    public connect(serverIp, serverPort): void {
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_WAIT,'连接服务器......');
        if (!this.webSocket) {
            this.webSocket = new egret.WebSocket();
            this.webSocket.type = this.isBin ? egret.WebSocket.TYPE_BINARY : egret.WebSocket.TYPE_STRING;
            this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            // this.webSocket.connect(url, port);
        }
        // console.log('连接服务器的地址：',url);
        !this.webSocket.connected && this.webSocket.connect(serverIp, serverPort);
    }

    public close(): void {
        this.webSocket.close();
    }

    private onReceiveMessage(e: egret.Event): void {
        if (this.isBin) {
            var byte: egret.ByteArray = new egret.ByteArray();
            this.webSocket.readBytes(byte);
            let packetLen = byte.dataView.getInt32(0);
            let typeId = byte.dataView.getInt32(4);
            ProtoRegister.Ins.decode(typeId, byte.buffer.slice(8));
            // console.log('收到二进制数据', "readBYTE:" + msg);
        } else {
            var msg = this.webSocket.readUTF();
            // console.log('收到字符串数据',msg);
        }
        // msg != '' && this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_READDATA, JSON.parse(msg));
        // NetController.getInstance().readData(JSON.parse(msg));
    }

    private cache: egret.ByteArray = new egret.ByteArray;
    public read(ctx, bytes: egret.ByteArray): void {

    }

    public sendData(data: egret.ByteArray): void {
        // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_WAIT,'等待响应......');
        // console.log('发出消息' + data);
        if (this.isBin) {
            this.webSocket.writeBytes(data, 0, data.bytesAvailable);
            this.webSocket.flush();
        } else {
            // this.webSocket.writeUTF(data);
        }
    }

    public clearHeartBeat(): void {
        clearInterval(this._heartId);
    }

    //连接成功之后，直接进入游戏，未作桥梁，可以加入回调函数
    private onSocketOpen(): void {
        this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_REMOVE_WAIT);
        this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SHOWSTATE, "socket 连接上了");
        //登录请求
        // let loginInfoMes = new com.protobuff.data.LoginModule();
        let loginInfo = { openId: this._loginInfoObj.loginOpenId, channelId: '1', nickname: "jiluo", imgurl: "", sex: 1, device: "" };
        // var message = com.protobuff.data.LoginModule.create(loginInfo); // or use .fromObject if conversion is necessary
        // var buffer = com.protobuff.data.LoginModule.encode(message).finish();
        // var byte: egret.ByteArray = new egret.ByteArray();
        // var bufferByte:egret.ByteArray = new egret.ByteArray(buffer);
        // byte.writeBytes(ByteIntUtils.int2Bytes(4 + bufferByte.length));
        // byte.writeBytes(ByteIntUtils.int2Bytes(1001));
        // byte.writeBytes(bufferByte);
        // byte.position = 0;
        // this.webSocket.writeBytes(byte, 0, byte.bytesAvailable);
        ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_LOGIN, loginInfo);
        // ProtoRegister.Ins.setMessage(NetCommands.MSG_TYPE_OF_MATCH, { type: 1 });

        //发送
        // let packetInfo = {packetType:1001,data:buffer};
        // var packetMessage = com.protobuff.data.PacketData.create(packetInfo); // or use .fromObject if conversion is necessary
        // var packetBuffer = com.protobuff.data.PacketData.encode(packetMessage).finish();

        // var packetByte: egret.ByteArray = new egret.ByteArray(packetBuffer);
        // // byte.writeUTF(data);
        // packetByte.position = 0;
        // this.webSocket.writeBytes(packetByte, 0, packetByte.bytesAvailable);

        // this._channel.postCommand(ConstData.GAME_CONTROLLER,ConstData.GAME_ENTER_GAME);
        // clearInterval(this._heartId);
        // WS.heartBeatCount = 0;
        // WS.connectTime = 0;
        // this._heartId = setInterval(() => {
        //     // this._channel.postCommand(ConstData.NET_CONTROLLER,ConstData.NET_SENDDATA,[this._heartBeatMsg]);
        //     this.heartDelay++;
        //     if (this.heartDelay > 15) {
        //         // console.log("send _heartBeatMsg", JSON.stringify(this._heartBeatMsg));
        //         this.sendData(JSON.stringify(this._heartBeatMsg));
        //         this.heartDelay = 0;
        //     }
        //     WS.heartBeatCount += 2;
        //     if (!this.webSocket.connected && WS.heartBeatCount > 20) {
        //         WS.heartBeatCount = 0;
        //         //断线，发起重连
        //         if (WS.connectTime >= ConfigData.RECONECTTIME) {
        //             this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_TIP, ['重连服务器失败，请检查网络', 700]);
        //             clearInterval(this._heartId);
        //             this._channel.postCommand(ConstData.BATTLE_CONTROLLER, ConstData.BATTLE_RETURN_GROUND);
        //             WS.connectTime = 0;
        //         } else {
        //             // this._channel.postCommand(ConstData.UI_CONTROLLER,ConstData.UI_ADD_WAIT,'您的网络不稳定，正在重连(第'+(11-WS.connectTime)+'次)......');
        //             if (WS.connectTime < 1) {
        //                 this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '网络不稳定,正在重连');
        //             }
        //             WS.connectTime++;
        //         }
        //     }
        // }, 250);
    }

    private onSocketClose(data: egret.IOErrorEvent): void {
        this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SHOWSTATE, "socket 关闭了");
        let currentViewName = this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_CURRENT_VIEW);
        if (currentViewName == ConstData.BATTLE_VIEW && Player.instance.baseNum > 0) {
            if (WS.connectTime < 1) {
                // this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '网络不稳定,正在重连');
                // WS.connectTime++;
            }
        }
        // console.log(data);
    }
    private onSocketError(data): void {
        this._channel.postCommand(ConstData.NET_CONTROLLER, ConstData.NET_SHOWSTATE, "socket error");
        let currentViewName = this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_GET_CURRENT_VIEW);
        if (currentViewName == ConstData.BATTLE_VIEW && Player.instance.baseNum > 0) {
            if (WS.connectTime < 1) {
                // this._channel.postCommand(ConstData.UI_CONTROLLER, ConstData.UI_ADD_WAIT, '网络不稳定,正在重连');
                // WS.connectTime++;
            }
        }
    }

    public destroy(): void {
        this._channel = null;
        this._heartBeatMsg = null;
        if (this.webSocket) {
            this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            this.webSocket = null;
        }
    }
}