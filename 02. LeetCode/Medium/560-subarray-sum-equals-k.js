/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
 var subarraySum = function(nums, k) {
    let map = new Map();
    
    let count = 0, sum = 0;
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i]
        if(sum === k) count++;
        if(map.has(sum - k)) 
            count += map.get(sum - k);
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1) 
    }
    
    return count;
};

var subarraySum = function(nums, k) {
    let map = new Map();
    
    map.set(0,1) // for sum - k == 0 or sum == k
    let count = 0, sum = 0;
    for(let i = 0 ; i < nums.length; i++) {
        sum += nums[i]
        if(map.has(sum - k)) 
            count += map.get(sum - k);
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1) 
    }
    
    return count;
};
