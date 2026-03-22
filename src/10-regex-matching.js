/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (string, pattern) => {
    const checkCache = {};
    const checkMatch = (si, pi) => {
        const key = `${si}-${pi}`;

        if ("undefined" === typeof checkCache[key]) {
            checkCache[key] = false;

            const lazy = "*" === pattern[pi + 1];
            do {
                // End of the line (nothing to match)
                if (si >= string.length && pi >= pattern.length) {
                    checkCache[key] = true;
                    break;
                }

                if (!lazy) {
                    if (si < string.length && ("." === pattern[pi] || pattern[pi] === string[si])) {
                        checkCache[key] = checkMatch(si + 1, pi + 1);
                        break;
                    }
                } else {
                    // Greedy match
                    if ("." === pattern[pi] || pattern[pi] === string[si]) {
                        if (si < string.length && checkMatch(si + 1, pi)) {
                            checkCache[key] = true;
                            break;
                        }
                    }

                    // Skip this character
                    if (checkMatch(si, pi + 2)) {
                        checkCache[key] = true;
                        break;
                    }
                }
            } while (false);
        }

        return checkCache[key];
    };

    return checkMatch(0, 0);
};

module.exports = { isMatch };
