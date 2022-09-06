/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k % nums.length - 1);
    reverse(nums, k % nums.length, nums.length - 1);
};
const reverse = (nums: number[], start: number, end: number) => {
    for (; start < end; start++, end--) {
        nums[start] = nums[start] + nums[end] - (nums[end] = nums[start]);
    }
}