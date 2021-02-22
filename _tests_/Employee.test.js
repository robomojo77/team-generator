const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    employee = new Employee('newEmployee', 253, 'employeeA@email.com');

    expect(employee.name).toBe('newEmployee');
    expect(employee.id).toBe(253);
    expect(employee.email).toBe('employeeA@email.com');
});
