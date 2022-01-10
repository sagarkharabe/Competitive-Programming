/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    for(let i = 0 ; i < grid.length ; i++) {
        for(let j = 0 ; j < grid[i].length; j++) {
            if(grid[i][j]) {
                maxArea = Math.max(dfs(grid, i, j), maxArea)
            }
        }
    }

    return maxArea;
};

const dfs = (grid, i , j) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || !grid[i][j]) return 0;
    
    grid[i][j] = 0;
    
    return (1 + dfs(grid, i - 1, j) + dfs(grid, i, j - 1) + dfs(grid, i + 1, j) + dfs(grid, i, j + 1))
}
