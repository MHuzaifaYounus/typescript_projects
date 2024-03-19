#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Select one of the operators to perform action", type: "list", name: "operator", choices: ["+", "-", "*", "/", "**", "%"] },
    { message: "Enter second number", type: "number", name: "secondnumber" },
]);
if (answer.operator === "+") {
    console.log(`Answer : ${answer.firstnumber} + ${answer.secondnumber}  =  ${answer.firstnumber + answer.secondnumber}`);
}
else if (answer.operator === "-") {
    console.log(`Answer : ${answer.firstnumber} - ${answer.secondnumber}  =  ${answer.firstnumber - answer.secondnumber}`);
}
else if (answer.operator === "*") {
    console.log(`Answer : ${answer.firstnumber} * ${answer.secondnumber}  =  ${answer.firstnumber * answer.secondnumber}`);
}
else if (answer.operator === "/") {
    console.log(`Answer : ${answer.firstnumber} / ${answer.secondnumber}  =  ${answer.firstnumber / answer.secondnumber}`);
}
else if (answer.operator === "**") {
    console.log(`Answer : ${answer.firstnumber} ** ${answer.secondnumber}  =  ${answer.firstnumber ** answer.secondnumber}`);
}
else if (answer.operator === "%") {
    console.log(`Answer : ${answer.firstnumber} % ${answer.secondnumber}  =  ${answer.firstnumber % answer.secondnumber}`);
}
else {
    console.log("Please select valid operator");
}
