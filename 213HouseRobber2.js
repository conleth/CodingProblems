/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length <= 3) {
        return Math.max(...nums)
    }

    set1 = robHouses(nums.slice(0, nums.length - 1))
    set2 = robHouses(nums.slice(1))

    return Math.max(set1,set2)

};


function robHouses(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i <= nums.length - 1; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[nums.length - 1]
}
