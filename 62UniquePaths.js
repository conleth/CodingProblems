/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     let dp = new Array(m + 1).fill().map(() => new Array(n +1).fill(1))


//     for(let i = 1; i <= m; i++){
//         for(let j = 1; j <= n; j++){
//             dp[i][j] = dp[i][j-1] + dp[i-1][j]
//         }
//     }

//     return dp[m-1][n-1]
// };

var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1); // Only need the previous row/column

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[col] += dp[col - 1];
        }
    }

    return dp[n - 1];
};
