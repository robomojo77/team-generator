// Requires

import inquirer from 'inquirer';

const teamQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name?'
        },
        {
            type: 'input',
            name: 'employee_ID',
            message: 'Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email?'
        },

        // Class Specific Questions

        {
            type:
            name:
            message:
        },
        {
            type:
            name:
            message:
        }
        
    ]);
};