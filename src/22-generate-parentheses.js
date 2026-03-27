/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
    if (1 === n) {
        return ["()"];
    }

    const isValid = str => {
        const PAIRS = { "(": ")" };

        // Watch for open pairs
        let pairOpen = [];
        for (let i = 0; i < str.length; i++) {
            // Store corresponding closing pair
            if (PAIRS[str[i]]) {
                pairOpen.push(PAIRS[str[i]]);
                continue;
            }

            // Did not close properly
            if (pairOpen[pairOpen.length - 1] !== str[i]) {
                return false;
            }

            // Pair closed, so remove it from the list
            pairOpen.pop();
        }

        return 0 === pairOpen.length;
    };

    const generateAll = size => {
        if (1 === size) {
            return ["(", ")"];
        }

        const next = generateAll(size - 1);
        return [...next.map(item => `(${item}`), ...next.map(item => `)${item}`)];
    };

    return generateAll(2 * (n - 1))
        .map(item => `(${item})`)
        .filter(item => item.split("(").length - 1 === n && isValid(item));
};

module.exports = { generateParenthesis };
