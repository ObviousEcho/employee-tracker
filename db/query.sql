-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Chef', 75000, 1)

-- View all employees:

-- SELECT first_name, last_name, title, dept_name, salary
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON employee.role_id = department.id


-- Update employee:

-- SELECT first_name, last_name
-- FROM employee
-- INNER JOIN role ON employee.role_id = role.department_id

-- UPDATE role
-- SET title = 'shmuck'
-- WHERE id = 5

-- UPDATE role
-- SET title = 'test'
-- FROM role
-- JOIN employee ON employee.role_id = role.id 

-- SELECT first_name, last_name, title
-- FROM employee
-- JOIN role ON employee.role_id = role.id