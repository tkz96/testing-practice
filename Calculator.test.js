// const { describe } = require('yargs');
const Calculator = require('./Calculator');

// let oof = new Calculator(1, 2)

describe("Calculator Tests", () => {

    //add

    test('adds 1 and 2 to equal 3', () => {
        expect(new Calculator(1, 2).add()).toBe(3);
    });

    test('adds 6 and 9 to equal 15', () => {
        expect(new Calculator(6, 9).add()).toBe(15);
    });
    
    test('adds 66 and 33 to equal 99', () => {
        expect(new Calculator(66, 33).add()).toBe(99);
    });
    
    //subtract
    
    test('subtract 8 from 10 to equal 2', () => {
        expect(new Calculator(10, 8).subtract()).toBe(2);
    });
    
    test('subtract 11 from 20 to equal 9', () => {
        expect(new Calculator(20, 11).subtract()).toBe(9);
    });
    
    test('subtract 8 from 10 to equal 2', () => {
        expect(new Calculator(10, 8).subtract()).toBe(2);
    });
    
    // divide
    
    test('divide 8 by 8 to equal 1', () => {
        expect(new Calculator(8, 8).divide()).toBe(1);
    });
    
    test('divide 12 by 6 to equal 2', () => {
        expect(new Calculator(12, 6).divide()).toBe(2);
    });
    
    test('divide 24 by 8 to equal 3', () => {
        expect(new Calculator(24, 8).divide()).toBe(3);
    });

    // multiply
    
    test('multiply 6 times 9 to equal 54', () => {
        expect(new Calculator(6, 9).multiply()).toBe(54);
    });
    
    test('multiply 7 times 7 to equal 49', () => {
        expect(new Calculator(7, 7).multiply()).toBe(49);
    });
    
    test('multiply 1 times 1 to equal 1', () => {
        expect(new Calculator(1, 1).multiply()).toBe(1);
    });

});