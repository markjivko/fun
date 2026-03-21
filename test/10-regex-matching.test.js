const { isMatch } = require("../src/10-regex-matching.js");

describe("Regular Expression Matching", () => {
    const tests = [
        { args: ["a", ".*..a*"], res: false },
        { args: ["aaba", "ab*a*c*a"], res: false },
        { args: ["ab", ".*c"], res: false },
        { args: ["aa", "a"], res: false },
        { args: ["foo", ".*b*"], res: true },
        { args: ["aa", "a*"], res: true },
        { args: ["ab", ".*"], res: true },
        { args: ["aab", "c*a*b"], res: true },
        { args: ["aaa", "a*a"], res: true },
        { args: ["aaa", "a*b*a"], res: true },
        { args: ["aaa", "ab*a*c*a"], res: true },
        { args: ["mississippi", "mis*is*p*."], res: false }
    ];

    for (const { args, res } of tests) {
        test(`"${args[0]}".match(/${args[1]}/): ${res}`, () => {
            expect(isMatch(...args)).toStrictEqual(res);
        });
    }
});
