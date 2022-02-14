/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    
    for(let i = 0 ; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if(sorted in hash) hash[sorted].push(strs[i]);
        else hash[sorted] = [strs[i]]
    }
    
    return Object.values(hash)
};

var groupAnagrams = function(strs) {
    let hash = {};
    const count = new Array(26);
    for(let i = 0 ; i < strs.length; i++) {
        count.fill(0);
        for(let char of strs[i]) count[char.charCodeAt() - 97]++;
        let sc = '';
        for(let i = 0 ; i < 26; i++) 
            sc += count[i] + '#';
        if(sc in hash) hash[sc].push(strs[i]);
        else hash[sc] = [strs[i]];
    }
    
    return Object.values(hash)
};
