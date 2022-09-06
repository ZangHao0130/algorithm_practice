function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map();
    nums.forEach((num, index) => {
        numsMap.set(num, index);
    })

    for (let i = 0; i < nums.length; i++) {
        const data = numsMap.get(target - nums[i]);
        if (data && i !== data) {
            return [i, numsMap.get(target - nums[i])];
        }
    }
    return [];
};