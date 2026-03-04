/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;

    // Invalid entries
    if (0 === totalLength) {
        return undefined;
    }

    // One value
    if (1 === totalLength) {
        return nums1.length ? nums1[0] : nums2[0];
    }

    // Store only mid and mid -1
    const midValues = [];
    const midIndex = Math.floor(totalLength / 2);
    const midPush = (a, b, value) => {
        if (a + b >= midIndex - 1) {
            midValues.push(value);
        }
    };

    // Walk the numbers
    let pointerA = 0;
    let pointerB = 0;
    while (pointerA + pointerB <= midIndex) {
        let valueA = nums1[pointerA] ?? null;
        let valueB = nums2[pointerB] ?? null;

        if (null === valueA && null === valueB) {
            break;
        }

        if (null === valueA) {
            midPush(pointerA, pointerB, valueB);
            pointerB++;
            continue;
        }

        if (null === valueB) {
            midPush(pointerA, pointerB, valueA);
            pointerA++;
            continue;
        }

        midPush(pointerA, pointerB, valueA <= valueB ? valueA : valueB);
        valueA <= valueB ? pointerA++ : pointerB++;
    }

    return 0 === totalLength % 2 ? (midValues[0] + midValues[1]) / 2 : midValues[1];
};

module.exports = { findMedianSortedArrays };
