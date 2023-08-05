
var count = 0;
describe('test', () => {

    describe('scenario 01', () => {
        it('case 1', () => {
            console.log(count++);
        });
        it('case 2', () => {
            console.log(count++);
        })
        it('case 3', () => {
            console.log(count++);
        })
    });

    describe('scenario 02', () => {
        it('case 4', () => {
            console.log(count++);
        })
        it('case 5', () => {
            console.log(count++);
        })
        it('case 6', () => {
            console.log(count++);
        })
    });
})