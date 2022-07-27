// import mocha
const mocha = require('mocha');

//import chai
const chai = require('chai');

//import Calc
const Calc = require('../Calc');
describe('Calc', () => {
    const calc = new Calc();

    it('add', () => {
        chai.expect(calc.add(1, 2)).to.equal(3);
    }
    );

    it('sub', () => {
        chai.expect(calc.sub(1, 2)).to.equal(-1);
    }
    );

    // it('mult', () => {
    //     chai.expect(calc.mult(1, 2)).to.equal(2);
    // }
    // );


    // it('div', () => {
    //     chai.expect(calc.div(1, 2)).to.equal(0.5);
    //     chai.expect(calc.div(1, 0)).to.equal('error');

    // }
    // );
}
);
