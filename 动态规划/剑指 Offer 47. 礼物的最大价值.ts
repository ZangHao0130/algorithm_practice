function maxValue(grid: number[][]): number {
    const dp = grid;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (!i) {
                dp[i][j] += !j ? 0 : dp[i][j - 1];;
            } else {
                dp[i][j] += Math.max(dp[i - 1][j], j ? dp[i][j - 1] : 0);
            }
        }
    }
    return dp[dp.length - 1].pop()!;
};