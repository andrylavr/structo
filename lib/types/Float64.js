import {ValueDataType} from "../core.js";

export class Float64 extends ValueDataType {
    constructor(v = 0.0) {
        super(v);
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    read(r) {
        this.value = r.float64()
    }
}

export function float64(v = 0.0){
    return new Float64(v)
}