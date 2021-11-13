'use strict';

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

const canDistribute = (X, Y) => {
    if(X === 0 && Y % 2 === 0) return "YES";
    if(X === 0 && Y % 2 === 1) return "NO";
    if((X + 2 * Y) % 2 === 0) return "YES"
    
    return "NO"

}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [X, Y] = readLine().split(' ').map(Number);
        
        console.log(canDistribute(X, Y));
    }
}
