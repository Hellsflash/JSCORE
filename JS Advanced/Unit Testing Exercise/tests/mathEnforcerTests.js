let expect = require('chai').expect;
const mathEnforcer = require('../04.Math Enforcer').mathEnforcer;

describe('MathEnforcer tests', function () {
    describe('addFive', function () {
        it('with "5" should return undefined', function () {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it('should return 10 for 5', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should return 10.5 for 5.5', function () {
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        });
        it('should return 4 for -1', function () {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
        });
    });
    describe('subtractTen',function () {
        it('with "5" should return undefined',function () {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
        it('should return 1 for 11',function () {
            expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
        });
        it('should return 8.87 for 1.13',function () {
            expect(mathEnforcer.subtractTen(1.13)).to.be.closeTo(-8.87,0.001)
        });
        it('should return -11 for -1',function () {
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
        });
    });
    describe('Sum',function () {
        it('should return undefined for ("5",1)',function () {
            expect(mathEnforcer.sum('5',1)).to.be.undefined;
        });
        it('should return undefined for (1,"5")',function () {
            expect(mathEnforcer.sum(1,"5")).to.be.undefined;
        });
        it('should return undefined for ("1","5")',function () {
            expect(mathEnforcer.sum("1","5")).to.be.undefined;
        });
        it('should return -4 for (-5,1)',function () {
            expect(mathEnforcer.sum(-5,1)).to.be.equal(-4)
        });
        it('should return 3.3 from (1.1,2.2)',function () {
            expect(mathEnforcer.sum(1.1,2.2)).to.equals(3.3000000000000003);
        });
        it('should return -2 from (-1,-1)',function () {
            expect(mathEnforcer.sum(-1,-1)).to.be.equal(-2);
        });
    });
});