function hammingWeight(n: number): number {
    let res = 0;
    while (n) {
        res += n % 2 ? 1 : 0;
        n = Math.floor(n / 2);
    }
    return res;
}