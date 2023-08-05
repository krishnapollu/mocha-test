const data = require('../resources/data.json')
const datafile = './test/resources/data.json';
const util = require('../utils/FileUtil')

describe('test', () =>{
    it('case 1', () => {
        data.test04.sum = data.test04.var1 + data.test04.var2;
        util.setData(datafile, data);
    })
})