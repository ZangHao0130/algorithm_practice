/**
 * 状态转移方程dp[i] = math.max(dp[i-1], price[i] - min[i])
 * dp[i]代表在第i天卖出可得最大利润, min[i]代表前i天最低买入价格
 */
function maxProfit(prices: number[]): number {
    if (!prices.length) return 0;
    let minPrice = prices[0], dp = Array(prices.length).fill(0);
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return dp.pop();
};

/**
 * 空间复杂度O(1)
 */
// function maxProfit(prices: number[]): number {
//     let minPrice = prices[0], res = 0;
//     for (let i = 1; i < prices.length; i++) {
//         res = Math.max(res, prices[i] - minPrice);
//         minPrice = Math.min(minPrice, prices[i]);
//     }
//     return res;
// };