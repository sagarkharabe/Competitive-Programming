/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const sorted = nums.sort();
    
    let single = sorted[0];
  
    if(sorted[sorted.length - 1] !== sorted[sorted.length - 2]) return sorted[sorted.length - 1];
  
    for(let i = 1 ; i < sorted.length - 1; i += 2){
        if(sorted[i] !== sorted[i-1]) {
            single = sorted[i-1];
            break;
        }

    }
    return single;
};
