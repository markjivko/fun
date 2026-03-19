/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (0 === x) {
        return x;
    }

    if (x < 0) {
        return -1 * reverse(-x);
    }

    // Maximum int (32-bit)
    const MAX_INT = "2147483647";
    const length = Math.ceil(Math.log10(x + 1));

    // Prepare the result
    let partial = 0;
    let result = 0;
    let index = 0;
    while (x > 0) {
        const lastDigit = x % 10;

        // 32-bit overflow
        if (10 === length) {
            partial = partial * 10 + lastDigit;
            if (partial > parseInt(MAX_INT.substring(0, index + 1), 10)) {
                result = 0;
                break;
            }
        }

        result += lastDigit * 10 ** (length - index - 1);

        index++;
        x = Math.floor(x / 10);
    }

    return result;
};

module.exports = { reverse };
