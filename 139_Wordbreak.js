/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: empty string can be segmented

    console.log("Initial DP array:", dp);

    for (let i = 1; i <= s.length; i++) {
        console.log("\nChecking for i =", i);

        for (let j = 0; j < i; j++) {
            let substr = s.substring(j, i);
            console.log("   Substring from " + j + " to " + i + ":", substr);

            if (dp[j] && wordDict.includes(substr)) {
                dp[i] = true;
                console.log("   Found a match! Updated DP array:", dp);
                break; // Found a valid segmentation, no need to check further for this i
            }
        }
    }

    console.log("\nFinal DP array:", dp);
    return dp[s.length];
};

