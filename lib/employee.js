class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName();

    getId();

    getEmail();

    getRole();
}
const employee = new Employee();


module.exports = Employee;