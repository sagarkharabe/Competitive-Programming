/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    
    for(let i = 0; i < 32; i++) {
        let count = 0;
        for(const num of nums) {
            count += (num >> i) & 1;
        }
        if(count % 3 === 1) ans += 1 << i;
    }
    
    return ans;
};
