INSERT INTO department (dept_name)
VALUES  ("Engineering"),
        ("Development"),
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
        ("Regan", "Sonderlund", 1, 2),
        ("Alexander", "Dunfeld", 2, 3),
        ("Myra", "Bates", 2, 4),
        ("Duffy", "Bolinger", 3, 5),
        ("Monique", "Reyes", 3, 6),
        ("Elizabeth", "Smith", 4, 7),
        ("Jessica", "Thomas", 4, 8),
        ("Sadie", "Hill", 5, 9),
        ("Layla", "North", 5, 10),
        ("Marcus", "Brown", 6, 11),
        ("Hilde", "Templeton", 6, 12);