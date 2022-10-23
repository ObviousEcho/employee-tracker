-- Add role:

-- INSERT INTO role (title, salary, department_id)
-- VALUES ('Chef', 75000, 1)

-- View all employees:

-- SELECT E.id, E.first_name, E.last_name, R.title, D.dept_name, R.salary, M.last_name AS manager
-- FROM employee E
-- JOIN role R ON E.role_id = R.id
-- JOIN department D ON R.department_id = D.id
-- JOIN employee M ON E.manager_id = M.id


-- Update employee:

-- SELECT role.department_id
-- FROM role
-- WHERE role.title = 'Agent'

-- UPDATE employee
-- SET role_id = 4, manager_id = 4
-- WHERE first_name = 'Marcus' AND  last_name = 'Brown'

