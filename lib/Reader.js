export class Reader extends DataView {

    arrayBuffer;
    byteOffset = 0;
    littleEndian = true;

    constructor(arrayBuffer, littleEndian = true) {
        super(arrayBuffer);
        this.arrayBuffer = arrayBuffer;
        this.littleEndian = littleEndian;
    }

    /**
     *
     * @param {Function} method
     * @param {number} byteLen
     * @param {boolean} littleEndian
     */
    getVal(method, byteLen, littleEndian = this.littleEndian){
        let value = method.call(this, this.byteOffset, littleEndian)
        this.byteOffset += byteLen;
        return value;
    }

    int8(littleEndian = this.littleEndian){
        return this.getVal(this.getInt8, 1, littleEndian)
    }
    int16(littleEndian = this.littleEndian){
        return this.getVal(this.getInt16, 2, littleEndian)
    }
    int32(littleEndian = this.littleEndian){
        return this.getVal(this.getInt32, 4, littleEndian)
    }
    int64(littleEndian = this.littleEndian){
        return this.getVal(this.getBigInt64, 8, littleEndian)
    }

    uint8(littleEndian = this.littleEndian){
        return this.getVal(this.getUint8, 1, littleEndian)
    }
    uint16(littleEndian = this.littleEndian){
        return this.getVal(this.getUint16, 2, littleEndian)
    }
    uint32(littleEndian = this.littleEndian){
        return this.getVal(this.getUint32, 4, littleEndian)
    }
    uint64(littleEndian = this.littleEndian){
        return this.getVal(this.getBigUint64, 8, littleEndian)
    }

    float32(littleEndian = this.littleEndian){
        return this.getVal(this.getFloat32, 4, littleEndian)
    }
    float64(littleEndian = this.littleEndian){
        return this.getVal(this.getFloat64, 8, littleEndian)
    }


    /**
     *
     * @param {DataType} variable
     */
    read(variable){
        variable.read(this);
    }

}