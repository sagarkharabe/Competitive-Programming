/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) {
    let maxLength = 0;
    let flags = {}
    
    for(let i = 0 ; i < words.length ; i++) {
        const iStr = words[i];
        const iStrRev = iStr.split('').reverse().join('');
        
        if(iStrRev in flags) {
            maxLength += 4;
            flags[iStrRev]--;
            if(flags[iStrRev] === 0) delete flags[iStrRev];
            continue;
        } 
        
        flags[iStr] = flags[iStr] ? flags[iStr] + 1 : 1;
    }
    
    for(let [key, value] of Object.entries(flags)) {
        
        if(value === 1 && key[0] === key[1]) {
            maxLength += 2;
            break;
        }
    }
    
    return maxLength;
};