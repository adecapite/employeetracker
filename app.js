const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');
const { start } = require("repl");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3001,
  user: "root",
  password: "12345678",
  database: "tracker"
});

connection.connect(function(err) {
  if (err) throw (err)
  console.log("Connected as ID" + connection.threadId)
  startPrompt();
});

function startPrompt() {
  inquirer.prompt([{
    type: "list",
    message: "What would like to do?",
    name: "choice",
    choices: [
      "View all?",
      "View by roles?",
      "View by department?",
      "Update.",
      "Add employee?",
      "Add role?",
      "Add department?",
    ]
  }]).then(function(val) {
    switch (val.choices) {
      case 'View all?':
        viewAllEmployees();
        break;

      case "View all roles?":
        viewAllRoles();
        break;
      case "Viwe all by department":
        viewAllDepartments();
        break;

      case "Add employee?":
        addEmployee();
    }
  })

}