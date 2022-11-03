const connection = require('./connection');

// class that performs SQL queries which will be exported to index.js in root of project
class Query{

    constructor(connection){
        this.connection = connection
    }

    queryDepartments(){
        return this.connection.promise().query('SELECT * FROM department')
    }

    queryRoles(){
        return this.connection.promise().query('SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id')
    }

    queryEmployees(){
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, CONCAT(manager.first_name, " ",manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id')
    }

}

module.exports = new Query(connection)
