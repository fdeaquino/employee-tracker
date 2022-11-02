-- creates multiple departments (names)
INSERT INTO departments (DepartmentName)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

-- creates multiple roles (including titles, salary, department name, and department ids)
INSERT INTO roles (Title, Salary, DepartmentName, DepartmentId)
VALUES ('Sales Lead', 100000, 'Sales', 4),
       ('Salesperson', 80000, 'Sales', 4),
       ('Lead Engineer', 150000, 'Engineering', 1),
       ('Software Engineer', 120000, 'Engineering', 1),
       ('Account Manager', 160000, 'Finance', 2),
       ('Accountant', 125000, 'Finance', 2),
       ('Legal Team Lead', 250000, 'Legal', 3),
       ('Lawyer', 190000, 'Legal', 3);

INSERT INTO employees (FirstName, LastName, Title, Department, Salary, Manager)
VALUES ('Frida', 'Khalo', 'Sales Lead', 'Sales', 100000, ''), 
       ('Celia', 'Cruz', 'Salesperson', 'Sales', 80000, 'Frida Khalo'),
       ('Selena', 'Quintanilla', 'Lead Engineer', 'Engineering', 150000, ''),
       ('Enrique', 'Iglesias', 'Software Engineer', 'Engineering', 120000, 'Selena Quintanilla'),
       ('Ricky', 'Martin', 'Account Manager', 'Finance', 160000, ''),
       ('Juan', 'Gabriel', 'Accountant', 'Finance', 125000, 'Ricky Martin'),
       ('Vicente', 'Fernandez', 'Legal Team Lead', 'Legal', 250000, ''),
       ('Cristian', 'Castro', 'Lawyer', 'Legal', 190000, 'Vicente Fernandez');