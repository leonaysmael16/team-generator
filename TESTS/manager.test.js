const { testing } = require('jest')
const Manager = require('../lib/manager.js')
const manager = require('./lib/manager.js')

test('Testing for managers number', ()=> {
    const manager = new Manager('Matthew Bonner', 23,'matt.bonner@company.com', 8)
    expect(manager.officeNumber).toBe(8)
})

test('Testing for role', () => {
    const manager = new Manager('Matthew Bonner', 23,'matt.bonner@company.com', 8)
    expect(manager.getRole()).toBe('Manager')
})  