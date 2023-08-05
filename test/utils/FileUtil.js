const fs = require('fs')
const XLSX = require('xlsx')

class FileUtil {

    setData(file, data){

        fs.writeFileSync(file, JSON.stringify(data, null, 4), err => {
            if(err)
                console.log('Error'+ err);
        })
    }

    extractTestData(){
        console.log('Reading excel....')
        const workbook = XLSX.readFile('./test/resources/test-data.xlsx');
        let sheets = {};
        for(const sheetname of workbook.SheetNames){
            console.log('Reading contents of sheet '+sheetname);
            sheets[sheetname] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetname]);
        }
        // console.log(JSON.stringify(sheets));
        console.log('Writing to extract.json...');
        fs.writeFileSync('./test/resources/extract.json', JSON.stringify(sheets));
        return require('./test/resources/extract.json');
    }
}module.exports = new FileUtil();