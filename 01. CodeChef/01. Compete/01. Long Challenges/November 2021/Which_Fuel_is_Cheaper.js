process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

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

function getMaxLessThanK(X, Y, A, B, K) {
    const XatK = X + K * A;
    const YatB = Y + K * B;
    
    if(XatK > YatB) return 'DIESEL';
    else if (YatB > XatK) return "PETROL";
    return "SAME PRICE"
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [X, Y, A, B, K] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(X, Y, A, B, K));
    }
}
