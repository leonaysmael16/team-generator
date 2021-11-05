const employee = require('./lib/employee.js')
const manager = require('./lib/manager.js')
const engineer = require('./lib/engineer.js')
const intern = require('./lib/intern.js')
const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')

const teamArray =[ ]

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
}