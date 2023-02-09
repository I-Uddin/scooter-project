const User = require('../src/User')

// User tests here
describe("User tests", () => {

    beforeAll(() => {
        testUser = new User("Testy", "password", 21);
      });

    // test username
    it("checks username is correct", () => {
        expect(testUser).toHaveProperty("username");
        expect(testUser.username).toBe("Testy");
    });
    // test password
    it("checks password is correct", () => {
        expect(testUser).toHaveProperty("password");
        expect(testUser.password).toBe("password");
    });
    // test age
    it("checks age is correct", () => {
        expect(testUser).toHaveProperty("age");
        expect(testUser.age).toBe(21);
    });
    
    // test login
    it("checks user is logged in", () => {
        testUser.login(testUser.password);
        expect(testUser).toHaveProperty("loggedIn");
        expect(testUser.loggedIn).toBe(true);
    });
    
    // test logout
    it("checks user is logged out", () => {
        testUser.logout();
        expect(testUser).toHaveProperty("loggedIn");
        expect(testUser.loggedIn).toBe(false);
    });
    
});
