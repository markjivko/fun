const { findMedianSortedArrays } = require("../src/4-median-of-arrays.js");

findMedianSortedArrays;

describe("Median of Two Sorted Arrays", () => {
    const tests = [
        { args: [[1, 3], [2]], res: 2 },
        {
            args: [
                [1, 2],
                [3, 4]
            ],
            res: 2.5
        },
        { args: [[], [1]], res: 1 },
        { args: [[1, 3, 4], [2]], res: 2.5 },
        { args: [[2], [1, 3, 4, 5]], res: 3 },
        { args: [[2], [1, 3, 4, 5, 6]], res: 3.5 },
        { args: [[1], [2, 3, 4, 5, 6]], res: 3.5 },
        {
            args: [
                [1, 3],
                [2, 4, 5, 6, 7, 8]
            ],
            res: 4.5
        }
    ];

    for (const { args, res } of tests) {
        test(`Median of ${JSON.stringify(args[0])}, ${JSON.stringify(args[1])} is ${res}`, () => {
            expect(findMedianSortedArrays(...args)).toStrictEqual(res);
        });
    }
});
