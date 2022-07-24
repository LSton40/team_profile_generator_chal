const Intern = require('../lib/Intern');

const int = new Intern();


describe('Intern Status', () => {

    it('should return the Employee role "Intern" for a member of the Intern class', () => {
        
        expect(int.getRole()).toBe('Intern');
    })

    it('should return name of the School for any given School assigned to a member of the Intern class', () => {

        expect(int.getSchool('University of Minnesota')).toBe('University of Minnesota');
    })
});