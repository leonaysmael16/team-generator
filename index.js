const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');


const teamArray =[];

const generateManager = () => {
    console.log('Please answer the questions to generate your team profile')
    return inquirer.prompt([
        {
            name: 'name',
            message: 'Who will be managing this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager name')
                    return false
                }
            }
        },
        {
           name: 'manager id',
           message: 'What id number of the manager?',
           validate: idInput => { 
               if (idInput) {
                   return true;
               } else {
                   console.log('Please enter the ID number of manager')
                   return false
               }
           }
        },
        {
            name: 'phone number',
            message: 'What is the phone number of the manager?',
            validate: numberInput => {
                if (numberInput) {
                    return true
                } else {
                    console.log('Please enter a phone number')
                    return false
                }
            }
        },
        {
            name: 'email' ,
            message: ('What is the manager email?'),
            validate: emailInput => {
                if (emailInput) {
                    return true

                } else {
                    console.log('Please enter email of manager')
                    return false
                }

            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumer} = managerInput
        const manager = new Manager(name, id, email, officeNumer)
        teamArray.push(manager)
        console.log(manager)
        console.log('Successfully stored!')
    })
}

const createEmployee = () => {
    console.log('Please answer the following questions')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What will be the employees role?',
            choices: ['Intern', 'Engineer']
        },
        {
            type:'name',
            name: 'What is the name of the Employee?',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log('Please enter name to continue')
                    return false
                }
            }
        },
        {
            name: 'school',
            message: 'Where does the intern attend university?',
            when: (input) => input.role == 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true 
                } else {
                    console.log('Please enter school to enter')
                }
            }
        },
        {
            name:'GitHub username',
            message: "What is the GitHub username of Engineer",
            when: (input) => input.role == 'Engineer',
            validate: nameInput => {
                if(nameInput){
                    return true 
                } else {
                    console.log('Please enter username to continue')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCreateEmployee',
            message: 'Would you like to add more to the team?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, GitHub, school, confirmEmployee} = employeeData
        let employee
        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, GitHub)
            console.log(employee)
        } else if(role === 'Intern'){
            
        }
    })
}

function writeToFile() {
    fs.writeFile('.dist/index.html', data, err => {
        if (err){
            console.log(err)
            return
        } else {
            console.log('Team successfully made')
        }
    })
}

generateManager()
.then(createEmployee)
.then(teamArray =>{
    return generateHTML
})
.catch(err =>{
    console.log(err)
})