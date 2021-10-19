const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamInfo = [];

const managerQuestions = async () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
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
                type: "input",
                message: "What is the manager's office number?",
                name: "number",
            },
        ]).then(managerInfo => {
            const { name, id, email, number } = managerInfo;
            const newManager = new Manager(
                name,
                id,
                email,
                number,
            );
            teamInfo.push(newManager);
            console.log(newManager)
        })
};

const engineerQuestions = async () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
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
                type: "input",
                message: "What is their Github username?",
                name: "username",
            },
        ]).then(engineerInfo => {
            const { name, id, email, username } = engineerInfo;
            const newEngineer = new Engineer(
                name,
                id,
                email,
                username,
            );
            teamInfo.push(newEngineer);
            console.log(newEngineer)
        })
};

const internQuestions = async () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
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
                type: "input",
                message: "What is their school's name?",
                name: "school",
            },
        ]).then(internInfo => {
            const { name, id, email, school } = internInfo;
            const newIntern = new Intern(
                name,
                id,
                email,
                school,
            );
            teamInfo.push(newIntern);
            console.log(newIntern);
            console.log(teamInfo);
        })
};

managerQuestions()
    .then(engineerQuestions)
    .then(internQuestions);