const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamInfo = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team member's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is their employee ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is their email?",
            name: "email",
        },
        {
            type: "list",
            message: "Please select what job this employee performs.",
            choices: ["manager", "engineer", "intern"],
            name: "role",
        },

])
        if (answers.role === "manager") {
            const manager = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "number",
                },
            ])
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                manager.number,
            );
            teamInfo.push(newManager);
            console.log(teamInfo);
}
};
questions();

// inquirer
//  .prompt(questions)
//  .then((response) => {
//      console.log(response);
//  });