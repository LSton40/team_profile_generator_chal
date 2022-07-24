const Employee = require('./Employee');

//Creates a new class Engineer as a subclass of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub(github) {
        return this.github = github;
    };

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;