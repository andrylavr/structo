import {ValueDataType} from "../core.js";
import {maxLength} from "../symbols.js";

export class Char extends ValueDataType {
    [maxLength] = 0;

    constructor(v = "") {
        super(v);
        this[maxLength] = v.length;
    }

    set value(v){
        super.value = v.toString().substring(0, this[maxLength]);
    }

    get value(){ return super.value }
}

export function char(maxLen){
    let result = new Char();
    result[maxLength] = maxLen;

    return result;
}