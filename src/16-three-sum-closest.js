/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    let closest = nums[0] + nums[1] + nums[2];

    // Prepare the result
    if (nums.length > 3) {
        // Sort
        nums.sort((a, b) => a - b);

        // Go through the indexes
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for i
            if (0 !== i && nums[i] === nums[i - 1]) {
                continue;
            }

            // Move 2 pointers closer together
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                // Found a closer match
                if (Math.abs(target - sum) < Math.abs(target - closest)) {
                    closest = sum;
                }
                if (sum === target) {
                    return target;
                }

                if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return closest;
};

module.exports = { threeSumClosest };
