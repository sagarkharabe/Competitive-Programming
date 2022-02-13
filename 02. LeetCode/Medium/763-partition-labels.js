/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = {};
    const n = s.length;
    for(let i = 0 ; i < n; i++) map[s[i]] = i
    
    let start = 0, i = 0, end = map[s[start]];
    const result = [];
    while(start < n) {
        if(i === end || i >= n) {
            result.push(end - start + 1);
            start = end + 1;
            end = map[s[start]];
            i = start;
            continue;
        } else if(map[s[i]] > end){
            end = map[s[i]];
        } 
        i++;
    }
    
    return result;
};
