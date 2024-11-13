import {type, val} from "./symbols.js";

export class ArrayOf extends Array {
    [type]

    /**
     *
     * @param {Reader} r
     */
    read(r){
        for(let i = 0; i < this.length; i++){
            this[i].read(r);
        }
    }

    toSimpleValue(){
        let arr = new Array(this.length);
        for(let i = 0; i < this.length; i++){
            arr[i] = this[i].toSimpleValue();
        }
        return arr;
    }
}

export class DataType {

    /**
     *
     * @param len
     * @returns {Array<DataType>}
     */
    static array(len){
        let arr = new ArrayOf(len);
        arr[type] = this;
        for (let i = 0; i < len; i++){
            arr[i] = new this;
        }
        return arr;
    }

    /**
     * @param {Reader} r
     */
    read(r){}

}

export class ValueDataType extends DataType {
    [val];

    constructor(v) {
        super();
        this.value = v;
    }

    set value(v){ this[val] = v }
    get value(){ return this[val] }

    [Symbol.toPrimitive](){
        return this.value;
    }

    toString(){
        return this.value.toString();
    }

    valueOf() {
        return this.value;
    }

    toSimpleValue(){
        return this.value;
    }
}