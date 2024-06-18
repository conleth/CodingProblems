/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     var max = 0; 
//     if(nums.length === 0){
//         return 0 ;
//     }
//     var arr = new Array(nums.length);
//     arr.fill(1, 0, nums.length)
//     for(let i = 0; i < nums.length; i++)
//     {
//         for(var j=0; j <= i; j++)
//         {
//             if(nums[j] < nums[i])
//             {
//                 arr[i] = Math.max(arr[i], arr[j] + 1);
//             }
//         }
//         max = Math.max(arr[i],max) ;
//     }
    
//     return max;
// };







var lengthOfLIS = function(nums) {
    dp = new Array(nums.length+1).fill(1) ;
    let max = 0 ;
    for(let i=1; i<= nums.length; i++){
        for(let j= 0; j <= i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    // console.log(JSON.stringify(dp))
    return Math.max(...dp)
};
