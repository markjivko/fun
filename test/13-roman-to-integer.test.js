const { romanToInt } = require("../src/13-roman-to-integer.js");

describe("Roman to Integer", () => {
    const tests = [
        { str: "III", res: 3 },
        { str: "LVIII", res: 58 },
        { str: "MCMXCIV", res: 1994 }
    ];

    for (const { str, res } of tests) {
        test(`"${str}": ${res}`, () => {
            expect(romanToInt(str)).toStrictEqual(res);
        });
    }
});
