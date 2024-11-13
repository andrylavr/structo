import {Struct, uint32, isNode, loadBinaryFile, Reader} from "../lib/index.js";

const HEADER_LUMPS = 15;

class lump_t extends Struct {
    fileofs = uint32(0)
    filelen = uint32(0)
}

class dheader_t extends Struct {
    version = uint32(0)
    /**
     *
     * @type {Array<lump_t>}
     */
    lumps = lump_t.array(HEADER_LUMPS)
}

async function main(){
    let filename = "./de_inferno.bsp";
    let arrayBuffer = await loadBinaryFile(filename);
    let reader = new Reader(arrayBuffer);
    let header = new dheader_t;
    reader.read(header);

    console.log("BSP version", header.version.value);
    console.log("Lumps:");
    for(let lump of header.lumps){
        console.log(
            "\tfileofs",
            lump.fileofs.value,
            "filelen",
            lump.filelen.value,
        )
    }
}

main();