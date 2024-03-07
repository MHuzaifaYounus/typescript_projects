import inquirer from "inquirer";

let i = true
while (i) {

    let num1 = await inquirer.prompt({
        name: "num",
        type: "number",
        message: "Enter your first Name: "
    })
    let op = await inquirer.prompt({
        name: "sign",
        message: "Enter operator: "
    })

    let num2 = await inquirer.prompt({
        name: "num",
        type: "number",
        message: "Enter your second Name: "
    })

    if (op.sign == "+") {
        console.log(num1.num, "+", num2.num, "=", num1.num + num2.num)
    }
    else if (op.sign == "-") {
        console.log(num1.num, "-", num2.num, "=", num1.num - num2.num)
    }
    else if (op.sign == "*") {
        console.log(num1.num, "*", num2.num, "=", num1.num * num2.num)
    }
    else if (op.sign == "/") {
        console.log(num1.num, "/", num2.num, "=", num1.num / num2.num)
    }
    else if (op.sign == "%") {
        console.log(num1.num, "%", num2.num, "=", num1.num % num2.num)
    }
    else if (op.sign == "**") {
        console.log(num1.num, "**", num2.num, "=", num1.num ** num2.num)
    }
    else {
        console.log(`Plz Enter The Correct operator`)
    }
    let tryagain = await inquirer.prompt({
        name: "permission",
   
        message: "You want to Try Again(y/n): "
    })
    if(tryagain.permission == "n"){
        i = false
    }
    else{

    }
    console.log("\n")
}