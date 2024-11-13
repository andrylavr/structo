import {ValueDataType} from "../core.js";

export class UInt16 extends ValueDataType {
    constructor(v = 0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.uint16()
    }
}

export function uint16(v = 0){
    return new UInt16(v)
}