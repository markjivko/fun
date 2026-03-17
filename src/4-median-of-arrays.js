/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArraysMN = function (nums1, nums2) {
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
        const valueA = nums1[pointerA] ?? null;
        const valueB = nums2[pointerB] ?? null;

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // Half of merged array length
    const middle = Math.floor((nums1.length + nums2.length + 1) / 2);

    // Partition (in Nums 1)
    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        // Middle of Partition
        const p1 = Math.floor((left + right) / 2);

        // Inside of Nums 2, half of merged array length from p1
        const p2 = middle - p1;

        // Left and Right of P1 in Nums 1
        const left1 = 0 === p1 ? -Infinity : nums1[p1 - 1];
        const right1 = nums1.length === p1 ? Infinity : nums1[p1];

        // Left and right of P2 in Nums 2
        const left2 = 0 === p2 ? -Infinity : nums2[p2 - 1];
        const right2 = nums2.length === p2 ? Infinity : nums2[p2];

        // Found our true median
        if (left1 <= right2 && left2 <= right1) {
            return 0 === (nums1.length + nums2.length) % 2
                ? (Math.max(left1, left2) + Math.min(right1, right2)) / 2
                : Math.max(left1, left2);
        }

        if (left1 > right2) {
            // Ignore right side of Partition
            right = p1;
        } else {
            // Ignore left side of Partition
            left = p1 + 1;
        }
    }
};

module.exports = { findMedianSortedArrays, findMedianSortedArraysMN };

console.log(findMedianSortedArrays([1, 3], [2]));
