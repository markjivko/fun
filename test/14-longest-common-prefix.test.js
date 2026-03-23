const { longestCommonPrefix } = require("../src/14-longest-common-prefix.js");

describe("Longest Common Prefix", () => {
    const tests = [
        { strs: ["flower", "flow", "flight"], res: "fl" },
        { strs: ["dog", "racecar", "car"], res: "" },
        { strs: ["abc", "abc", "abc"], res: "abc" },
        { strs: ["abc", "ab", ""], res: "" },
        { strs: ["a", "a", "a"], res: "a" },
        { strs: ["wolf"], res: "wolf" },
        { strs: [""], res: "" }
    ];

    for (const { strs: strs, res } of tests) {
        test(`${JSON.stringify(strs)}: ${res}`, () => {
            expect(longestCommonPrefix(strs)).toStrictEqual(res);
        });
    }
});
