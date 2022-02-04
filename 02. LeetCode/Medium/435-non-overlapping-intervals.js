/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    
    let count = 0;
    let current = intervals[0];
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < current[1]) count++;
        else current = intervals[i];
    }
    
    return count;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
/**
the greedy solution (sort by start points) here is my version: if two intervals are overlapping, we want to remove the interval that has the longer end point -- 
the longer interval will always overlap with more or the same number of future intervals compared to the shorter one
*/
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let count = 0;
    let current = intervals[0];
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < current[1]) {
          count++;
          current = intervals[i][1] < current[1] ? intervals[i] : current;
        }  
        else current = intervals[i];
    }
    
    return count;
};
