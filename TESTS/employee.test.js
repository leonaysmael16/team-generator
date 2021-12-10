const numberPrompt = require('inquirer/lib/prompts/number')
const testing = require('jest')

const Employee = require('../lib/employee')

test('Testing name is displayedd correctly', () => {
    const employee = new Employee('Leona Ysmael', 19, 'leona.ysmael@company.com')
    expect(employee.getName()).toEqual(expect.any(String))
})

test('Testing ID is displayed correctly', () => {
    const employee = new Employee ('Leona Ysmael', 19, 'leona.ysmael@company.com')
    expect(employee.getId()).toEqual(expect.any(Number))
})

test('Testing email is displayed correctly', () => {
    const employee = new Employee ('Leona Ysmael', 19, 'leona.ysmael@company.com')
    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('Testing role is displayed correctly', () => {
    const employee = new Employee('Leona Ysmael', 19, 'leona.ysmael@company.com')
    expect(employee.getRole()).toEqual('Employee')
})