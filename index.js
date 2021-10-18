const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');


const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your id number?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];


inquirer
 .prompt(questions)
 .then((response) => {
     console.log(response);
 });