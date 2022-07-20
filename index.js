const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const htmlMe = require('./htmlGenerator.js');
const { listenerCount } = require('process');

const manager = [
    {
        name: 'manager_name',
        message: "Enter your team manager's name."
    },
    {
        name: 'manager_id',
        message: "Enter your team manager's employee ID."
    },
    {
        name: 'manager_email',
        message: "Enter your team manager's email address."
    },
    {
        name: 'manager_office',
        message: "Enter your team manager's office number."
    },
];

const addPrompt = {
    type: 'list',
    name: 'add_teammember',
    message: 'Would you like to add a team member?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
}

const engineer = [
    {
        name: 'engineer_name',
        message: "Enter your engineer's name."
    },
    {
        name: 'engineer_id',
        message: "Enter your engineer's employee ID."
    },
    {
        name: 'engineer_email',
        message: "Enter your engineer's email address."
    },
    {
        name: 'engineer_github',
        message: "Enter your engineer's GitHub username."
    }
];

const intern = [
    {
        name: 'intern_name',
        message: "Enter your intern's name."
    },
    {
        name: 'intern_id',
        message: "Enter your intern's employee ID."
    },
    {
        name: 'intern_email',
        message: "Enter your intern's email address."
    },
    {
        name: 'intern_school',
        message: "Enter your intern's school."
    }
]

inquirer.prompt()
.then(())
.then(())



function writeHtmlFile(fileName, data) {
    fs.writeFile('index.html', data, (error) => {
        error ? console.log(error) : console.log('HTML file generated!');
    });
}


function appendHtmlFile(fileName, data) {
    fs.appdendFile('index.html', data, (error) => {
        error ? console.log(error) : console.log('HTML file generated!');
    });
}