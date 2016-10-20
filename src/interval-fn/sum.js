module.exports = function (a, b) {
    return [{
        value: a[0].value + b[0].value,
        limit: a[0].limit || b[0].limit
    }, {
        value: a[1].value + b[1].value,
        limit: a[1].limit || b[1].limit
    }]
}
