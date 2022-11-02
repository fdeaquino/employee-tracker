DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    ID INT PRIMARY KEY AUTO_INCREMENT, 
    DepartmentName VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    DepartmentName VARCHAR(30) NOT NULL,
    DepartmentID INT NOT NULL,
    FOREIGN KEY (DepartmentId) REFERENCES departments(ID)
);

-- TODO: Do any fields need to reference foreign keys? Doesn't say in acceptance criteria. 
CREATE TABLE employees (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    Title VARCHAR(30) NOT NULL,
    Department VARCHAR(30) NOT NULL,
    Salary DECIMAL NOT NULL,
    Manager VARCHAR(30)
);