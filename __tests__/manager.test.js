const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager class will have all the keys of Employee class AND an office number", () => {
    const manager = new Manager("Tyler", 24, "wow_d2@hotmail.com", 1024)
    it("getNumber should return the user's entered office number", () => {
        expect(manager.getNumber()).toBe(1024);
    })
    it("getRole should return user's entered role", () => {
        expect(manager.getRole()).toBe("Manager");
    })
})