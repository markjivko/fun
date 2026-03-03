/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const pairs = {};
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];

        // Store pair number -> current index
        if ("undefined" === typeof pairs[diff]) {
            pairs[diff] = index;
        }

        // Pair found (not self)
        if ("undefined" !== typeof pairs[nums[index]] && pairs[nums[index]] !== index) {
            return [pairs[nums[index]], index];
        }
    }
};

module.exports = { twoSum };
