import {ValueDataType} from "../core.js";

export class UInt8 extends ValueDataType {
    constructor(v = 0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.uint8()
    }
}

export function uint8(v = 0){
    return new UInt8(v)
}