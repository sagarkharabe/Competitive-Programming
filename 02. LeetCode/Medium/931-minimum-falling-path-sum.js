/**
 * @param {number[][]} matrix
 * @return {number}
 */

/** Top Down */ 
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const dp = new Array(n).fill(-1).map(() => new Array(n).fill(Infinity));
    
    for(let j = 0 ; j < n ; j++) {
        dp[0][j] = matrix[0][j]; // base condition
    }
    
    for(let i = 1; i < n ; i++) {
        for(let j = 0; j < n; j++) {
            const up = matrix[i][j] + dp[i - 1][j];
            
            const leftDiag = (j - 1) >= 0 ? matrix[i][j] + dp[i - 1][j - 1] : dp[i][j]; // check bounds
            
            const rightDiag = (j + 1) < n ? matrix[i][j] + dp[i - 1][j + 1] : dp[i][j]; // check bounds
            
            dp[i][j] = Math.min(up, leftDiag, rightDiag);
        }
    }
    
    return Math.min(...dp[n - 1])
};

/** Bottom Up*/
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const memo = new Array(n).fill(-1).map(() => new Array(n).fill(-1));
    let min = Infinity;
    
    const dp = (i = n - 1, j = n - 1) => {

        if(i === 0) return matrix[i][j];
        
        if(memo[i][j] === -1) {
            const up = matrix[i][j] + dp(i - 1, j);
            
            const leftDiag = (j - 1) >= 0 ? matrix[i][j] + dp(i - 1,j - 1) : 10000;
            
            const rightDiag = (j + 1) < n ? matrix[i][j] + dp(i - 1,j + 1) : 10000;
            
            memo[i][j] = Math.min(up, leftDiag, rightDiag);
        }
        
        return memo[i][j];
    }
    
    for(let j = 0 ; j < n; j++) {
        min = Math.min(min, dp(n - 1, j));  
    }
    
    return min;
};
