
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

const findMinOperations = (A) => {
    let c = 0;
    for(let i = 0 ; i < A.length; i++) {
        if(A[i] % 2 === 1) c++;
    }
    return c % 2 === 1 ? (c - 1) / 2 : c / 2;
}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const N = +(readLine());
        const arr = readLine().split(' ').map(Number);
        console.log(findMinOperations(arr));
    }
}
