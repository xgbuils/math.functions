var chai = require('chai')
var expect = chai.expect

var functions = require('../src/')
var sum = functions.sum
var mul = functions.mul

describe('sum', function () {
    it('returns a sum of numbers when is called', function () {
        var a = 3
        var b = 5
        expect(sum(a, b)).to.be.equal(a + b)
    })
})

describe('mul', function () {
    it('returns a mul of numbers when is called', function () {
        var a = 3
        var b = 5
        expect(mul(a, b)).to.be.equal(a * b)
    })
})
