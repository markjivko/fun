/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let windowSize = s.length;

    if (windowSize <= 1) {
        return s;
    }

    const check = str => {
        for (let index = 0; index < str.length / 2; index++) {
            if (str[index] !== str[str.length - index - 1]) {
                return false;
            }
        }

        return true;
    };

    while (windowSize >= 1) {
        for (let index = 0; index <= s.length - windowSize; index++) {
            const fragment = s.substring(index, index + windowSize);

            if (check(fragment)) {
                return fragment;
            }
        }
        windowSize--;
    }

    return "";
};

module.exports = { longestPalindrome };
