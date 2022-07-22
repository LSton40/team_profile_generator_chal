const Employee = require('Employee');


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }; //overriden to retrun 'Intern'

    getSchool() {
        return this.school;
    };

}

const timmy = new Intern('Timmy', 000257, 'internTimmy@magicplace.net', 'University of Minnesota');

module.exports = Intern;