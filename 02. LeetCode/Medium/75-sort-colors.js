/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    const hash = {0: 0, 1: 0, 2: 0};
    
    for(let i = 0 ; i < nums.length; i++) {
        hash[nums[i]]++;
    }
    
    let current = 0;
    for(let [key, value] of Object.entries(hash)) {
        nums.splice(current, value, ...new Array(value).fill(Number(key)));
        current += value;
    };
};

/** Dutch National Flag*/

var sortColors = function(nums) {
    let p0 = 0, current = 0, p2 = nums.length - 1; // p0 -> rightmost 0's boundary, p2 -> leftmost 2's boundary
    
    while(current <= p2) {
        if(nums[current] === 0) {
            [nums[current], nums[p0]] = [nums[p0], nums[current]];
            current++; p0++;
        } else if(nums[current] === 2) {
            [nums[current], nums[p2]] = [nums[p2], nums[current]];
            p2--;
        } else current++;
    }
};
