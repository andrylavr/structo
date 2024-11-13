import {ValueDataType} from "../core.js";

export class Int32 extends ValueDataType {
    constructor(v = 0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.int32()
    }
}

export function int32(v = 0){
    return new Int32(v)
}

export function int(v = 0){
    return new Int32(v)
}