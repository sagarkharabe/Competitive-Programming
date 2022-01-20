/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 1) return 1;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    let rooms = [intervals[0][1]];
    
    for(let i = 1 ; i < intervals.length; i++) {
        let idx = rooms.findIndex(e => e <= intervals[i][0]);
        if(idx >= 0) rooms[idx] = intervals[i][1];
        else rooms.push(intervals[i][1]);
    }
    
    return rooms.length;
};
