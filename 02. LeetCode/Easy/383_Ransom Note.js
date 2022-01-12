/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 
var canConstruct = function(ransomNote, magazine) {
    
    if (ransomNote.length > magazine.length)  return false;
    
    const map = new Map();
    
    for(let i = 0 ; i < magazine.length ; i++) { // O(m)
        if(map.has(magazine[i])) map.set(magazine[i], map.get(magazine[i]) + 1);
        else map.set(magazine[i], 1);
    }
    
    for(let i = 0 ; i < ransomNote.length ; i++) { // O(n)
        if(!map.has(ransomNote[i]) || map.get(ransomNote[i]) < 1) return false;
        
        map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }
      
    return true;
    
    // TC: O(m + n) => O(m) since m >= n;
    // SC: O(k) k -> unique chars => O(1) since k can be max 26
};
