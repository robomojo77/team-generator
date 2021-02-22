const Intern = require('../lib/Intern.js');

test('creates an employee object', () => {
    intern = new intern('newIntern', 453, 'employeeIN@email.com');

    expect(employee.name).toBe('newIntern');
    expect(employee.id).toBe(453);
    expect(employee.email).toBe('employeeIN@email.com');
});