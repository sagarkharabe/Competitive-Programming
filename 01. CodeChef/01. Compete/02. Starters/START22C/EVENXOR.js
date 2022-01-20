process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let input = '';
process.stdin.on('data', (data) => input += data);
process.stdin.on('end', () => {
    input = input.split('\n');
    main();
})

let current = 0;
const readLine = () => input[current++];

const main = () => {
    const size = 1e3 + 1
    const result = new Array(size);
    let current = 1;
        
    for(let i = 0 ; i < 1001 ; i++) {
        while(current.toString(2).match(/1/g).length % 2 !== 0) current++;
        result[i] = current++;
    }
        
    let t = +(readLine());
    while(t--){
        const N = +(readLine());
        console.log(result.slice(0, N).join(' '));
    }
}