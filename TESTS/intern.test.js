const Intern = require('../lib/intern')

test('Testing for Intern Education', () => {
    const intern = new Intern('Alisa Tassananchalee', 27, 'alisat@company.com', 'CSU')
    expect(intern.getSchool()).toBe('CSU')
}) 

test('Testing for Interns name', () => {
    const intern = new Intern('Alisa Tassananchalee', 27, 'alisat@company.com', 'CSU')
    expect(intern.getRole()).toBe('Intern')
})