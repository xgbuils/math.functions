module.exports = {
    '(-8, -2)': [{
        value: -8,
        limit: 1
    }, {
        value: -2,
        limit: -1
    }],

    '(-8, 4]': [{
        value: -8,
        limit: 1
    }, {
        value: 4,
        limit: 0
    }],

    '[-4, -2)': [{
        value: -4,
        limit: 0
    }, {
        value: -2,
        limit: -1
    }],

    '[-4, 2)': [{
        value: -4,
        limit: 0
    }, {
        value: 2,
        limit: -1
    }],

    '[-2, 0)': [{
        value: -2,
        limit: 0
    }, {
        value: 0,
        limit: -1
    }],

    '[-1, 2)': [{
        value: -1,
        limit: 0
    }, {
        value: 2,
        limit: -1
    }],

    '{0}': [{
        value: 0,
        limit: 0
    }, {
        value: 0,
        limit: 0
    }],

    '[1, 2)': [{
        value: 1,
        limit: 0
    }, {
        value: 2,
        limit: -1
    }],

    '(2, 4]': [{
        value: 2,
        limit: 1
    }, {
        value: 4,
        limit: 0
    }],

    '(2, 8)' : [{
        value: 2,
        limit: 1
    }, {
        value: 8,
        limit: -1
    }],

    '(0, 8]' : [{
        value: 0,
        limit: 1
    }, {
        value: 8,
        limit: 0
    }]
}
