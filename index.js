const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./lib/generateHTML");


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
                name: "officeNumber",
            },
        ]).then(managerInfo => {
            const { name, id, email, officeNumber } = managerInfo;
            const newManager = new Manager(
                name,
                id,
                email,
                officeNumber,
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
                name: "github",
            },
        ]).then(engineerInfo => {
            const { name, id, email, github } = engineerInfo;
            const newEngineer = new Engineer(
                name,
                id,
                email,
                github,
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
            return teamInfo;
        })
};


const writeHTML = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("success");
        }
    })
}

managerQuestions()
    .then(engineerQuestions)
    .then(internQuestions)
    .then(teamInfo => {
        
        return generateHTML(teamInfo);
    })
    .then(pageHTML => {
        return writeHTML(pageHTML);
    })