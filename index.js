const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];


const newStaffMemberData = [];

const questions = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the team manager's name?(Required)`,
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `i6d`,
            message: `What is the team manager's id?(Required)`,
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's id!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the team manager's email?(Required)`,
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's email!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `office`,
            message: `What is the team manager's office number?(Required)`,
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's office number!`);
                    return false;
                }
            }
        },
        {
            type: `list`,
            name: `extraEmployee`,
            message: `Would you like to add another employee?`,
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
        }
        
    ])
    .then(data => {
        const { name, id, email, officeNumber, extraEmployee } = data;
        const manager = new Manager(name, id, email, officeNumber);

        employees.push(manager);

        return extraEmployee;
    });
};


  questions();
 


//   if (answers.role === async, "Manager") {
//     const managerAns = await inquirer
//       .prompt([
//         {
//           type: "input",
//           message: "What is your office number",
//           name: "officeNumber",
//         },
//       ])
//       const newManager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         managerAns.officeNumber
//       );
//       newStaffMemberData.push(newManager);

//     } else if (answers.role === "Engineer") {
//         const githubAns = await inquirer
//           .prompt([
//             {
//               type: "input",
//               message: "What is your GitHub user name?",
//               name: "github",
//             }
//           ])
//             const newEngineer = new Engineer(
//               answers.name,
//               answers.id,
//               answers.email,
//               githubAns.github
//             );
//             newStaffMemberData.push(newEngineer);
          

//       };


