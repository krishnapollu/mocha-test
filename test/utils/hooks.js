module.exports = {
async before() {
    console.log('In Prepare Function...')
    const util = require('./FileUtil');
    global.testData = await util.extractTestData();
}
}