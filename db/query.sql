INSERT INTO role (title, salary, department_id)
VALUES ('Chef', 75000, 1)

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
-- INNER JOIN employee ON employee.role_id = role.id 