const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');
test('creates an employee object', () => {
    const employee = new Employee('newEmployee');

    expect(employee.name).toBe('newEmployee');
})