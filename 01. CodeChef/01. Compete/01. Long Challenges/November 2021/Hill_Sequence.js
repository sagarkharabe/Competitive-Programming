
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const findLexiLargestSeq = (N, lexo) => {
    let lastProperty;
    
    for(const prop in lexo) {
        if(lexo[prop] > 2) return -1;    
        lastProperty = prop
    }
    
    if(lexo[lastProperty] >= 2) return -1;
    
    const res = [];
    
    for(const prop in lexo) {
        if(lexo[prop] === 2) res.push(prop);    
    }
    
    const lexoArray = Object.keys(lexo);

    for(let i = lexoArray.length - 1 ; i >= 0 ; i-- ) {
        res.push(lexoArray[i]);    
    }
    return res.join(' ')
};

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const N = +(readLine());
        const lexo = {};
        readLine().split(' ').forEach(e => lexo[e] = lexo[e] ? lexo[e] + 1: 1);
        console.log(findLexiLargestSeq(N, lexo));
    }
}
