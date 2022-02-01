/**
 * @param {number[][]} matrix
 * @return {number}
 */
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
