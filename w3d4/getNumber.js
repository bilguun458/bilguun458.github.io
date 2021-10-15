const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getNumber = (sum) => {
    readline.question('Enter number of sum or type quit to see result: ', num => {
        if (num == 'stop') {
            console.log("The sum of the numbers that you entered:", sum);
            readline.close();
        } else {
            num = parseInt(num, 10);
            getNumber(isNaN(num) ? sum : sum + num);
        }
    });
};

getNumber(0);
