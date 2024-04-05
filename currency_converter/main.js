#! /usr/bin/env node
import inquirer from "inquirer";
import color from "chalk";
let currency = {
    USD: 1,
    EUR: 0.92,
    PKR: 278,
    IND: 83.28,
    JPY: 151.61,
};
let running = true;
let currencyList = Object.keys(currency);
while (running) {
    let input = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: `Select the currency you want to converted ${color.green("From")}:`,
            choices: currencyList
        },
        {
            name: "to",
            type: "list",
            message: `Select the currency you want to converted ${color.green("Into")}:`,
            choices: currencyList
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount:"
        }
    ]);
    let fromAmount = currency[input.from];
    let toAmount = currency[input.to];
    let baseAmount = input.amount / fromAmount;
    let convertedAmount = Math.floor(baseAmount * toAmount * 100) / 100;
    console.log(`${color.cyan(input.amount)} ${input.from} = ${color.green(convertedAmount)} ${input.to} `);
    let exit = await inquirer.prompt({
        name: "input",
        type: "confirm",
        message: `Do You Want To ${color.red("Try Again")}: `
    });
    if (exit.input == false) {
        running = false;
    }
}
