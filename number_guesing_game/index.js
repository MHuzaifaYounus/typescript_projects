#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNumber;
let running = true;
async function thinking() {
    return new Promise((resolve, reject) => {
        // generating random number 
        randomNumber = Math.round(Math.random() * 99 + 1);
        console.log("Wait Bot is thinking a number... ");
        setTimeout(() => {
            console.log("Bot is ready with his number now you have to guess this number");
            resolve();
        }, 2000);
    });
}
async function main() {
    await thinking();
    for (let index = 9; running; index--) {
        // taking input from user 
        const answers = await inquirer.prompt([
            {
                name: "usernum",
                type: "number",
                message: "Enter a number between 1/100: "
            }
        ]);
        // checking the user input number  with actual number
        if (answers.usernum == randomNumber) {
            console.log("WOW! You", chalk.green("Win"), "The Number Is " + chalk.green(randomNumber));
            console.log(`You Did it in only ${chalk.yellow(10 - index)} chances`);
            running = false;
            break;
        }
        else if (answers.usernum < randomNumber) {
            console.log("Your Number Is ", chalk.blue("Less"), " than the Bot's Number ");
        }
        else if (answers.usernum > randomNumber) {
            console.log("Your Number Is ", chalk.blue("greator"), " than the Bot's Number ");
        }
        else {
            console.log("Please enter the correct Number");
        }
        // checking the remainig chances 
        if (index == 0) {
            console.log(`You ${chalk.red("Loose")}, The Number Is ${chalk.green(randomNumber)}`);
            running = false;
        }
        else {
            console.log(`You have ${chalk.red(index)} chance remaining`);
        }
    }
}
main();
