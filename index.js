const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const db = require('./db')


// Welcome message for the Business Owner; initiates inquirer prompts
start()
function start(){
    console.log(`
    =================================
    
    Welcome to your Employee Manager

    You can now keep track of your 
    employees, their roles, and your 
    business departments!
    
    =================================
    `);
    businessOwnerPrompt() 
}

// Initial prompts for Business Owner
function businessOwnerPrompt() {
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

// Function to view all departments with sql query instance coming from queryDepartments
const viewAllDepartments = () => {
    console.log(`

All departments for [My_Business].
==================================

    `);
   db.queryDepartments().then(([depts])=>{
        console.table(depts)
   }).then(()=> businessOwnerPrompt())

};

// Function to view all roles with sql query instance coming from queryRoles
const viewAllRoles = () => {
    console.log(`

All roles for [My_Business].
==========================================

    `);
    db.queryRoles().then(([roles])=>{
        console.table(roles)
    }).then(()=> businessOwnerPrompt())
};

// Function to view all employees with sql query instance coming from queryEmployees
const viewAllEmployees = () => {
    console.log(`

All employees for [My_Business].
=======================================================================================
    
    `);
    db.queryEmployees().then(([employees])=>{
        console.table(employees)
    }).then(()=> businessOwnerPrompt())
};

// TODO: finish/refine pseudo code
// Pseudo code for addADepartment function:
// 1 add inquirer.prompt asking user to enter department name
// 2 user enters department name 
// 3 validate user input
// 4 .then() function 
// 5. inside .then() create a variable sqlCommand with INSERT INTO departments (DepartmentName) VALUES (?)
// 6. db.query function with sqlCommand variable, err, result
// 7. if there's an error console log it
// 8. console log a success message to user
// 9. start the businessOwnerPrompt function again
const addADepartment = () => {
    console.log('You are adding a new department.');
};

const addARole = () => {
    console.log('You are adding a new role.');
};

const addAnEmployee = () => {
    console.log('You are adding a new employee.');
};

// TODO: finish/refine pseudo code
// Pseudo code for updateARole function:
// 1. If user wants to update an employee then show them the employee list
// 2. after the table displays, add an inquirer prompt asking the user to select the user they want to update
// 3. After the user chooses an employee to update, add an inquirer prompt to allow the user to select a new role for the chose employee
// 4. then update the employee's role/title with a db.query
// 5. inside the db.query function, create a sqlCommand variable with UPDATE employees SET title = ? WHERE ID = ?
// 6. console.log error if any
// 7. console log a success message to the user after updating
// 8. return to the businessOwnerPrompt function again
const updateARole = () => {
    console.log('You are updating an employee role.');
};
