let expect = require('chai').expect;
const lookupChar = require('../03.Char Lookup');

describe('LookUpChar tests',function () {
    it('should return undefined for 4', function () {
        expect(lookupChar(4, 1)).to.be.undefined;
    });
    it('should return undefined for 4', function () {
        expect(lookupChar('str', '4')).to.be.undefined;
    });
    it('should return undefined for 3.14', function () {
        expect(lookupChar('str', 3.14)).to.be.undefined;
    });
    it('should return Incorrect index for -2', function () {
        expect(lookupChar('str', -2)).to.equals('Incorrect index');
    });
    it('should return Incorrect index for 50', function () {
        expect(lookupChar('str', 50)).to.equals('Incorrect index');
    });
    it('should return s for 0', function () {
        expect(lookupChar('str', 0)).to.equals('s');
    });
    it('should return r for 2', function () {
        expect(lookupChar('str', 2)).to.equals('r');
    });
});