const Employee = require('Employee');


class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
    }
    getRole(); //overriden to retrun 'Manager'
}


module.exports = Manager;