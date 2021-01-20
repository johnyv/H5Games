/**基本的消息格式*/
class BaseMsg {	
	public MsgType: any;
	public Code: number;
	public Seq: number;
	public Data: any;
	public PlayerIndexIdDic:any;
	public Cards:Array<any>;
	public Type:number;
	public Header:number;
}