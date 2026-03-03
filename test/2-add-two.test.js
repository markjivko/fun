const { addTwoNumbers } = require("../src/2-add-two.js");

test("Add Two Numbers", async () => {
    const tests = [
        {
            args: [
                [2, 4, 3],
                [5, 6, 4]
            ],
            res: [7, 0, 8]
        },
        {
            args: [[0], [0]],
            res: [0]
        },
        {
            args: [
                [9, 9, 9, 9, 9, 9, 9],
                [9, 9, 9, 9]
            ],
            res: [8, 9, 9, 9, 0, 0, 0, 1]
        }
    ];

    for (const { args, res } of tests) {
        const result = listToArray(addTwoNumbers(...args.map(arrayToList)));
        expect(result).toStrictEqual(res);
    }
});
