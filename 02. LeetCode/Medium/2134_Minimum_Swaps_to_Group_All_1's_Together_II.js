/**
 * @param {number[]} nums
 * @return {number}
 */
 var minSwaps = function(nums) {
    let numberOfOnes = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] == 1)
        numberOfOnes++;
    }

    let x = numberOfOnes;

    let count_ones = 0, maxOnes;

    for(let i = 0; i < x; i++){
        if(nums[i] == 1)
        count_ones++;
    }

    maxOnes = count_ones;

    // using sliding window technique to find
    // max number of ones in subnumsay of length x
    for (let i = 1; i <= n; i++) {

        // first remove leading element and check
        // if it is equal to 1 then decrement the
        // value of count_ones by 1
        if (nums[i - 1] == 1)
            count_ones--;

        // Now add trailing element and check
        // if it is equal to 1 Then increment
        // the value of count_ones by 1
        if(nums[(i + x - 1) % n] == 1)
            count_ones++;

        if (maxOnes < count_ones)
            maxOnes = count_ones;
    }

    // calculate number of zeros in subnumsay
    // of length x with maximum number of 1's
    let numberOfZeroes = x - maxOnes;

    return numberOfZeroes;
};