/**
 * 这是中等？
 */
function maxSubArray(nums: number[]): number {
    let dp = [...nums], result = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] += Math.max(dp[i - 1], 0);
        result = Math.max(result, dp[i])
    }
    return result;
};