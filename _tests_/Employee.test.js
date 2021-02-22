const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    employee = new Employee('newEmployee');

    expect(employee.name).toBe('newEmployee');
});
