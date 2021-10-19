const fs = require('fs');
const inquirer = require("inquirer");


const generateHTMl = (response) => {
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
        
    </section>




</body>
</html>`
};

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
}


module.exports = generateHTMl;