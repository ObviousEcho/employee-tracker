-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Chef', 75000, 1)

-- View all employees:

SELECT E.id, E.first_name, E.last_name, R.title, D.dept_name, R.salary, M.last_name
FROM employee E
JOIN role R ON E.role_id = R.id
JOIN department D ON R.department_id = D.id
JOIN employee M ON E.manager_id = M.id


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