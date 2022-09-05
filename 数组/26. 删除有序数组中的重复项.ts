function removeDuplicates(nums: number[]): number {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count]) {
            nums[++count] = nums[i];
        }
    }
    return ++count;
};