/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;
    
    const s1map = new Array(26).fill(0);
    const s2map = new Array(26).fill(0);
    
    for(let i = 0 ; i < s1.length ; i++) {
        s1map[s1.charCodeAt(i) - 97]++;
        s2map[s2.charCodeAt(i) - 97]++;
    }
    
    if(matches(s1map, s2map)) return true;
    
    for(let i = 1 ; i <= s2.length - s1.length; i++) {
        s2map[s2.charCodeAt(i - 1) - 97]--;
        s2map[s2.charCodeAt(i + s1.length - 1) - 97]++;
        if(matches(s1map, s2map)) return true;
    }
    
    return false;
};
    
var matches = (map1, map2) => {
    for(let i = 0 ; i < 26; i++) {
        if(map1[i] !== map2[i]) return false;
    }
    return true;
}
