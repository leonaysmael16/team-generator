const Employee = require("./employee")
class Manager extends Employee {
    constructor(name, officeNumber, email, id) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }

}

module.exports = Manager