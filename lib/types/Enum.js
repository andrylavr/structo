import {ValueDataType} from "../core.js";
import {counter} from "../symbols.js";

export class Enum extends ValueDataType {

    static [counter] = 0;

    /**
     *
     * @param {Enum|number} v
     */
    constructor(v) {
        if (v instanceof Enum){
            super(v.value);
            return
        }

        if (typeof v === "number"){
            super(v);
            return
        }

        throw new Error("Invalid enum");
    }

    static get default(){
        return Object.values(this)[0];
    }

    static get iota(){
        let i = this[counter]++;
        let o = new this(i);
        Object.freeze(o)
        return o;
    }

    set value(v){ super.value = v }
    get value(){ return super.value }

    /**
     * @returns {Enum}
     */
    get copy(){
        return new this.constructor(this);
    }
}