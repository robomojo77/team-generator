const Employee = require('../lib/Employee.js').default;

test('creates an employee object', () => {
    Employee('newEmployee');

    expect(employee.name).toBe('newEmployee');
});
