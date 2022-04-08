const fs = require("fs");
const util = require("util");

class FileController{
    constructor(){
        this.reader = util.promisify(fs.readFile);
        this.write = util.promisify(fs.writeFile);
    }

    async readFile(path){
        try{
            return await this.reader(path, "utf-8");
        }catch{
            return undefined;
        }
    }
    
    
    async writeFile(path, content){
        try{
            await this.write(path,content);
            return true;
        }catch{
            return false;
        }
    }
}

module.exports = FileController;