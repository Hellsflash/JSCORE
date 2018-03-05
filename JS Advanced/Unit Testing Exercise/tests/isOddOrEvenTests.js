let expect = require('chai').expect;
const isOddOrEven =require('../02.Even Or Odd');

describe('Testing Ood or Even',function () {
    it('(hi) should return even',function () {
        expect(isOddOrEven('hi')).to.be.equal('even');
    });
    it('(hello) should return even',function () {
        expect(isOddOrEven('hello')).to.be.equal('odd');
    });
    it('(1) should return even',function () {
        expect(isOddOrEven(1)).to.be.undefined;
    });
    it('({}) should return even',function () {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('([]) should return even',function () {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('(hello my name is Mario) should return even',function () {
        expect(isOddOrEven('hello my name is Mario')).to.be.equal('even');
    });
    it('(learning JS) should return even',function () {
        expect(isOddOrEven(' ')).to.be.equal('odd');
    });
});