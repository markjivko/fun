/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    const result = [];

    nums.sort((a, b) => a - b);
    if (nums[0] <= 0) {
        // Last value occurence
        const firsts = [];
        const mapLast = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!mapLast.has(nums[i])) {
                firsts.push(i);
            }

            mapLast.set(nums[i], i);
        }

        // Traverse the first occurences
        for (let i of firsts) {
            // No solution possible from this point
            if (nums[i] > 0) {
                break;
            }

            for (let j = i + 1; j < nums.length - 1; j++) {
                // Skip duplicates for j
                if (i + 1 !== j && nums[j] === nums[j - 1]) {
                    continue;
                }

                // Find the last match w/ hashmap
                const key = -(nums[i] + nums[j]);

                // Append the result
                if (mapLast.has(key) && mapLast.get(key) > j) {
                    result.push([nums[i], nums[j], key]);
                }
            }
        }
    }

    return result;
};

module.exports = { threeSum };
