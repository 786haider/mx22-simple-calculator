#! //usr/bin/env node
import inquirer from "inquirer";
const awnser = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(awnser);
// CONDITIONAL STATMENT
if (awnser.operator === "Addition") {
    console.log(awnser.firstNumber + awnser.secondNumber);
}
else if (awnser.operator === "Subtraction") {
    console.log(awnser.firstNumber - awnser.secondNumber);
}
else if (awnser.operator === "Multiplication") {
    console.log(awnser.firstNumber * awnser.secondNumber);
}
else if (awnser.operator === "Division") {
    console.log(awnser.firstNumber / awnser.secondNumber);
}
else {
    console.log("please select valid operator");
}
console.log("THE END");
