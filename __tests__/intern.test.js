const Intern = require("../lib/intern");
const Employee = require("../lib/employee");


describe("Intern should contain all the keys of the Employee class AND school information", () => {
    const intern = new Intern("Tyler", 24, "wow_d2@hotmail.com", "UCA")
    it("getSchool should return the user's entered school information", () => {
        expect(intern.getSchool()).toBe("UCA");
    })
    it("getRole should return the user's entered role", () => {
        expect(intern.getRole()).toBe("Intern");
    })
})