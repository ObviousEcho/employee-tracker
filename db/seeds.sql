INSERT INTO department (dept_name)
VALUES  ("Engineering"),
        ("SoftWare Development"),
        ("Marketing"),
        ("Customer Service"),
        ("Human Rescources"),
        ("Call Center");

INSERT INTO role (title, salary, department_id)
VALUES  ("Engineer", 150000, 1),
        ("Sr Developer", 140000, 2),
        ("Sr Advertiser", 130000, 3),
        ("Agent", 120000, 4),
        ("Director", 110000, 5),
        ("Rep", 100000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Mallory", "Feather", 1, 1),
        ("Regan", "Sonderlund", 1, 1),
        ("Alexander", "Dunfeld", 2, 2),
        ("Myra", "Bates", 2, 2),
        ("Duffy", "Bolinger", 3, 3),
        ("Monique", "Reyes", 3, 3),
        ("Elizabeth", "Smith", 4, 4),
        ("Jessica", "Thomas", 4, 4),
        ("Sadie", "Hill", 5, NULL),
        ("Layla", "North", 5, NULL),
        ("Marcus", "Brown", 6, 6),
        ("Hilde", "Templeton", 6, 6);