/**
 * 总数54张，资源名 1-54
 * 扑克牌序号排序是从3点到大小王:对应顺序如下
 * 3 4 5 6 7 8 9 10 J  Q  K  A  2  小王  大王
 * 3 4 5 6 7 8 9 10 11 12 13 14 15 16    17
 * 
 * A  2 3 4 5 6 7 8 9 10 J  Q  K  ♦（方块）
 * 1  2 3 4 5 6 7 8 9 10 11 12 13  
 * 
 * A   2   3   4   5   6   7   8   9   10   J   Q   K  ♣（梅花）
 * 14  15  16  17  18  19  20  21  22  23   24  25  26
 * 
 * A   2   3   4   5   6   7   8   9   10   J   Q   K  ♥（红桃）
 * 27  28  29  30  31  32  33  34  35  36   37  38  39
 * 
 * A   2   3   4   5   6   7   8   9   10   J   Q   K  ♥（黑桃）
 * 40  41  42  43  44  45  46  47  48  49   50  51  52
 * 
 * 小王 大王
 * 53   54
 * 
 * 举例：四张3点1，2，3，4
 * 同点数排序规则 红黑梅方（斗地主可能用不上）
 * 需要提供一个将序号转为点数的方法，用来对比是否是同点数
*/
class Card extends egret.Sprite
{
    private _isSelect:boolean=false;
    private _pokeBmp:egret.Bitmap;
    /**真实点数，注意这是斗地主，最小的是3*/
    public point:number;
    /**扑克序号,1-54*/
    private _index : number;
    //选中提示
    private _selectBg:egret.Shape;

    public constructor(index:number=0){
        super();
        this._pokeBmp=new egret.Bitmap();
        this._selectBg=new egret.Shape();
        this.setWidth(ConfigData.CARDWIDTH);
        this.setHeight(ConfigData.CARDHEIGHT);
        var gra:egret.Graphics=this._selectBg.graphics;
        gra.beginFill(0x000000,0.3);
        gra.drawRoundRect(0,0,this.width,this.height,25,25);
        this.addChild(this._pokeBmp);
        this.addChild(this._selectBg);
        this._selectBg.visible=false;
        this.index=index;
        this.touchEnabled=true;
    }
    
    public setWidth(value:number):void{
        this._pokeBmp.width=value;
        this.width=this._pokeBmp.width;
        this._selectBg.width=this.width;
    }

    public setHeight(value:number):void{
        this._pokeBmp.height=value;
        this.height=this._pokeBmp.height;
        this._selectBg.height=this.height;
    }

    public set source(value:string){
        this._pokeBmp.texture=RES.getRes(value);
    }

    public get index() : number {
        return this._index;
    }
    
    public set index(v : number) {
        this._index = v;
        if(this._index==0)
        {
            //扑克牌背面
            this._pokeBmp.texture =RES.getRes("backPoker");
        }
        else{
            this._pokeBmp.texture=RES.getRes(v+"");
            //获取牌的大小点
            this.point=CardUtils.instance.getPoint(v);
        }
    }

    //是否被点击
    private _onTouch : boolean;
    public get onTouch() : boolean {
        return this._onTouch;
    }
    public set onTouch(v : boolean) {
        this._onTouch = v;
        if(v)
        {
            this.y -= 15;
        }else
        {
            this.y += 15;
        }
    }

    public get isSelect():boolean{
        return this._isSelect;
    }
    
    public currentState:boolean=false;
    public set isSelect(value){
        this._selectBg.visible=value;
        this._isSelect=value;
    }

    public destroy():void{
        if(this._pokeBmp&&this._pokeBmp.texture)
            this._pokeBmp.texture.dispose();
        this._pokeBmp=null;
        this._selectBg=null;
    }
    
}