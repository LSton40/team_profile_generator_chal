const Engineer = require('../lib/Engineer');

const eng = new Engineer();


describe('Engineer Status', () => {

    it('should return the Employee role "Engineer" for a member of the Engineer class', () => {
        
        expect(eng.getRole()).toBe('Engineer');
    })

    it('should return the GitHub username for any given GitHub username assigned to a member of the Engineer class', () => {

        expect(eng.getGitHub('EnginEar3')).toBe('EnginEar3');
    })
});