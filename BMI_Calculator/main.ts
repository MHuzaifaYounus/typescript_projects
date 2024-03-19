#! /usr/bin/env node

// Body mass Index Calculator 


import inquirer from "inquirer";
// Taking Weight from user 
let weightInKg = await inquirer.prompt({
    name: "weight",
    type: "number",
    message: "Enter Your Weight In Kg: "
})
// Taking heigth from user 
let heightInMeters = await inquirer.prompt({
    name: "height",
    type: "number",
    message: "Enter Your Height In Meters: "
})
// Calculations
let bmi: number = weightInKg.weight / (heightInMeters.height ** 2);
// Printing Body Mass Index According to provided data by user 
console.log(`Your Body Mass Index (BMI) is: ${bmi}` + " kg/m2");




