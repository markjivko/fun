/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target = 0) => {
    const result = [];
    nums.sort((a, b) => a - b);

    // Last value occurence
    const mapLast = new Map();
    for (let i = 0; i < nums.length; i++) {
        mapLast.set(nums[i], i);
    }

    // Traverse the first occurences
    for (let i = 0; i < nums.length - 3; i++) {
        // Skip duplicates for i
        if (0 !== i && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicates for j
            if (i + 1 !== j && nums[j] === nums[j - 1]) {
                continue;
            }

            for (let k = j + 1; k < nums.length - 1; k++) {
                // Skip duplicates for k
                if (j + 1 !== k && nums[k] === nums[k - 1]) {
                    continue;
                }

                // Find the last match w/ hashmap
                const key = target - (nums[i] + nums[j] + nums[k]);

                // Append the result
                if (mapLast.has(key) && mapLast.get(key) > k) {
                    result.push([nums[i], nums[j], nums[k], key]);
                }
            }
        }
    }

    return result;
};

module.exports = { fourSum };

// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
