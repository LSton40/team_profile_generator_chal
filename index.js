const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const { listenerCount } = require('process');
const Manager = require('./lib/Manager.js');
const htmlGenerator = require('./htmlGenerator.js');


const manager = [
    {
        type: 'input',
        name: 'manager_name',
        message: "Enter your team manager's name.",
        validate(input) {
            if (!input) {
                return 'Please tell me your name!'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Enter your team manager's employee ID.",
        validate(input) {
            if (isNaN(input)) {
                return 'Please enter a valid office number! Delete previous response and try again!'
            }
            return true
        }
    },
    {
        name: 'manager_email',
        message: "Enter your team manager's email address.",
        validate(input) {
            const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!emailRegex.test(input)) {
                return 'Please enter a valid email address!'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'manager_office',
        message: "Enter your team manager's office number.",
        validate(input) {
            if (isNaN(input)) {
                return 'Please enter a valid office number! Delete previous response and try again!'
            }
            return true
        }
    },
    // {
    //     type: 'list',
    //     name: 'add_teammember',
    //     message: 'Would you like to add a team member?',
    //     choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
    // }
];

//adding validation to ensure that user input provided is in the proper expected format.

const addPrompt = {
    type: 'list',
    name: 'add_teammember',
    message: 'Would you like to add a team member?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
}

function doYouWantMore() {

    inquirer.prompt(addPrompt)
    .then((data) => {
        switch(data.add_teammember) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            case 'Finish building my team';
                finishTeam();
        }
    })
}



//GitHub username Regex courtesy of https://github.com/shinnn/github-username-regex
const engineer = [
    {
        name: 'engineer_name',
        message: "Enter your engineer's name.",
        validate(input) {
            if (!input) {
                return "Please tell me your engineer's name!"
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'engineer_id',
        message: "Enter your engineer's employee ID.",
        validate(input) {
            if (isNaN(input)) {
                return 'Please enter a valid office number! Delete previous response and try again!'
            }
            return true
        }
    },
    {
        name: 'engineer_email',
        message: "Enter your engineer's email address.",
        validate(input) {
            const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!emailRegex.test(input)) {
                return 'Please enter a valid email address!'
            }
            return true
        }
    },
    {
        name: 'engineer_github',
        message: "Enter your engineer's GitHub username.",
        validate(input) {
            const githubRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            if (!githubRegex.test(input)) {
                return "Please enter a valid GitHub username!"
            }
                return true;
        }
    }
];

// async addEngineer() {
//     const x = await inquirer.prompt(engineer)

// };

// const intern = [
//     {
//         name: 'intern_name',
//         message: "Enter your intern's name.",
        // validate(input) {
        //     if (!input) {
        //         return "Please tell me your intern's name!"
        //     }
        //     return true
        // }
//     },
//     {
//         type: 'input',
//         name: 'intern_id',
//         message: "Enter your intern's employee ID.",
        // validate(input) {
        //     if (isNaN(input)) {
        //         return 'Please enter a valid office number! Delete previous response and try again!'
        //     }
        //     return true
        // }
//     },
//     {
//         name: 'intern_email',
//         message: "Enter your intern's email address.",
        // validate(input) {
        //     const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        //     if (!emailRegex.test(input)) {
        //         return 'Please enter a valid email address!'
        //     }
        //     return true
        // }
//     },
//     {
//         name: 'intern_school',
//         message: "Enter your intern's school.",
        // validate(input) {
        //     if (!input) {
        //         return "Please tell me where your intern goes to school!"
        //     }
        //     return true
        // }
//     }
// ]

// async addIntern() {
//     const y = await inquirer.prompt(intern);
// };








function initPrompt() {

    
inquirer.prompt(manager)


    .then((data) => {

        const mgmt = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_office);

        htmlGenerator(mgmt)

        // return mgmt;
        
       

    })




    .then((input) => {
        return htmlGenerator(input);
    })
    .then((data) => {
        // function writeHtmlFile(fileName, data) {
            fs.writeFile('index.html', data, (error) => {
            error ? console.log(error) : console.log('HTML file generated!');
        });
// }
    })

}

initPrompt();


// function writeHtmlFile(fileName, data) {
//     fs.writeFile('index.html', data, (error) => {
//         error ? console.log(error) : console.log('HTML file generated!');
//     });
// }


// function appendHtmlFile(fileName, data) {
//     fs.appdendFile('index.html', data, (error) => {
//         error ? console.log(error) : console.log('HTML file generated!');
//     });
// }