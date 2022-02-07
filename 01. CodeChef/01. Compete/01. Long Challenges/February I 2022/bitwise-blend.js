process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let currentLine = 0;
let input = '';

process.stdin.on('data', data => input += data);
process.stdin.on('end', () => {
	input = input.split('\n');
	main();
});

const readLine = () => {
	return input[currentLine++];
};

const solve = (n, arr) => {
    
    let first_index = [], second_index = [], 
        not_going_to_alter_indexes1 = [], not_going_to_alter_indexes2 = [];
        
    for(let k = 0; k < n; k++) {
        if(k%2 === 0 && arr[k] === 0){}
        else if(k%2 === 1 && arr[k] === 1) not_going_to_alter_indexes1.push(k);
        else first_index.push(k);
    }
    
    for(let k = 0; k < n; k++) {
        if(k%2 === 1 && arr[k] === 0){}
        else if(k%2 === 0 && arr[k] === 1) not_going_to_alter_indexes2.push(k);
        else second_index.push(k);
    }
    
    let ans = [];
    if(first_index.length < second_index.length) {
        for(let i = 0 ; i < first_index.length; i++) {
            if(not_going_to_alter_indexes1.length === 0) {
                console.log(-1);
                return;
            } else {
                ans.push(first_index[i] + 1);
                ans.push(not_going_to_alter_indexes1[0] + 1);
            }
        }
    } else {
        for(let i = 0 ; i < second_index.length; i++) {
            if(not_going_to_alter_indexes2.length === 0) {
                console.log(-1);
                return;
            } else {
                ans.push(second_index[i] + 1);
                ans.push(not_going_to_alter_indexes2[0] + 1);
            }
        }
    }
    
    console.log(parseInt(ans.length / 2));
    for(let l = 0 ; l < ans.length; l += 2) 
        console.log(ans[l] + ' ' + ans[l + 1]);
    
};

const main = () => {
	let t = +(readLine());
	while (t--) {
		const n = +(readLine());
		const arr = readLine().split(' ').map(e => parseInt(e) % 2);
		solve(n, arr);
	}
};
