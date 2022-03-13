/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
	//if size is one we can remove one element and insert one element only when k is even
    if(nums.length === 1) return k % 2 === 0 ? nums[0] : -1;
    
	//if no or one moves given kth element is max element
    if(k <= 1) return nums[k];
    
    const n = nums.length;
    let i = 0;
    let max = nums[0];
	
	// Remove top k-1 (or all) elements and find max out of them
    while(i < n && i < k - 1) {
        max = Math.max(max, nums[i]);
        i++;
    }
    
    let ans = 0;
    //We choose best from two options 
    //either remove k elements (k+1th is maxm) or remove k-1 elements then insert maxm element (maxm element lies in [0,k-1])
    if(k < n) ans = nums[k];
    
    return Math.max(max, ans);
};
