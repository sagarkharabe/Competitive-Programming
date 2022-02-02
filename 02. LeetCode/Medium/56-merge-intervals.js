/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++) {
        const lastEnd = result[result.length - 1][1];
        if(intervals[i][0] <= lastEnd){
            result[result.length - 1][1] = Math.max(intervals[i][1], lastEnd)
        } else result.push(intervals[i]);
    }
    
    return result;
};
