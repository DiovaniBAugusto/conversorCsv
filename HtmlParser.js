const ejs = require("ejs");

class HtmlParser{
    static async parser(data){
        try{
            return await ejs.renderFile("./layout.ejs", {header: data.getHeader(), body: data.getBody(), rowsCount: data.rowCount}) ;
        }catch(err){
            console.log(err);
        }
        
    }
}

module.exports = HtmlParser;