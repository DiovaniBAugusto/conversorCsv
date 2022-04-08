class Processor{

    static convertCsv(text) {
        var data = text.split("\r\n");
        var result = [];
        data.forEach(row => {
            var splitted = row.split(";");
            var filtered = splitted.filter(value =>{
                return value !== '';
            });
            result.push(filtered);
        });
        
        return result;
    }   
}

module.exports = Processor;