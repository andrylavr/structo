# Structo
Structo is declarative JS binary parser and some binary utils

## Install
```shell
npm install --save @andrylavr/structo
```

## Example
```js
import {Struct, uint32, isNode, loadBinaryFile, Reader} from "@andrylavr/structo";

const HEADER_LUMPS = 15;

class lump_t extends Struct {
    fileofs = uint32(0)
    filelen = uint32(0)
}

class dheader_t extends Struct {
    version = uint32(0)
    lumps = lump_t.array(HEADER_LUMPS)
}

async function main(){
    let filename = "de_inferno.bsp";
    let arrayBuffer = await loadBinaryFile(filename);
    let reader = new Reader(arrayBuffer);
    let header = new dheader_t;
    reader.read(header);

    console.log("BSP version", header.version.value);
    for(let lump of header.lumps){
        console.log(
            "fileofs",
            lump.fileofs.value,
            "filelen",
            lump.filelen.value,
        )
    }
}

main();
```