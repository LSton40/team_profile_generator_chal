const Manager = require('../lib/Manager');

const mng = new Manager();

describe('Manager Status', () => {

    it('should return the Employee role "Manager" for a member of the Manager class', () => {
        
        expect(mng.getRole()).toBe('Manager');
    })
});