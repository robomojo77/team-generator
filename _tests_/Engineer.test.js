const Engineer = require('../lib/Engineer.js');

test('creates an employee object', () => {
    engineer = new engineer('newEngineer', 353, 'employeeEN@email.com');

    expect(employee.name).toBe('newEngineer');
    expect(employee.id).toBe(353);
    expect(employee.email).toBe('employeeEN@email.com');
});