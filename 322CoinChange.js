// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function (coins, amount) {
//     // Initialize DP array with amount+1 (a value larger than any possible solution)
//     dp = new Array(amount+1).fill(amount+1)
//     dp[0] = 0
//     for(let i=1; i<= amount; i++){
//         for(coin of coins){
//             if(coin <= i){
//                 dp[i] = Math.min(dp[i], dp[i -coin] +1)
//                 // dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//             }
//         }
//     }
//     // console.log(JSON.stringify(dp));
//     return dp[amount] > amount ? -1 : dp[amount];
//     // dp[amount] > amount ? -1 : dp[amount];
// }




/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if(amount === 0){
        return 0 ;
    }

    dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0

    for(let i = 1; i <= amount ; i++){
        for(coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i], dp[i- coin] +1 )
            }
        }
    }

    console.log(JSON.stringify(dp))
    return dp[amount] > amount ? -1 : dp[amount];
}








