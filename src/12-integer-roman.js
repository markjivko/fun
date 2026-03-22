/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
    let result = "";
    let pow = 0;

    const DICT = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" };
    while (num > 0) {
        const digit = num % 10;

        switch (digit) {
            case 1:
            case 2:
            case 3:
                result = `${DICT[10 ** pow].repeat(digit)}${result}`;
                break;

            case 4:
                result = `${DICT[10 ** pow]}${DICT[5 * 10 ** pow]}${result}`;
                break;

            case 5:
            case 6:
            case 7:
            case 8:
                result = `${DICT[5 * 10 ** pow]}${DICT[10 ** pow].repeat(digit - 5)}${result}`;
                break;

            case 9:
                result = `${DICT[10 ** pow]}${DICT[10 ** (pow + 1)]}${result}`;
                break;
        }

        num = Math.floor(num / 10);
        pow++;
    }

    return result;
};

module.exports = { intToRoman };
