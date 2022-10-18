const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_db database!`)
);

const questions = [
  {
    type: "rawlist",
    name: "view",
    message: "Please select an option.",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ],
  },
];

const department = [
  {
    type: "input",
    name: "deptName",
    message: "What department name would you like to add?",
  },
];

const role = [
  {
    type: "input",
    name: "roleName",
    message: "What is the name of this new role?",
  },

  {
    type: "input",
    name: "salary",
    message: "What is the annual salary?",
    validate(value) {
      const pass = value.match(/^[0-9]+$/);
      if (pass) {
        return true;
      }
      return "Please enter a numeric value.";
    },
  },

  {
    type: "input",
    name: "department",
    message: "Please enter department id.",
  },
];

const employee = [
  {
    type: "input",
    name: "firstName",
    message: "Please enter the employee's first name.",
  },

  {
    type: "input",
    name: "lastName",
    message: "Please enter the employee's last name.",
  },

  {
    type: "input",
    name: "role",
    message: "Please enter the employee's role.",
  },

  {
    type: "input",
    name: "managerId",
    message: "Please enter the employee's manager id.",
    validate(value) {
      const pass = value.match(/^[0-9]+$/);
      if (pass) {
        return true;
      }
      return "Please enter a numeric value.";
    },
  },
];

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}\n`);
  await askQuestions();
});

function askQuestions() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      switch (answers.view) {
        case "View all departments":
          viewAllDepts();
          break;

        case "View all roles":
          viewAllRoles();
          break;

        case "View all employees":
          viewAllEmployees();
          break;

        case "Add a department":
          console.log("add a department");
          addDepartment();
          break;

        case "Add a role":
          console.log("add a role");
          addRole();
          break;

        case "Add an employee":
          console.log("add an employee");
          addEmployee();
          break;

        case "Update an employee role":
          console.log("update an employee");
          updateEmployee();
          break;

        case "Quit":
          askQuestions();
          break;
      }
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function addDepartment() {
  inquirer
    .prompt(department)
    .then((answers) => {
      insertDept(answers.deptName);
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function addRole() {
  inquirer
    .prompt(role)
    .then((answers) => {
      console.log(answers);
      insertRole(answers.roleName, answers.salary, answers.department);
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function addEmployee() {
  inquirer
    .prompt(employee)
    .then((answers) => {
      console.log(answers);
      insertEmployee(
        answers.firstName,
        answers.lastName,
        answers.role,
        answers.managerId
      );
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function updateEmployee() {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res);
    const nameArray = res.map((obj) => {
      return `${obj.first_name} ${obj.last_name}`;
    });

    const whichEmployee = [
      {
        type: "rawlist",
        name: "empName",
        message: "Which employee would you like to update?",
        choices: nameArray,
      },

      {
        type: "input",
        name: "empRole",
        message: "What is the employee's new role?",
      },
    ];
    inquirer
      .prompt(whichEmployee)
      .then((answers) => {
        const nameArr = answers.empName.split(" ");
        const [fName, lName] = nameArr;
        updateEmployeeAndRole(fName, lName, answers.empRole);
      })
      .catch((error) => {
        console.error(error, `Something went wront!`);
      });
  });
}

function viewAllDepts() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(`${res.status(500)} Something went wrong!`);
      return;
    }
    console.table("\nDepartments:", rows);
    askQuestions();
  });
}

function viewAllRoles() {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(`${res.status(500)} Something went wrong!`);
      return;
    }
    console.table("\nRoles:", rows);
    askQuestions();
  });
}

function viewAllEmployees() {
  const sql = `SELECT E.id, E.first_name, E.last_name, R.title, D.dept_name, R.salary, M.last_name AS manager
  FROM employee E
  JOIN role R ON E.role_id = R.id
  JOIN department D ON R.department_id = D.id
  JOIN employee M ON E.manager_id = M.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table("\nEmployees:", rows);
    askQuestions();
  });
}

function insertDept(dept) {
  const sql = `INSERT INTO department (dept_name) VALUES (?)`;
  const params = `${dept}`;

  db.query(sql, params, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`\n Department added successfully!`);
    askQuestions();
  });
}

function insertRole(title, salary, dept) {
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?)`;
  const params = [title, salary, dept];

  db.query(sql, [params], (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`\n New role added successfully!`);
    askQuestions();
  });
}

function insertEmployee(fName, lName, role, manager) {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)`;
  const params = [fName, lName, role, manager];

  db.query(sql, [params], (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`\n New role added successfully!`);
    askQuestions();
  });
}

function updateEmployeeAndRole(fName, lName, role) {
  const sql = `UPDATE employee SET role_id = (?) WHERE first_name = ${fName} AND last_name = ${lName}`;
  const params = `${role}`;

  db.query(sql, params, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`\n Employee updated successfully!`);
    askQuestions();
  });
}
