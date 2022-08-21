function majorityElement(nums: number[]): number {
    const sorted_arr = nums.sort();
    return sorted_arr[Math.floor(nums.length / 2)];
};