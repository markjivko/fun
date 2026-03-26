const { fourSum } = require("../src/18-four-sum.js");

describe("Four Sum", () => {
    const tests = [
        {
            args: [1, 0, -1, 0, -2, 2],
            target: 0,
            res: [
                [-2, -1, 1, 2],
                [-2, 0, 0, 2],
                [-1, 0, 0, 1]
            ]
        },
        {
            args: [2, 2, 2, 2, 2],
            target: 8,
            res: [[2, 2, 2, 2]]
        },
        {
            args: [1, -2, -5, -4, -3, 3, 3, 5],
            target: -11,
            res: [[-5, -4, -3, 1]]
        }
    ];

    const mapper = v => `${v.sort((a, b) => a - b)}`;
    for (const { args, target, res } of tests) {
        test(`${args} > ${target}: ${JSON.stringify(res)}`, () => {
            expect(fourSum(args, target).map(mapper).sort()).toEqual(res.map(mapper).sort());
        });
    }
});
