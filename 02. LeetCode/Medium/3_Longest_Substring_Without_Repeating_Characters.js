/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    
    const charLastFoundAt = {};
    let longest = [0, 1], start = 0;
    
    for(let i = 0 ; i < s.length; i++) {
        const char = s[i];
        if(char in charLastFoundAt) {
            start = Math.max(charLastFoundAt[char] + 1 , start);
        }
        
        if(i + 1 - start > longest[1] - longest[0]) {
            longest = [start, i + 1];
        }
            
        charLastFoundAt[s[i]] = i;
    }
    
    return longest[1] - longest[0]
};
