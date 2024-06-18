/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: empty string can always be segmented

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // If dp[j] is true and the substring from j to i is in wordDict, set dp[i] to true
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check further if dp[i] is already true
            }
        }
    }

    return dp[s.length]; // The result for the entire string is at dp[s.length]
};


