const Employee = require('Employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }; //overriden to retrun 'Manager'
}


const hank = new Manager('Hank', 000257, 'bigmanHank@magicplace.net', 1);


module.exports = Manager;