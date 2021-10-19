# Team Profile Generator
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description  
  This is a team profile generator created through node.js, javascript, css, and html. A user can use this app to answers a few prompts pertaining to employees and their roles which will dynamically generate employee profile cards into an Index.html file and styled with css. This repository contains a plethora of files that all have important roles. The __tests__ directory contains files that ensured my functionality remained. The lib directory contains the employee class files. These were developed then imported into the index.js file to be used within the inquirer prompts. The generateHTML.js file is where the information is placed in cards that are then added to an index.html file that is generated once all questions have been answered.  

  Additionally, here is a link to the generator working. 


  ## Code Snippets
  Here are some code snippets and what they accomplished. First is a small section of the code that created the questions for the manager class. The engineer and intern classes have similar code snippets with slight differences in the final questions.
  ```
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
  ```

  Next is the code that contains the function that generated the HTML file.  
  ```
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
  ```

  Lastly, this snippet is where the employee class inforation makes its way into the generateHTML function. This snippet utilizes three other functions that created the employee cards, pushes those cards into an array, sets that array as a variable, and then passes it into the html function.
  ```
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
  ```

  ## Installation
  To install:
  ```
  Once you have a working SSH key added to your Github account, go to the team-profile-generator repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
  ```

  Next, 
  ```
  Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
  "git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
  ```
  Lastly, 
  ```
  Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "team-profile-generator". Simply type in "code ." to open it in your code editor of choice and have fun!

  ```

  ## Usage
  Any user can access this generator to create a fairly basic stylized html that contains card elements showing the inputted employee information. This code can be tweaked to include additional information if required. 

  ## Built With
  * [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [NODE.JS](https://nodejs.org/en/)
  * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  * [CSS](https://www.w3schools.com/css/)

  ## Deployed Link
* [See the Live Site!](https://tylerbyeager.github.io/team-pofile-generator/) 

## Authors

* **Tyler Brian Yeager**

- [Link to Repo Site](https://github.com/TylerBYeager/team-profile-generator)
- [Link to Github](https://github.com/TylerBYeager/tylerbyeager.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

  ## Contributions

  UC Berkeley Coding Bootcamp & my pair programmers this week

  ## License
  ![License](https://img.shields.io/badge/License-Apache-blue.svg)

  ## Questions
  - wow_d2@hotmail.com