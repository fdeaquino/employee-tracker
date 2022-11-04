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

const addADepartment = () => {
    // console.log('You are adding a new department.');

    inquirer
    .prompt([
        {
            type:'input', 
            name:'name',
            message:'What should be the name of the new department?',
        }
    ])
    .then((data)=> {
        console.log(data.name);
        db.queryAddDept(data.name).then(([data])=>{
            console.log(`
            Success! You added a new department.
            ====================================`);
        })
        .then(()=> businessOwnerPrompt())
    })
};

const addARole = () => {
    // console.log('You are adding a new role.');
    inquirer
    .prompt([
        {
            type:'input', 
            name:'title',
            message:'What should be the name of the new role?',
        }, 
        {
            type:'input', 
            name:'salary',
            message:'What should be the salary for this new role?',
        },
        {
            type:'number', 
            name:'department_id',
            message:'What is the department ID of this new role? (Ex: Engineering=1, Finance=2, Legal=3, Sales=4)',
        }
    ])
    .then((data)=> {
        console.log(data.title, data.salary, data.department_id);
        db.queryAddRole(data).then(()=>{
            console.log(`
            Success! You added a new role.
            ==============================`);
        })
        .then(()=> businessOwnerPrompt())
    })
};

const addAnEmployee = () => {
    // console.log('You are adding a new employee.');
    inquirer
    .prompt([
        {
            type:'input', 
            name:'first_name',
            message:"What is the new employee's first name?",
        }, 
        {
            type:'input', 
            name:'last_name',
            message:"What is the new employee's last name?",
        },
        {
            type:'input', 
            name:'role_id',
            message:'What is the role id of this new emplyee? (Ex: Sales Lead=1, Salesperson=2, Lead Engineer=3, Software Engineer=4, Account Manager=5, Accountant=6, Legal Team Lead=8, Lawyer=8)',
        }, 
        {
            type:'number', 
            name:'manager_id',
            message:'What is the manager ID of this new emplyee? (Ex: Frida Khalo=1, Selena Quintanilla=3, Ricky Martin=5, Vicente Fernandez=7)',
        }
    ])
    .then((data)=> {
        console.log(data.first_name, data.last_name, data.role_id, data.manager_id);
        db.queryAddEmployee(data).then(()=>{
            console.log(`
            Success! You added a new employee.
            ==================================`);
        })
        .then(()=> businessOwnerPrompt())
    })
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
