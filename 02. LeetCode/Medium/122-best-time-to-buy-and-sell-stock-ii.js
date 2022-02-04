/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = [0]; // base condition
    
    for(let i = 1; i < prices.length; i++) {
        profits[i] = profits[i - 1] + Math.max(0, prices[i] - prices[i - 1]) // either prev profits or prev profits + current profit
    }
    
    return profits.pop()
};
