const { longestPalindrome } = require("../src/5-longest-palindromic-substring.js");

describe("Longest Palindromic Substring", () => {
    const tests = [
        { str: "babad", res: "bab" },
        { str: "cbbd", res: "bb" },
        { str: "a", res: "a" },
        { str: "ac", res: "a" }
    ];

    for (const { str, res } of tests) {
        test(`"${str}": "${res}"`, () => {
            expect(longestPalindrome(str)).toStrictEqual(res);
        });
    }
});
