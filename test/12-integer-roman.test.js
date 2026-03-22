const { intToRoman } = require("../src/12-integer-roman.js");

describe("Integer To Roman", () => {
    const tests = [
        { args: [1], res: "I" },
        { args: [10], res: "X" },
        { args: [3999], res: "MMMCMXCIX" },
        { args: [3749], res: "MMMDCCXLIX" },
        { args: [58], res: "LVIII" },
        { args: [1994], res: "MCMXCIV" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(intToRoman(...args)).toStrictEqual(res);
        });
    }
});
