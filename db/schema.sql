-- function for database creation/deletion
-- Tables automatically delete if database deletes
DROP DATABASE IF EXISTS My_Business;

CREATE DATABASE My_Business;
USE My_Business;

-- creates department table with fields: id, name
CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(30) UNIQUE NOT NULL
);

-- creates role table with fields: id, title, salary, department_id
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- creates employee table with fields: id, first_name, last_name, role_id, manager_id
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);