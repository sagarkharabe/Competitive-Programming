/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    const results = new Set();
    
    nums.sort((a,b) => a - b);
    
    for(let i = 0 ; i < n - 2 && nums[i] <= 0; i++) {
        if(i == 0 || nums[i] !== nums[i - 1]) 
            twoSum(nums, i, results)
    }
    
    return [...results];
};

const twoSum = function(nums, i, results) {
    const target = 0 - nums[i];
    let second = i + 1;
    let third = nums.length - 1;
    
    while(second < third) {
        const current = nums[second] + nums[third];
        
        if(current === target) {
            results.add([nums[i], nums[second++], nums[third--]])
        
            while(second < third && nums[second] == nums[second - 1]) second++;
        } else if(current < target) {
            second++;
        } else third--;
    }
}
