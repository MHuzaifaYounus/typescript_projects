#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function back() {
    let back = await inquirer.prompt({
        name: "back",
        type: "list",
        choices: [chalk.red("Back")]
    });
}
async function main() {
    let list = [];
    let running = true;
    while (running) {
        let main = await inquirer.prompt([
            {
                name: "mainopt",
                type: "list",
                message: chalk.blue("What you want to do: "),
                choices: ["Add ToDo", "Check List", "Edit List", chalk.red("Exit")]
            },
        ]);
        if (main.mainopt == "Add ToDo") {
            let adding = true;
            while (adding) {
                let input = await inquirer.prompt([
                    {
                        type: "input",
                        message: chalk.yellow("Write something that you want to do: "),
                        name: "todo"
                    },
                    {
                        type: "confirm",
                        message: "Do you want to add more: ",
                        name: "conforming",
                        default: true
                    }
                ]);
                list.push(input.todo);
                if (input.conforming == false) {
                    adding = false;
                }
            }
        }
        else if (main.mainopt == "Check List") {
            if (list.length > 0) {
                console.log(`${chalk.green("Your ToDo List:")}`);
                for (let index = 1; index < list.length + 1; index++) {
                    console.log(`${chalk.blue(index)}- ${list[index - 1]}`);
                }
                await back();
            }
            else {
                console.log(`${chalk.red("Your list is empty")}`);
                await back();
            }
        }
        else if (main.mainopt == chalk.red("Exit")) {
            running = false;
        }
        else if (main.mainopt == "Edit List") {
            let editing = true;
            while (editing) {
                let edit = await inquirer.prompt({
                    name: "editopt",
                    type: "list",
                    message: chalk.blue("What would you like to do: "),
                    choices: ["Edit Item", "Delete Item", chalk.red("Back")]
                });
                if (edit.editopt == "Edit Item") {
                    if (list.length > 0) {
                        let editItem = await inquirer.prompt({
                            name: "item",
                            type: "list",
                            message: chalk.blue("Which one you would like to edit: "),
                            choices: list
                        });
                        for (let index = 0; index < list.length; index++) {
                            if (editItem.item == list[index]) {
                                let newitem = await inquirer.prompt({
                                    name: "item",
                                    type: "input",
                                    message: chalk.yellow("Write the new one: "),
                                });
                                list[index] = newitem.item;
                                console.log(`${chalk.green("successfully changed")}`);
                                await back();
                                break;
                            }
                        }
                    }
                    else {
                        console.log(`${chalk.red("Your lis is empty")}`);
                        await back();
                    }
                }
                else if (edit.editopt == "Delete Item") {
                    if (list.length > 0) {
                        let del = await inquirer.prompt({
                            name: "item",
                            type: "list",
                            message: chalk.blue("Which one you would like to delete"),
                            choices: list
                        });
                        for (let index = 0; index < list.length; index++) {
                            if (del.item == list[index]) {
                                list.splice(index, 1);
                                console.log(`${chalk.green("successfully Deleted")}`);
                                await back();
                            }
                        }
                    }
                    else {
                        console.log(`${chalk.red("Your lis is empty")}`);
                        await back();
                    }
                }
                else if (edit.editopt == chalk.red("Back")) {
                    editing = false;
                }
            }
        }
    }
}
main();
