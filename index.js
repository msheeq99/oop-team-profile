const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];
const src = require("./src/page-template");




const questions = (data) => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the team manager's name?(Required)`,
            validate: name => {
                if(name) {
                    return true;
                } else {
                    console.log(`Please enter the team manager's name!`);
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the team manager's id?(Required)`,
            validate: id => {
                if(id) {
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
            validate: email => {
                if(email) {
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
            validate: office => {
                if(office) {
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
        const { name, id, email, office, extraEmployee } = data;
        const manager = new Manager(name, id, email, office);

        employees.push(manager);

        return extraEmployee;
    });
};


const addEmployee = (data) => {
    if(data === 'Add Engineer') {
        return inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What is the engineer's name?(Required)`,
                validate: name => {
                    if(name) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's name!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `id`,
                message: `What is the engineer's id?(Required)`,
                validate: id => {
                    if(id) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's id!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `email`,
                message: `What is the engineer's email?(Required)`,
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's email!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `github`,
                message: `What is the engineer's GitHub username?(Required)`,
                validate: github => {
                    if(github) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's GitHub username!`);
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
            const { name, id, email, github, extraEmployee } = data;
            const engineer = new Engineer(name, id, email, github);

            employees.push(engineer);
           

            addEmployee(extraEmployee);
        })
    }

    else if (data === 'Add Intern') {
        return inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What is the intern's name?(Required)`,
                validate: name => {
                    if(name) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's name!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `id`,
                message: `What is the intern's id?(Required)`,
                validate: id => {
                    if(id) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's id!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `email`,
                message: `What is the intern's email?(Required)`,
                validate: email => {
                    if(email) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's email!`);
                        return false;
                    }
                }
            },
            {
                type: `input`,
                name: `school`,
                message: `What is the intern's school name?(Required)`,
                validate: school => {
                    if(school) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's school name!`);
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
            const { name, id, email, school, extraEmployee } = data;
            const intern = new Intern(name, id, email, school);


            employees.push(intern);
            

            addEmployee(extraEmployee);
            
        })
    }
    
    if (data === 'Finish building my team') {
        
        
       src(employees);
       

    }
    console.log("Team done!")
    

};

questions()
  .then(data => {
      addEmployee(data)
     
  })
  .catch(err => {
      console.log(err);
  });



