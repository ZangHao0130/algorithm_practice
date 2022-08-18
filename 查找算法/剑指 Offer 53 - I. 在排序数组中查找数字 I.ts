function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, middle = 0, result = 0;
    while (left < right) {
        middle = (left + right) >> 1;
        if (nums[middle] < target){
            left = middle + 1;
        }
        if (nums[middle] >= target) {
            right = middle;
        }
    }
    // 肯定在left
    while(left < nums.length && nums[left++] === target){
        result++;
    }
    return result;
};