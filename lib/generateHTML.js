
const fs = require('fs');
const inquirer = require("inquirer");


const managerCard =  (newManager) => {
    return `
    <article class="card">
            <section class="card-header"><h3>${newManager.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">Manager ID number: ${newManager.id}</li>
                <li class="card-email">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
                <li class="card-office">Manager Office Number: ${newManager.officeNumber}</li>
            </ul>
        </article>
    `;
};

const engineerCard =  (newEngineer) => {
    return `
    <article class="card">
            <section class="card-header"><h3>${newEngineer.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">Engineer ID number: ${newEngineer.id}</li>
                <li class="card-email">Email: <a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
                <li class="card-office">Github profile: <a href="https://github.com/${newEngineer.github}" target="_blank">${newEngineer.github}</a></li>
            </ul>
        </article>
    `;
};

const internCard =  (newIntern) => {
    return `
    <article class="card">
            <section class="card-header"><h3>${newIntern.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">Intern ID number: ${newIntern.id}</li>
                <li class="card-email">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
                <li class="card-office"> Intern's School name: ${newIntern.school}</li>
            </ul>
        </article>
    `;
};


generateCards = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const manager = managerCard(employee);
            cardArray.push(manager);
        }

        if (role === "Engineer") {
            const engineer = engineerCard(employee);
            cardArray.push(engineer);
        }

        if (role === "Intern") {
            const intern = internCard(employee);
            cardArray.push(intern);
        }
       
    }   
    const employeeCards = cardArray.join('');
    const createTeam = generateHTML(employeeCards);
    return createTeam; 
};


const generateHTML = (employeeCards) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/style.css" rel="stylesheet">
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

module.exports = generateCards;