import inquirer from "inquirer";
import chalk from "chalk";
let balance = 10000;
let pin = 1234;
// back button function 
async function backInput() {
    let backinput = await inquirer.prompt({
        name: chalk.red("Back"),
        type: "list",
        choices: ["Yes"]
    });
    return backinput;
}
async function main() {
    // taking pin from user 
    let answeredPin = await inquirer.prompt({
        name: "pin",
        type: "number",
        message: "Enter Your Pin: "
    });
    //checking if pin is correct 
    if (answeredPin.pin === pin) {
        console.log(chalk.green("Correct Pin Code!!"));
        // taking other options input 
        for (let index = 1; index == 1;) {
            let answeredOption = await inquirer.prompt({
                name: "options",
                type: "list",
                message: "What you want to do: ",
                choices: [chalk.blue("Withdraw"), chalk.blue("Check Balance"), chalk.red("Exit")]
            });
            // if select withdraw 
            if (answeredOption.options === chalk.blue("Withdraw")) {
                // Fast Withdraw 
                let amountoptions = await inquirer.prompt({
                    name: "amount",
                    type: "list",
                    message: "Choose the amount you want to withdraw: ",
                    choices: ["100", "500", "1000", "5000", "10000", chalk.blue("Enter Manually")]
                });
                // Taking Manually 
                if (amountoptions.amount == chalk.blue("Enter Manually")) {
                    let answeredamount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you want to withdraw: ",
                    });
                    // if amunt is greator than balance 
                    if (answeredamount.amount > balance) {
                        console.log(chalk.red("Please enter a valid amount: "));
                    }
                    else if (answeredamount.amount <= balance) {
                        // subtracting the user entered amount from balance 
                        balance -= answeredamount.amount;
                        console.log(`Your remaining balance is ${chalk.green(balance)}`);
                        await backInput();
                    }
                    // if the input is invalid (alphabets)
                    else {
                        console.log(chalk.red("Invalid Input "));
                    }
                }
                else if (parseInt(amountoptions.amount) <= balance) {
                    // subtracting the user entered amount from balance 
                    balance -= parseInt(amountoptions.amount);
                    console.log(`Your remaining balance is ${chalk.green(balance)}`);
                    await backInput();
                }
                else {
                    console.log(chalk.red("Please enter a valid amount: "));
                }
            }
            else if (answeredOption.options === chalk.blue("Check Balance")) {
                console.log(`Your remaining balance is ${chalk.green(balance)}`);
                await backInput();
            }
            else {
                break;
            }
        }
    }
    // If pin is incorrect 
    else {
        console.log(chalk.red("Please Enter the correct pin"));
        main();
    }
}
main();
