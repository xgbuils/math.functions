var chai = require('chai')
var expect = chai.expect
var assert = require('assert')
var samples = require('../interval-samples')

var intervalSum = require('../../src/interval-fn/sum')

describe('intervalSum', function () {
    it('sum of open intervals returns open interval', function () {
        var result = intervalSum(samples['(2, 8)'], samples['(-8, -2)'])
        expect(result).to.be.deep.equal(samples['(-6, 6)'])
    })

    it('sum of closed intervals returns open interval', function () {
        var result = intervalSum(samples['[-2, 0]'], samples['[-4, -2]'])
        // in chai 0 !== -0
        assert.deepEqual(result, samples['[-6, -2]'])
    })

    it('sum of closed-open interval and open-closed interval returns open interval', function () {
        var result = intervalSum(samples['[-1, 2)'], samples['(0, 8]'])
        expect(result).to.be.deep.equal(samples['(-1, 10)'])
    })
})
