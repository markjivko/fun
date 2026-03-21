/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (string, pattern) => {
    const checkMatch = (si, pi) => {
        const lazy = "*" === pattern[pi + 1];

        // End of the line (nothing to match)
        if (si >= string.length && pi >= pattern.length) {
            return true;
        }

        if (!lazy) {
            if (si < string.length && ("." === pattern[pi] || pattern[pi] === string[si])) {
                return checkMatch(si + 1, pi + 1);
            }
        } else {
            // Greedy match
            if ("." === pattern[pi] || pattern[pi] === string[si]) {
                if (si < string.length && checkMatch(si + 1, pi)) {
                    return true;
                }
            }

            // Skip this character
            if (checkMatch(si, pi + 2)) {
                return true;
            }
        }

        return false;
    };

    return checkMatch(0, 0);
};

module.exports = { isMatch };

console.log(isMatch("mississippi", "mis*is*p*."));
