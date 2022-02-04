/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // indices range -> 0 to n - 1;
    // numbers range -> 0 to n;
    // use xor property with these
    let missing = nums.length;
    
    for(let i = 0 ; i < nums.length; i++) 
        missing ^= i ^ nums[i];
    return missing;
};


// Gauss formula n(n + 1) / 2
var missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    let actualSum = 0;
    
    for(const num of nums) actualSum += num;
    
    return expectedSum - actualSum;
}
