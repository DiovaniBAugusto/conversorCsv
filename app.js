const FileController = require("./FileController");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PdfWriter = require("./PdfWriter");
const { time } = require("console");

var fileController = new FileController();

async function main(){
    var path = "./tabela.csv";

    var content = await fileController.readFile(path);
    var user = new Table(Processor.convertCsv(content));
    var html = await HtmlParser.parser(user);

    fileController.writeFile(Date.now() + ".html", html);
    PdfWriter.writer(Date.now()+".pdf", html);
}

main();