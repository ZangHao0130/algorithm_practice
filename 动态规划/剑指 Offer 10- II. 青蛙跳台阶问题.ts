function numWays(n: number): number {
    const result = [1, 1, 2];
    for (let i = 2; i < n; i++) {
        result[0] = result[1];
        result[1] = result[2];
        result[2] = (result[0] + result[1]) % 1000000007;
    }
    return n < 2 ? result[n] : result[2];
};