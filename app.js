import inquirer from 'inquirer';
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 350.76,
        "GBP": 1,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};
// prompt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Please, select your currency",
        choices: ["PKR", "GPB", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "Please, select your conversion rate",
        choices: ["PKR", "GPB", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Please, enter the amount you wish to convert",
    }
]);
//Destructuring user input
const { from, to, amount } = answer;
//performing currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`Your conversion ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
