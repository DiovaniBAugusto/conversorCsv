const pdf = require("html-pdf");

class PdfWriter{
    static writer(fileName, content){
        pdf.create(content,{}).toFile(fileName, err => {});
    }
}

module.exports = PdfWriter;