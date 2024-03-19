#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let leap = 4;
let answer = await inquirer.prompt([{
        name: "year",
        type: "number",
        message: ("Enter the year: ")
    }]);
let n = answer.year % leap;
if (n == 0) {
    console.log(chalk.green(`${answer.year}`), ` is the Leap Year`);
}
else {
    console.log(chalk.red(`${answer.year}`), ` is not the Leap Year`);
}
