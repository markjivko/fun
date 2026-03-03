const { twoSum } = require("../src/1-two-sum.js");

test("Two sum", async () => {
    const tests = [
        {
            args: [[2, 7, 11, 15], 9],
            res: [0, 1]
        },
        {
            args: [[3, 2, 4], 6],
            res: [1, 2]
        },
        {
            args: [[3, 3], 6],
            res: [0, 1]
        }
    ];

    for (const { args, res } of tests) {
        expect(twoSum(...args)).toStrictEqual(res);
    }
});
