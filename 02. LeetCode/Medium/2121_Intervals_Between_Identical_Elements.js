/**
 * @param {number[]} arr
 * @return {number[]}
 */
const getRollingIntervalSum = (indices, index0Sum) => {
    const solution = new Array(indices.length).fill(0);
    solution[0] = index0Sum;
    let currSum = index0Sum;
    let right = indices.length - 1;
    for(let j = 1 ; j < indices.length; j++) {
        currSum -= right * (indices[j] - indices[j - 1]);
        currSum += (indices.length - right) * (indices[j] - indices[j - 1]);
        right--;
        solution[j] = currSum;
    }
    return solution;
}
  

var getDistances = function(arr) {
    
    let result = new Array(arr.length).fill(0);
    let map = {}
    
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] in map)  {
            map[arr[i]].push(i);
            result[map[arr[i]][0]] += i - map[arr[i]][0];
        }
        else map[arr[i]] = [i];
    }
    
    for(const n in map) {
        const list = map[n];
        const solution = getRollingIntervalSum(list, result[list[0]]);
        for(let i = 0 ; i < list.length; i++) {
            result[list[i]] = solution[i]
        }
    }
    
    return result;
};
  
