/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    // Start with the first word
    let result = strs[0];

    // Prepare the maximum index
    let indexMax = strs[0].length;

    // Go through the other words
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < indexMax) {
            if (result[j] !== strs[i][j]) {
                break;
            }
            j++;
        }

        // Store the new longest common prefix index
        if (j < indexMax) {
            indexMax = j;
        }

        // No further matches possible
        if (0 === j) {
            break;
        }
    }

    // Fetch the final substring
    return result.substring(0, indexMax);
};

module.exports = { longestCommonPrefix };
