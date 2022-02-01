/**
 * @param {number[][]} triangle
 * @return {number}
 */

// Top Down Iterative
var minimumTotal = function(triangle) {
    const n = triangle.length;
    let memo = new Array(n);
    
    memo[0] = triangle[0]; // base condition
    
    for(let i = 1; i < triangle.length; i++) {
        const len = i + 1;
        const prevLen = i;
        
        memo[i] = new Array(len).fill(Infinity);
        
        for(let j = 0; j < len; j++) {
            const sameCol = j < prevLen ? triangle[i][j] + memo[i - 1][j] : Infinity;
            const nextCol = (j - 1) >= 0 ? triangle[i][j] + memo[i - 1][j - 1] : Infinity;  
            memo[i][j] = Math.min(sameCol, nextCol);
        }
    }
    
    return Math.min(...memo[n - 1])
};


// Bottom up Recursive
var minimumTotal = function(triangle) {
    const n = triangle.length;
    let memo = new Array(n).fill(-1).map((e,i) => new Array(triangle[i].length).fill(-1));
    let min = Infinity;
    
    let dp = (i = n - 1, j = n - 1) => {
        if(i === 0) return triangle[0][0];
        
        if(memo[i][j] === -1) {
            const sameCol = j < i ? triangle[i][j] + dp(i - 1, j) : Infinity;
            const nextCol = (j - 1) >= 0 ? triangle[i][j] + dp(i - 1,j - 1) : Infinity;  
            memo[i][j] = Math.min(sameCol, nextCol);
        }
        
        return memo[i][j];
    }
    
    for(let j = 0; j < triangle[n - 1].length; j++) {
       min = Math.min(min, dp(n - 1, j));
    }
    
    return min;
};
