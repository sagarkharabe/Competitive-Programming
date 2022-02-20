class NumMatrix {
    prefixSum: number[][];
    constructor(matrix: number[][]) {
        this.prefixSum = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
        for(let i = 0 ; i < matrix.length; i++) {
            for(let j = 0 ; j < matrix[0].length; j++) {
                const pi = j - 1 >= 0 ? this.prefixSum[i][j - 1] : 0;
                const pj = i - 1 >= 0 ? this.prefixSum[i - 1][j] : 0;
                const pij = i - 1 >= 0 && j - 1 >= 0 ? this.prefixSum[i - 1][j - 1] : 0;
                this.prefixSum[i][j] = matrix[i][j] + pi + pj - pij; 
            }
        }
    }

    sumRegion(sx: number, sy: number, ex: number, ey: number): number {
            const si = sy - 1 >= 0 ? this.prefixSum[ex][sy - 1] : 0;
            const sj = sx - 1 >= 0 ? this.prefixSum[sx - 1][ey] : 0;
            const sij = sx - 1 >= 0 && sy - 1 >= 0 ? this.prefixSum[sx - 1][sy - 1] : 0;
            return this.prefixSum[ex][ey] - sj - si + sij;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
