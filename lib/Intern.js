const Employee = require('Employee');


class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
    }
    getRole(); //overriden to retrun 'Intern'
    getSchool();

}

module.exports = Intern;