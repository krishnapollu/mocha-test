var expect = require('chai').expect;

describe('Sample Suite 01', () => {
    it('Sample Test 01', () => {
        console.log('Test case 01 executed...!');
    });
    it('Sample Test 02', () => {
        console.log('Test case 02 executed...!');
    });
    it('Sample Test 03', () => {
        console.log('Test case 03 executed...!');
    });
    it('Sample Test 04', async () => {
        console.log('Test case 04 executed...!');
        const x = 10;
        await expect(x).to.be.eq(11);
    });
});