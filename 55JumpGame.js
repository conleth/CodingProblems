/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    let maxReach = 0;
    console.log(`target ${nums.length-1}`)
    for (let i = 0; i < nums.length; i++) {
        console.log(`index ${i} value: ${nums[i]}`)
        if (i > maxReach) {
            // If the current position is beyond the maximum reach, you cannot proceed further.
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        console.log(maxReach)
        if (maxReach >= nums.length - 1) {
            // If the maximum reach is beyond or equal to the last index, you can reach the end.
            return true;
        }
    }
    // return maxReach >= nums.length - 1;
};

