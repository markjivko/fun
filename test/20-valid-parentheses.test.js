const { isValid } = require("../src/20-valid-parentheses.js");

describe("Valid Parentheses", () => {
    const tests = [
        { str: "()", res: true },
        { str: "()[]{}", res: true },
        { str: "(]", res: false },
        { str: "([])", res: true },
        { str: "((([])))", res: true },
        { str: "[((([]))){{}}]", res: true },
        { str: "([)]", res: false }
    ];

    for (const { str: str, res } of tests) {
        test(`"${str}": ${res}`, () => {
            expect(isValid(str)).toStrictEqual(res);
        });
    }
});
