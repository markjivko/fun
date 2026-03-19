const MAX_PARTIALS = [];

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    if (0 === x) {
        return x;
    }

    if (x < 0) {
        return -1 * reverse(-x);
    }

    // Integer length
    const length = Math.ceil(Math.log10(x + 1));

    // Overflow checks
    let ovfCheck = 10 === length;
    let ovfPartial = 0;

    // Initialize max partials
    if (ovfCheck && !MAX_PARTIALS.length) {
        for (let i = 0; i < 10; i++) {
            MAX_PARTIALS[i] = parseInt("2147483647".substring(0, i + 1), 10);
        }
    }

    // Final result
    let result = 0;
    let index = 0;
    while (x > 0) {
        const lastDigit = x % 10;

        if (ovfCheck) {
            ovfPartial = ovfPartial * 10 + lastDigit;
            if (ovfPartial < MAX_PARTIALS[index]) {
                ovfCheck = false;
            } else if (ovfPartial > MAX_PARTIALS[index]) {
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
