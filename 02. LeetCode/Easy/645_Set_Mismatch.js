/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dublicate = 0;
    let missing = 0;
    const ideal = new Array(nums.length + 1);
    ideal.fill(0);
    
    for(let i = 0 ; i < nums.length ; i++) {
        ideal[nums[i]] += 1;
    }
        
    for(let i = 0 ; i < ideal.length; i++) { 
        if(ideal[i] === 0) missing = i;
        else if(ideal[i] === 2) dublicate = i;
    }    
    
    return [dublicate,missing]
    
};
