import inquirer from "inquirer";
let leap = 4;
let answer = await inquirer.prompt([{
        name: "year",
        type: "number",
        message: ("Enter the year: ")
    }]);
let n = answer.year % leap;
if (n == 0) {
    console.log(`${answer.year} is the Leap Year`);
}
else {
    console.log(`${answer.year} is not the Leap Year`);
}
