const Employee = require('./Employee');

//Creates a new class Manager as a subclass of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;