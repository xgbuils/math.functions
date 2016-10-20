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

    return limitComparator(min, max) > 0 ? [
        point(0, 0),
        point(0, 0)
    ] : [min, max]
}

function point (value, limit) {
    return {
        value: value,
        limit: limit
    }
}