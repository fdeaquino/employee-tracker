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