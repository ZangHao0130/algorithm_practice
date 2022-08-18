function missingNumber(nums: number[]): number {
    let left = 0, right = nums.length - 1, middle = 0;
    while (left <= right) {
        middle = (left + right) >> 1;
        if (nums[middle] === middle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return left;
};