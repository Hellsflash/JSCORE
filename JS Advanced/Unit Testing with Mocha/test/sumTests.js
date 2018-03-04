let expect = require('chai').expect;
const sum = require('../04.Sum of Numbers');
describe('Sum', function () {
    it('[1,2] should be equal to 3', function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('[] should be 0', function () {
        expect(sum([])).to.be.equal(0);
    });
    it('[1.5,1.5,-2] should be 1',function () {
        expect(sum([1.5,1.5,-2])).to.be.equal(1);
    });
    it('[pesho] should be NaN',function () {
        expect(sum(['pesho'])).to.be.NaN;
    });
});


