
const fs = require('fs');
const inquirer = require("inquirer");


const managerCard =  (manager) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${manager.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${manager.id}</li>
                <li class="card-email">${manager.email}</li>
                <li class="card-office">${manager.number}</li>
            </ul>
        </section>
    `;
};

const engineerCard =  (engineer) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${engineer.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${engineer.id}</li>
                <li class="card-email">${engineer.email}</li>
                <li class="card-office">${engineer.username}</li>
            </ul>
        </section>
    `;
};

const internCard =  (intern) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${intern.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${intern.id}</li>
                <li class="card-email">${intern.email}</li>
                <li class="card-office">${intern.school}</li>
            </ul>
        </section>
    `;
};


generateCards = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "manager") {
            const manager = managerCard(employee);
            cardArray.push(manager);
        }

        if (role === "engineer") {
            const engineer = engineerCard(employee);
            cardArray.push(engineer);
        }

        if (role === "intern") {
            const intern = internCard(employee);
            cardArray.push(intern);
        }


        const employeeCards = cardArray.join('');
        const createTeam = generateHTML(employeeCards);
        return createTeam;
    }    
};


const generateHTML = (employeeCards) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="dist/css/style.css">
    <title>Team Profile</title>
</head>


<body>
    <section>
        <h1>Your team profile cards</h1>
    </section>

    <section class="container">
        ${employeeCards}
    </section>




</body>
</html>`;
};

module.exports = generateHTML;