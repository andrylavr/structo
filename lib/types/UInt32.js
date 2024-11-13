import {ValueDataType} from "../core.js";

export class UInt32 extends ValueDataType {
    constructor(v = 0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.uint32()
    }
}

export function uint32(v = 0){
    return new UInt32(v)
}

export function uint(v = 0){
    return new UInt32(v)
}