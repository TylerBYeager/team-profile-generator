
const fs = require('fs');
const inquirer = require("inquirer");


const managerCard =  (newManager) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${newManager.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${newManager.id}</li>
                <li class="card-email">${newManager.email}</li>
                <li class="card-office">${newManager.number}</li>
            </ul>
        </section>
    `;
};

const engineerCard =  (newEngineer) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${newEngineer.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${newEngineer.id}</li>
                <li class="card-email">${newEngineer.email}</li>
                <li class="card-office">${newEngineer.username}</li>
            </ul>
        </section>
    `;
};

const internCard =  (newIntern) => {
    return `
    <section class="card">
            <section class="card-header"><h3>${newIntern.name}</h3></section>
            <section class="card-body">
            <ul>
                <li class="card-id">${newIntern.id}</li>
                <li class="card-email">${newIntern.email}</li>
                <li class="card-office">${newIntern.school}</li>
            </ul>
        </section>
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

module.exports = generateCards;