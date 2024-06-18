/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // dp = new Array(text1.length).fill(0)
    let dp = new Array(text1.length + 1).fill().map(() => new Array(text2.length +1).fill(0))

    for(let i=1; i<= text1.length; i++){
        for(let j=1; j<= text2.length; j++){
            // Check if characters match
            if(text1[i - 1] === text2[j - 1]) {
                // Update DP value for match
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Update DP value for no match
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // return dp[text.length] > amount ? -1 : dp[amount]
    return dp[text1.length][text2.length]
};


var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length).map(() => (new Array(text2.length))).fill("z")

    console.log(JSON.stringify(dp))
};





