export function isNode(){
    return typeof process === 'object' && process + '' === '[object process]';
}

class NodeFS {
    static fs;
    static util;
    static fsReadFile;
    static path;

    static async init(){
        if (!this.fs){
            this.fs = await import("fs");
        }
        if (!this.util){
            this.util = await import("util");
        }
        if (!this.path){
            this.path = await import("path");
        }
        if (!this.fsReadFile){
            this.fsReadFile = this.util.promisify(this.fs.readFile);
        }
    }

    static resolveHome(filename) {
        if (filename[0] === '~') {
            return this.path.join(process.env.HOME, filename.slice(1));
        }
        return filename;
    }

    static async readFile(filename){
        filename = this.resolveHome(filename);
        return await this.fsReadFile(filename);
    }
}


export async function loadBinaryFile(filename){
    if (isNode()){
        await NodeFS.init();
        let data = await NodeFS.readFile(filename);
        return new Uint8Array(data).buffer;
    }else{
        let response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.arrayBuffer();
    }
}