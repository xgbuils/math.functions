var chai = require('chai')
var expect = chai.expect
var assert = require('assert')
var samples = require('../interval-samples')

var intervalMul = require('../../src/interval-fn/mul')

describe('intervalMul', function () {
    it('product of positive intervals returns correct interval', function () {
        var result = intervalMul(samples['[1, 2)'], samples['(2, 4]'])
        expect(result).to.be.deep.equal(samples['(2, 8)'])
    })

    it('product of negative intervals returns correct interval', function () {
        var result = intervalMul(samples['[-2, 0)'], samples['[-4, -2)'])
        // in chai 0 !== -0
        assert.deepEqual(result, samples['(0, 8]'])
    })

    it('product of intervals that includes 0 returns correct interval', function () {
        var result = intervalMul(samples['[-1, 2)'], samples['[-4, 2)'])
        expect(result).to.be.deep.equal(samples['(-8, 4]'])
    })

    it('if some interval is {0}, product returns {0}', function () {
        var result = intervalMul(samples['{0}'], samples['[-4, 2)'])
        // in chai 0 !== -0
        assert.deepEqual(result, samples['{0}'])
    })

    it('if some interval is {0} and the other is an open interval, product returns {0}', function () {
        var result = intervalMul(samples['{0}'], samples['(2, 8)'])
        // in chai 0 !== -0
        assert.deepEqual(result, samples['{0}'])
    })

    it('product of positive and negative interval returns correct interval', function () {
        var result = intervalMul(samples['[1, 2)'], samples['[-4, -2)'])
        // in chai 0 !== -0
        assert.deepEqual(result, samples['(-8, -2)'])
    })
})
