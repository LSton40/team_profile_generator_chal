class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName(name) {
        return this.name = name;
    };

    getId(id) {
        return this.id = id;
    };

    getEmail(email) {
        return this.email = email;
    };

    getRole() {
        return 'Employee';
    };
}

// const empl = new Employee('Billy', 42, 'blah')

// console.log(empl.getName());

module.exports = Employee;