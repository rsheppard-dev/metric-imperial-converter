const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite('Function convertHandler.getNum(input)', function() {
        
        test('convertHandler should correctly read a whole number input', function(done) {
            const input = '32L'
            assert.equal(convertHandler.getNum(input), 32)
            done()
        })

        test('convertHandler should correctly read a decimal number input', function(done) {
            const input = '0.5L'
            assert.equal(convertHandler.getNum(input), 0.5)
            done()
        })

        test('convertHandler should correctly read a fractional input', function(done) {
            const input = '1/2L'
            assert.equal(convertHandler.getNum(input), 1/2)
            done()
        })

        test('convertHandler should correctly read a fractional input with a decimal', function(done) {
            const input = '1.1/2L'
            assert.equal(convertHandler.getNum(input), 1.1/2)
            done()
        })

        test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', function(done) {
            const input = '3/2/3L'
            assert.equal(convertHandler.getNum(input), undefined)
            done()
        })

        test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function(done) {
            const input = 'L'
            assert.equal(convertHandler.getNum(input), 1)
            done()
        })  
    })

    suite('Function convertHandler.getUnit(input)', function() {
        
        test('convertHandler should correctly read each valid input unit', function(done) {
            const input = '32L'
            assert.equal(convertHandler.getUnit(input), 'L')
            done()
        })

        test('convertHandler should correctly return an error for an invalid input unit', function(done) {
            const input = '32Li'
            assert.equal(convertHandler.getUnit(input), undefined)
            done()
        })
    })

    suite('Function convertHandler.getReturnUnit(initUnit)', function() {

        test('convertHandler should return the correct return unit for each valid input unit', function(done) {
            const units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
            const returnUnit = ['L', 'gal', 'km', 'mi', 'kg', 'lbs']

            units.forEach((unit, i) => {
                assert.equal(convertHandler.getReturnUnit(unit), returnUnit[i])
            })
            done()
        })
    })

    suite('Function convertHandler.spellOutUnit(unit)', function() {

        test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function(done) {
            const units = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
            const spelledOutUnits = [
                'gallons',
                'liters',
                'miles',
                'kilometers',
                'pounds',
                'kilograms'
            ]

            units.forEach((unit, i) => {
                assert.equal(convertHandler.spellOutUnit(unit), spelledOutUnits[i])
            })
            done()
        })
    })

    suite('Function convertHandler.convert(initNum, initUnit)', function() {

        test('convertHandler should correctly convert gal to L', function(done) {
            const initNum = '4'
            const initUnit = 'gal'
            assert.equal(convertHandler.convert(initNum, initUnit), 15.14164)
            done()
        })

        test('convertHandler should correctly convert L to gal', function(done) {
            const initNum = '32'
            const initUnit = 'L'
            assert.equal(convertHandler.convert(initNum, initUnit), 8.45351)
            done()
        })

        test('convertHandler should correctly convert mi to km', function(done) {
            const initNum = '10'
            const initUnit = 'mi'
            assert.equal(convertHandler.convert(initNum, initUnit), 16.09340)
            done()
        })

        test('convertHandler should correctly convert km to mi', function(done) {
            const initNum = '10'
            const initUnit = 'km'
            assert.equal(convertHandler.convert(initNum, initUnit), 6.21373)
            done()
        })

        test('convertHandler should correctly convert lbs to kg', function(done) {
            const initNum = '12'
            const initUnit = 'lbs'
            assert.equal(convertHandler.convert(initNum, initUnit), 5.44310)
            done()
        })

        test('convertHandler should correctly convert kg to lbs', function(done) {
            const initNum = '12'
            const initUnit = 'kg'
            assert.equal(convertHandler.convert(initNum, initUnit), 26.45549)
            done()
        })
    })

});