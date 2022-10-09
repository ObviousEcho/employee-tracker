const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");
const inquirer = require("inquirer");

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
    type: "list",
    name: "view",
    message: "Please select an option.",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  },
];

const department = [
  {
    type: "input",
    name: "dept_name",
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
    console.log(`Server running on port ${PORT}`)
    await askQuestions();   
});

function askQuestions() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function addDepartment() {
  inquirer
    .prompt(department)
    .then((answers) => {
      console.log(answers);
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
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

function updateEmployee(value) {
  inquirer
    .prompt(value)
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.error(error, `Something went wront!`);
    });
}

