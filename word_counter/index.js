#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let removingIndex = [];
let input = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter your Sentence: "
});
let words = input.sentence.trim().split(' ');
console.log(`You used ${chalk.green(words.length)} words in your sentence.`);
