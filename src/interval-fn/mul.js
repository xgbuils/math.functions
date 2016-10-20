var limitComparator = require('math.interval-utils/src/limit-comparator')

module.exports = function (a, b) {
    var max = point(-Infinity, 0)
    var min = point(Infinity, 0)
    a.forEach(function (x) {
        b.forEach(function (y) {
            var prodValue = x.value * y.value
            var prodLimit = x.limit || y.limit
            var prodMax = point(prodValue, prodLimit && -1)
            var prodMin = point(prodValue, prodLimit && 1)
            if (limitComparator(prodMax, max) > 0) {
                max = prodMax
            }
            if (limitComparator(prodMin, min) < 0) {
                min = prodMin
            }
        })
    })

    return [min, max]
}

function point (value, limit, force) {
    return {
        value: value,
        limit: limit
    }
}