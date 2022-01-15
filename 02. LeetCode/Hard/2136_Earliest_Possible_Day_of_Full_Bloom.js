/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const times = new Array(plantTime.length);
    
    for(let i = 0 ; i < plantTime.length; i++) {
        times[i] = [plantTime[i], growTime[i]];
    }  
    
    times.sort((a,b) => b[1] - a[1]);
    
    let pTime = 0;
    let maxTime = 0;
    
    for(let i = 0 ; i < times.length; i++) {
        pTime += times[i][0];
        maxTime = Math.max(maxTime, pTime + times[i][1])
    }
    
    return maxTime;
};
