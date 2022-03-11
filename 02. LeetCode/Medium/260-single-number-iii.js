/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0, x = 0, y = 0;
    
    for(const num of nums) xor ^= num; // x ^ y
    
    const b = xor ^ (xor & (xor - 1)); 
    
    for(const num of nums) {
        if((num & b) === 0) x ^= num;
        else y ^= num;
    }
    
    return [x, y];
};
