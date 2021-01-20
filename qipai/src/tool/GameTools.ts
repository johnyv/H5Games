class GameTools {
    public static addGrayFilter(mcArr:Array<any>):void{
         let colorMatrix: Array<any> = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        let filters = new egret.ColorMatrixFilter(colorMatrix);
        for(let i:number = 0;i<mcArr.length;i++){
            mcArr[i] && (mcArr[i].filters = [filters]);
        }
    }
}