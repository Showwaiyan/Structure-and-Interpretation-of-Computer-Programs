function countWay(amount,coin) {
    //base case
    if (amount === 0) return 1;
    if (amount < 0) return 0;
    if (coin.length === 0) return 0;

    return countWay(amount-coin[0],coin)+countWay(amount,coin.slice(1));
}

const coin = [50,25,10,5,1];
const amount = 50
console.log(countWay(amount,coin));
