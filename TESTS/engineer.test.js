const testing = require('jest')
const Engineer = require('../lib/engineer')


test('Testing for Engineer Email', () => {
    const engineer = new Engineer('Becca Gaberding', 26, 'becca.gaberding@company.com', 'NHS')
    expect(engineer.getEmail()).toBe('becca.gaberding@company.com')
})

test('Testing for Guthub username', () => {
    const engineer = new Engineer('Becca Gaberding', 26, 'becca.gaberding@company.com', 'becca.gaberding')
    expect(engineer.getRole()).toBe('Engineer')
})