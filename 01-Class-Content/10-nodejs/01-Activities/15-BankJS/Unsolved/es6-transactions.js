const fs = require('fs');

class Transactions {
    total() {
        fs.readFile("bank.txt","utf8", (err, data) => {
            data = data.split(", ");
            let result = 0;

            for (let i = 0; i < data.length; i++) {
                if (parseFloat(data[i])) {
                  result += parseFloat(data[i])
                }    
            }

            console.log(`You have a total of ${result.toFixed(2)}`)
        });
    }

    deposit(value) {
        fs.appendFile("bank.txt", `, ${value}`,(err) => {
            if (err) console.log(err)
            console.log(`Deposited ${value}.`)   
        });
        
    }

    withdraw() {

    }

    lotto() {

    }
}

module.exports = Transactions;
