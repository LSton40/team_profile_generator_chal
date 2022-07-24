
const Employee = require('../lib/Employee');

const empl = new Employee();


describe('Employee Role', () => {

    it('should return the personal name given to a member of the Employee class', () => {
        
        expect(empl.getName('Lucy')).toBe('Lucy');
    })

    it('should return the ID number assigned to a member of the Employee class', () => {
        
        expect(empl.getId(52)).toBe(52);
    })

    it('should return the email address assigned to a member of the Employee class', () => {
        
        expect(empl.getEmail('there@here.com')).toBe('there@here.com');
    })

    it('should return the Employee role "Employee" for a member of the Employee class', () => {

        expect(empl.getRole()).toBe('Employee');
    })
});