var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0);
    dp[0]= 1
    for(let i=1 ; i<= target; i++){
        for(let num of nums){
            if (i >= num) {
            dp[i] += dp[i - num]
            }
        }
    }
    // console.log(JSON.stringify(dp))
   return dp[target]
};
