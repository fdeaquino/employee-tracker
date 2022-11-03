-- creates multiple departments 
INSERT INTO department (name)
VALUES ('Engineering'), 
       ('Finance'), 
       ('Legal'), 
       ('Sales');

-- creates multiple roles 
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 4),
       ('Salesperson', 80000, 4),
       ('Lead Engineer', 150000, 1),
       ('Software Engineer', 120000,  1),
       ('Account Manager', 160000,  2),
       ('Accountant', 125000,  2),
       ('Legal Team Lead', 250000,  3),
       ('Lawyer', 190000, 3);

-- creates multiple employees 
INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ('Frida', 'Khalo', 1, NULL), 
       ('Celia', 'Cruz', 2, 1),
       ('Selena', 'Quintanilla',3, NULL),
       ('Enrique', 'Iglesias', 4, 3),
       ('Ricky', 'Martin', 5, NULL),
       ('Juan', 'Gabriel', 6, 5),
       ('Vicente', 'Fernandez', 7, NULL),
       ('Cristian', 'Castro', 8,7);