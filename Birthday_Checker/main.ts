#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

let input =  await inquirer.prompt([
    {
        name:"day",
        type:"number",
        message:`Enter Your Birthday's ${chalk.cyan("Date")}: `
    },
    {
        name:"month",
        type:"number",
        message:`Enter The Number Of Your Birthday's ${chalk.cyan("Month")}: `
    }
])

function getMyBirthDate(day:number,month:number){
    let currentDate = new Date()
    let birthday = new Date(currentDate.getFullYear(),month -1,day)
    if(birthday<currentDate){
        birthday.setFullYear(currentDate.getFullYear()+1)
    }
    return birthday
       
}
console.log(`Your Next BirthDay Will Be On : ${chalk.green(getMyBirthDate(input.day,input.month).toDateString())}`);
