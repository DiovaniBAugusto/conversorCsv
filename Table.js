const { mainModule } = require("process");

class Table{
    constructor(data){
        this.header = data[0];
        data.shift();
        this.body = data;
    }

    getHeader(){
        return this.header;
    }

    getBody(){
        return this.body;
    }


    //retorna numero de colunas
    get columCount(){
        return this.header.length;
    }

    get rowCount(){
        return this.body.length;
    }
}

module.exports = Table;