const { reverse } = require("../src/7-reverse-int.js");

describe("Reverse Integer", () => {
    const tests = [
        { int: 123, res: 321 },
        { int: -123, res: -321 },
        { int: 120, res: 21 },
        { int: 1534236469, res: 0 },
        { int: -2147483412, res: -2143847412 }
    ];

    for (const { int, res } of tests) {
        test(`${int}: ${res}`, () => {
            expect(reverse(int)).toStrictEqual(res);
        });
    }
});
