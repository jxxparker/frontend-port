// Coding Challenge # 2

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15:
    bill * 0.2;
}

// const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip);