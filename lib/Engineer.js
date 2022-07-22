const Employee = require('Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole(role) {
        return role = 'Engineer';
    }; //overriden to retrun 'Engineer'

    getGitHub(github) {
        return this.github = github;
    };
}


const lucille = new Engineer('Lucille', 000247, 'lucille@magicplace.net', 'GiddyLu');


module.exports = Engineer;