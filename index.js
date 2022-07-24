//References packages and associated files
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const htmlGenerator = require('./src/htmlGenerator.js');

//Prompt question arrays
//Validation of email Regex courtesy of https://regexlib.com/Search.aspx?k=email, Author Zrekam makerZ.

//Initial prompt questions to input Manager information
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
    }
];

//Prompt questions to input Engineer information 
//Validation of GitHub username Regex courtesy of https://github.com/shinnn/github-username-regex
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

//Prompt questions to input Intern information 
const intern = [
    {
        name: 'intern_name',
        message: "Enter your intern's name.",
        validate(input) {
            if (!input) {
                return "Please tell me your intern's name!"
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'intern_id',
        message: "Enter your intern's employee ID.",
        validate(input) {
            if (isNaN(input)) {
                return 'Please enter a valid office number! Delete previous response and try again!'
            }
            return true
        }
    },
    {
        name: 'intern_email',
        message: "Enter your intern's email address.",
        validate(input) {
            const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!emailRegex.test(input)) {
                return 'Please enter a valid email address!'
            }
            return true
        }
    },
    {
        name: 'intern_school',
        message: "Enter your intern's school.",
        validate(input) {
            if (!input) {
                return "Please tell me where your intern goes to school!"
            }
            return true
        }
    }
];

//Prompt question to select whether to add an Engineer, Intern, or finish inputting Team information
const addPrompt = {
    type: 'list',
    name: 'add_teammember',
    message: 'Would you like to add a team member?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
}


//Function to select whether to cue a prompt to add an Engineer or to add an Intern, or to finish user input.
function doYouWantMore(dataAccum) {

    return inquirer.prompt(addPrompt)

    .then((data) => {
        switch(data.add_teammember) {
            case 'Add an engineer':
                return addEngineer(dataAccum);
            case 'Add an intern':
                return addIntern(dataAccum);
            default:
                return finishTeam(dataAccum);
        }
    })
}

//Function to initiate prompt for Engineer information and add to accruing team data
function addEngineer(eDataAccum) {

    return inquirer.prompt(engineer)

    .then((eData) => {

        let engin = new Engineer(eData.engineer_name, eData.engineer_id, eData.engineer_email, eData.engineer_github)
        eDataAccum.push(engin);

        return doYouWantMore(eDataAccum);
    })
};

//Function to initiate prompt for Intern information and add to accruing team data
function addIntern(iDataAccum) {

    return inquirer.prompt(intern)

        .then((iData) => {

            let int = new Intern(iData.intern_name, iData.intern_id, iData.intern_email, iData.intern_school)       
            iDataAccum.push(int)

            return doYouWantMore(iDataAccum);
        })
};



//Function to finish user input of team data and pass array of team information to the HTML generator function
function finishTeam(finData) {
    return htmlGenerator(finData);
}


//Function to initiate user input, starting with the prompt for Manager data, begin accruing user input data in an array, and then send user to prompt to add more team data
function initPrompt() {

    inquirer.prompt(manager)

        .then((data) => {

            let dataAccumulation = [];
            const mgmt = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_office);
            dataAccumulation.push(mgmt);

            return doYouWantMore(dataAccumulation);
        })

        //Creates an index.html file and Writes data passed from the HTML generator to the new file
        .then((data) => {
            fs.writeFile('./dist/index.html', data, (error) => {
            error ? console.log(error) : console.log('HTML file generated!');
            });
        })
};

//Initiates the prompt on file load
initPrompt();