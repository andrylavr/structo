import {ValueDataType} from "../core.js";

export class Int64 extends ValueDataType {
    constructor(v = 0n) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.int64()
    }
}

export function int64(v = 0n){
    return new Int64(v)
}