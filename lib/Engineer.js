const Employee = require('Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }; //overriden to retrun 'Engineer'

    getGitHub() {
        return this.github
    };
}


const lucille = new Engineer('Lucille', 000247, 'lucille@magicplace.net', 'GiddyLu');


module.exports = Engineer;