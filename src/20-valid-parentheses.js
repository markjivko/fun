/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = str => {
    const PAIRS = { "(": ")", "[": "]", "{": "}" };

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

module.exports = { isValid };
