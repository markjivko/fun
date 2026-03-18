/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const rValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const rDict = Object.keys(rValues).join("");

    let result = 0;
    for (let pos = 0; pos < s.length; pos++) {
        const rIndex = rDict.indexOf(s[pos]);

        do {
            if (0 === rIndex % 2 && pos < s.length - 1) {
                const nrIndex = rDict.indexOf(s[pos + 1]);
                if (nrIndex === rIndex + 1 || nrIndex === rIndex + 2) {
                    result += rValues[s[pos + 1]] - rValues[s[pos]];
                    pos++;
                    break;
                }
            }

            result += rValues[s[pos]];
        } while (false);
    }

    return result;
};

module.exports = { romanToInt };
