const Engineer = require("../lib/Engineer");

test("GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hello", 1, "test@testing.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Hello", 1, "test@testing.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Hello", 1, "test@testing.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});