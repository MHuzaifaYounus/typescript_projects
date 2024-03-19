#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Select one of the operators to perform action", type: "list", name: "operator", choices: ["+", "-", "*", "/", "**", "%"] },
    { message: "Enter second number", type: "number", name: "secondnumber" },
]);
if (isNaN(answer.firstnumber || answer.secondnumber)) {
    console.log(chalk.red("PLz Enter the Valid Number"));
}
else if (answer.operator === "+") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} + ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber + answer.secondnumber}`));
}
else if (answer.operator === "-") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} - ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber - answer.secondnumber}`));
}
else if (answer.operator === "*") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} * ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber * answer.secondnumber}`));
}
else if (answer.operator === "/") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} / ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber / answer.secondnumber}`));
}
else if (answer.operator === "**") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} ** ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber ** answer.secondnumber}`));
}
else if (answer.operator === "%") {
    console.log(chalk.blue(`Answer : ${answer.firstnumber} % ${answer.secondnumber}  = `), chalk.green(`${answer.firstnumber % answer.secondnumber}`));
}
else {
    console.log(chalk.red("Please select valid operator"));
}
