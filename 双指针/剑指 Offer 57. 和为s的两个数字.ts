function twoSum(nums: number[], target: number): number[] {
    let start = 0, end = nums.length - 1;
    for (; start < end;) {
        if (nums[start] + nums[end] === target) return [nums[start], nums[end]];
        if (nums[start] + nums[end] > target) end--;
        if (nums[start] + nums[end] < target) start++;
    }
    return [0, 0];
};