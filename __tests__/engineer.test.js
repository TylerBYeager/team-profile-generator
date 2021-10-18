const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");



describe("Engineer should have all the keys of employee class AND github username", () => {
    const engineer = new Engineer("Tyler", 24, "wow_d2@hotmail.com", "TylerBYeager")
    it("getGithub should return user's entered Github username", () => {
        expect(engineer.getGithub()).toBe("TylerBYeager");
    })
    it("getRole should return user's selected role", () => {
        expect(engineer.getRole()).toBe("Engineer");
    })
})