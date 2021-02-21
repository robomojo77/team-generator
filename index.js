import inquirer from 'inquirer';
const teamQuestions = () => {
    return inquirer.prompt([
        {
            type:
            name: 'name',
            message:
        },
        {
            type:
            name: 'employee ID',
            message:
        },
        {
            type:
            name: 'email',
            message:
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