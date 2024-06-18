/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0 || s.charAt(0) === '0') {
        return 0;
    }

    let dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;



    for (let i = 2; i <= s.length ; i++) {
        if(s.charAt(i-1) !== '0'){
            dp[i] += dp[i-1]
        }

        let twoDigit = parseInt(s.substring(i - 2, i));
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }

    }
    console.log(JSON.stringify(dp))
    return dp[s.length]
};

