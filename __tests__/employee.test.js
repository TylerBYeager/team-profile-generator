const Employee = require("../lib/employee");


describe("Employee class will have all keys and functions will work", () => {
    const employee = new Employee("Tyler", 24, "wow_d2@hotmail.com")
    it("getName should return user's entered name", () => {
       expect(employee.getName()).toBe("Tyler"); 
    })
    it("getID should return a user's entered id number", () => {
        expect(employee.getId()).toBe(24);
    })
    it("getEmail should return a user's entered email address", () => {
        expect(employee.getEmail()).toBe("wow_d2@hotmail.com");
    })
    it("getRole should return a user's selected role", () => {
        expect(employee.getRole()).toBe("Employee");
    })
})