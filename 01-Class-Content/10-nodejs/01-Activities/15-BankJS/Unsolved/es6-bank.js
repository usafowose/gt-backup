const fs = require('fs');
const Transactions = require('./es6-transactions');

const transact = new Transactions();

// Array deconstruction..
// const action = process.argv[2]
// const value = process.argv[3]
const [, ,action, value] = process.argv;

switch(action) {
    case "total":
        transact.total();
    break;
    case "deposit":
       transact.deposit(value);
    break;
    case "withdrawal":
        total();
    break;
    case "lotto":
        lotto();
    break;
}
