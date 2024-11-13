import {ValueDataType} from "../core.js";

export class UInt64 extends ValueDataType {
    constructor(v = 0n) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.uint64()
    }
}

export function uint64(v = 0n){
    return new UInt64(v)
}