const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')

const generateTeam = require('./src/page-template');
const { inherits } = require('util');
const team = [];

function createManager() {
    // To Do: 
    // Create prompt for manager
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your managers name?"
        },
        {
            type: "input",
            name: "id",
            message: "Please provide a your employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please provide your office number."
        },
    ])
        // Create a variable for new manager class
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);
            console.log(answers)
            newEmployee();
        })
    // push new manager class into newTeamMembers array (newTeamMembers.push(newManager))
    // call function 
}

function newEmployee() {
    const addEmployeePrompt = [{
    
        type: "list",
        name: "employeeChoice",
        message: "What type of employee is this?",
        choices: ['Intern', 'Engineer', 'Finish Team']
    
    }]
    inquirer.prompt(addEmployeePrompt)
        .then(answers => {
            switch (answers.employeeChoice) {
                case 'Finish Team': 
                    writeFile('output/index.html', team)
            }
        })
}

function init() {
    createManager();
    
}
init();

function createEngineer() {
    // prompt for options on line 32 of readme
    // switch case based on selected choice run the correct function
}


// function createTeam
function writeFile(fileName, data) {

    fs.writeFile(fileName, generateTeam(data), (err) =>
        err ? console.log(err) : console.log('New team created!')
    );


}
