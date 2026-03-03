global.arrayToList = values => {
    const result = {
        val: null,
        next: null
    };
    let node = result;

    if (Array.isArray(values) && values.length) {
        for (let index = 0; index < values.length; index++) {
            node.val = values[index];

            if (index < values.length - 1) {
                node.next = {
                    val: null,
                    next: null
                };
                node = node.next;
            }
        }
    }

    return result;
};

global.listToArray = list => {
    const result = [];
    let node = list;

    while (node) {
        if (null !== node.val) {
            result.push(node.val);
        }
        node = node.next;
    }

    return result;
};

// Extend "expect"
expect.extend({
    toHaveKeys(received, expectedKeys, exclusive = false) {
        if ("object" !== typeof received || null === received) {
            return {
                message: () => `Expected object type instead of \x1b[31m${typeof received}\x1b[0m`,
                pass: false
            };
        }

        if (!Array.isArray(expectedKeys)) {
            return {
                message: () => "The \x1b[31m'expected keys'\x1b[0m argument must be an array",
                pass: false
            };
        }

        if (!expectedKeys.every(key => key in received)) {
            const missingKeys = expectedKeys.filter(key => !Object.keys(received).includes(key));

            return {
                message: () => `Object has missing keys: \x1b[31m${missingKeys.join(", ")}\x1b[0m`,
                pass: false
            };
        }

        if (exclusive && expectedKeys.length != Object.keys(received).length) {
            const extraKeys = Object.keys(received).filter(key => !expectedKeys.includes(key));

            return {
                message: () => `Object has extra keys: \x1b[31m${extraKeys.join(", ")}\x1b[0m`,
                pass: false
            };
        }

        return {
            message: () => `Object has keys${exclusive ? " (exclusively)" : ""}: ${expectedKeys.join(", ")}`,
            pass: true
        };
    }
});
