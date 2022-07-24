const Employee = require('./Employee');

//Creates a new class Intern as a subclass of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool(school) {
        return this.school = school;
    };
}

module.exports = Intern;