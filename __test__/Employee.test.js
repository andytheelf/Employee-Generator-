const Employee = require("../lib/Employee");

test("Instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Andrea";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Hello", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email constructor argument", () => {
    const testValue = "test@testing.com";
    const e = new Employee("Hello", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name getName()", () => {
    const testValue = "Andrea";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id getId()", () => {
    const testValue = 100;
    const e = new Employee("Hello", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email getEmail()", () => {
    const testValue = "test@testing.com";
    const e = new Employee("Hello", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Andrea", 1, "test@testing.com");
    expect(e.getRole()).toBe(testValue);
});