const Employee = require('Employee');

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github;
    }
    getRole(); //overriden to retrun 'Engineer'
    getGitHub();
}



module.exports = Engineer;