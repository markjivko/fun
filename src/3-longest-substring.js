/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let maxLength = s.length ? 1 : 0;
    let substring = "";

    for (let index = 0; index < s.length; index++) {
        const letter = s[index];
        const firstMatch = substring.indexOf(letter);

        if (-1 !== firstMatch) {
            if (substring.length > maxLength) {
                maxLength = substring.length;
            }

            substring = substring.substring(firstMatch + 1);
        }

        substring += letter;
    }

    if (substring.length > maxLength) {
        maxLength = substring.length;
    }

    return maxLength;
};

module.exports = { lengthOfLongestSubstring };
