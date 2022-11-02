const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log(`
    Database connection successful!
    Connected to [My_Business]`);
    businessOwnerPrompt();
});

function businessOwnerPrompt() {
    console.log(`
    =================================
    
    Welcome to your Employee Manager

    You can now keep track of your 
    employees, their roles, and your 
    business departments!
    
    =================================
    `);
    
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'optionsForOwner',
                message: 'What would you like to do?',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
            }
        ])
        .then((userChoice) => {
            const { optionsForOwner } = userChoice;
            // TODO: finish control statements after creating functions to view, add, and update

            // If user chooses to [View All Departments] from the 'optionsForOwner' prompts, then run the function to View All Departments
            // Else if user chooses to [View All Roles] from the 'optionsForOwner' prompts, then run the function to View All Roles
            // Else if user chooses to [View All Employees] from the 'optionsForOwner' prompts, then run the function to View All Employees
            // Else if user chooses to [Add A Department] from the 'optionsForOwner' prompts, then run the function to Add A Department
            // Else if user chooses to [Add A Role] from the 'optionsForOwner' prompts, then run the function to Add A Role
            // Else if user chooses to [Add An Employee] from the 'optionsForOwner' prompts, then run the function to Add An Employee
            // Else if user chooses to [Update An Employee Role] from the 'optionsForOwner' prompts, then run the function to Update An Employee Role
            // TODO: use switch case, the switch will have the choice/response
            if (optionsForOwner === 'View All Departments') {
                return viewAllDepartments();
            } else if (optionsForOwner === 'View All Roles') {
                return viewAllRoles();
            } else if (optionsForOwner === 'View All Employees') {
                return viewAllEmployees();
            } else if (optionsForOwner === 'Add A Department') {
                return addADepartment();
            } else if (optionsForOwner === 'Add A Role') {
                return addARole();
            } else if (optionsForOwner === 'Add An Employee') {
                return addAnEmployee();
            } else if (optionsForOwner === 'Update An Employee Role') {
                return updateARole();
            }


        })
};

const viewAllDepartments = () => {
    console.log(`

All departments for [My_Business].
==================================

    `);
    const sqlCommand = `SELECT * FROM departments`;

    db.query(sqlCommand, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        businessOwnerPrompt();
    })
};

const viewAllRoles = () => {
    console.log(`

All roles for [My_Business].
===========================================================

    `);
    const sqlCommand = `SELECT * FROM roles`;

    db.query(sqlCommand, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        businessOwnerPrompt();
    })
};

const viewAllEmployees = () => {
    console.log(`

All employees for [My_Business].
======================================================================================
    
    `);
    const sqlCommand = `SELECT * FROM employees`;
    
    db.query(sqlCommand, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        businessOwnerPrompt();
    })
};

const addADepartment = () => {
    console.log('You are adding a new department.');
};

const addARole = () => {
    console.log('You are adding a new role.');
};

const addAnEmployee = () => {
    console.log('You are adding a new employee.');
};

const updateARole = () => {
    console.log('You are updating an employee role.');
};



