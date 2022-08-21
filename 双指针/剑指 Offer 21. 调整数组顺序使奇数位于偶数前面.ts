function exchange(nums: number[]): number[] {
    let start = 0, end = nums.length - 1;
    for (; start < end;) {
        while (nums[start] % 2 && start < nums.length) start++;
        while (!(nums[end] % 2) && end >= 0) end--;
        if (start >= end) break;
        nums[start] = nums[start] + nums[end] - (nums[end] = nums[start]);
    }
    return nums;
};