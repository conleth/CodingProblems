/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) {
        return 0
    }

    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]
    dp[1] = Math.max(nums[1], nums[0])

    for (let i = 2; i <= nums.length - 1; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i-1])
    }

    return dp[nums.length - 1]
};
