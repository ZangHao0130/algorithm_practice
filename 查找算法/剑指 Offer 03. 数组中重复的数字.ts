function findRepeatNumber(nums: number[]): number {
    const tempObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (tempObj[nums[i]])
            return nums[i];
        tempObj[nums[i]] = true;
    }
    return 0;
};