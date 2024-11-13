import {ArrayOf, DataType} from "../core.js";

export class Struct extends DataType {

    read(r) {
        super.read(r);
        let members = Object.values(this);
        for (let member of members){
            member.read(r);
        }
    }

    toSimpleValue(){
        let o = {};
        let entries = Object.entries(this);
        for(let [k, v] of entries){
            o[k] = v.toSimpleValue();
        }
        return o;
    }

}