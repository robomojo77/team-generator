const Manager = require('../lib/Manager.js');

test('creates an employee object', () => {
    manager = new manager('newManager', 553, 'employeeMN@email.com');

    expect(employee.name).toBe('newManager');
    expect(employee.id).toBe(553);
    expect(employee.email).toBe('employeeMN@email.com');
});