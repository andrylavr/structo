import {ValueDataType} from "../core.js";

export class Float32 extends ValueDataType {
    constructor(v = 0.0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.float32()
    }
}

export function float32(v = 0.0){
    return new Float32(v)
}