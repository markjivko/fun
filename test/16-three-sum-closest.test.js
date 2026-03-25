const { threeSumClosest } = require("../src/16-three-sum-closest.js");

describe("Three Sum Closest", () => {
    const tests = [
        { nums: [-1, 2, 1, -4], target: 1, res: 2 },
        { nums: [0, 0, 0], target: 1, res: 0 },
        { nums: [1, 1, 1, 0], target: -100, res: 2 },
        { nums: [-1000, -5, -5, -5, -5, -5, -5, -1, -1, -1], target: -14, res: -15 }
    ];

    for (const { nums, target, res } of tests) {
        test(`${nums} (${target}): ${res}`, () => {
            expect(threeSumClosest(nums, target)).toEqual(res);
        });
    }
});
