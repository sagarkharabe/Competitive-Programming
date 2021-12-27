// Top Down
var maximumScore = function(nums, multipliers) {
    let m = multipliers.length;
    let scores = new Array(m + 1).fill(-1).map(() => new Array(m + 1).fill(-1));

    const dp = (i, left) => {
        if(i >= m) return 0;
        
        if(scores[i][left] === -1) {
            const right = nums.length - 1 - (i - left);
            scores[i][left] = Math.max(multipliers[i] * nums[left] +  dp(i + 1, left + 1),
                                      multipliers[i] * nums[right] + dp(i + 1, left));
        }
        
        return scores[i][left]
    } 

    return dp(0, 0)
};

// Bottom Up
var maximumScore = function(nums, multipliers) {
    let m = multipliers.length;
    let scores = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0));

    for(let i = m - 1 ; i >= 0 ; i--) {
        for(let left = i; left >=0 ; left--) {
            const right = nums.length - 1 - (i - left);
            scores[i][left] = Math.max(multipliers[i] * nums[left] +  scores[i + 1][left + 1],
                                      multipliers[i] * nums[right] + scores[i + 1][left]);
        }
    }
    
    return scores[0][0]
};
