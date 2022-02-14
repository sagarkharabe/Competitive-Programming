/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let n = nums.length;
    let evenIdxs = n % 2 ? (n + 1) / 2 : n / 2;
    let evenMap = {};
    let oddMap = {};
    
    for(let i = 0 ; i < n ; i++) {
        if(i % 2) oddMap[nums[i]] = (oddMap[nums[i]] || 0) + 1;
        else evenMap[nums[i]] = (evenMap[nums[i]] || 0) + 1;
    }
    
    let evenEntries = Object.entries(evenMap).sort((a,b) => b[1] - a[1]);
    let oddEntries = Object.entries(oddMap).sort((a,b) => b[1] - a[1]);;
    
    let i = 0, j = 0;
    while(i < evenEntries.length && j < oddEntries.length) {
        const e = evenEntries[i];
        const o = oddEntries[j];
        if(e[0] === o[0]) {
            if(e[1] > o[1]) j++;
            else i++;
        } else return (evenIdxs - e[1]) + (n - evenIdxs - o[1])
    }
    
    return Math.min(evenIdxs, n - evenIdxs)
};
