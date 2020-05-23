const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number - constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Hello", 1, "test@testing.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should  \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Hello", 1, "test@testing.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Get office number getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Hello", 1, "test@testing.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});