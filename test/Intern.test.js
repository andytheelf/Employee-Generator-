const Intern = require("../lib/Intern");

test("Can set school - constructor", () => {
    const testValue = "UTA";
    const e = new Intern("Hello", 1, "test@testing.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Hello", 1, "test@testing.com", "UTA");
    expect(e.getRole()).toBe(testValue);
});

test("Get school getSchool()", () => {
    const testValue = "UTA";
    const e = new Intern("Hello", 1, "test@testing.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});