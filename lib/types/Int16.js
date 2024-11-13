import {ValueDataType} from "../core.js";

export class Int16 extends ValueDataType {
    constructor(v = 0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.int16()
    }
}

export function int16(v = 0){
    return new Int16(v)
}