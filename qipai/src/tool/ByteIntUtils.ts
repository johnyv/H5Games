class ByteIntUtils {
	public static bytes2Int(bytes:egret.ByteArray) {
		let result = 0;
		// 将每个byte依次搬运到int相应的位置
		result = bytes[0] & 0xff;
		result = result << 8 | bytes[1] & 0xff;
		result = result << 8 | bytes[2] & 0xff;
		result = result << 8 | bytes[3] & 0xff;
		return result;
	}

	public static int2Bytes(num:number):egret.ByteArray {
		let bytes:egret.ByteArray = new egret.ByteArray();
		// 通过移位运算，截取低8位的方式，将int保存到byte数组
		bytes.writeByte(num >>> 24);
		bytes.writeByte(num >>> 16);
		bytes.writeByte(num >>> 8);
		bytes.writeByte(num);
		return bytes;
	}
	
}
