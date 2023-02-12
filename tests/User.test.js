const User = require('../src/User')

// User tests here
describe("User tests", () => {

    // User class username, password, age, and loggedIn properties initialized correctly
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

describe("user checklist tests", () => {

    beforeEach(() => {
        testUser = new User("Testy", "password", 21);
      });

    it("logs user in correctly", () => {
        expect(testUser.loggedIn).toBe(false);
        testUser.login("password");
        expect(testUser.loggedIn).toBe(true);
    })

    it("logs user out correctly", () => {
        testUser.loggedIn = true;
        expect(testUser.loggedIn).toBe(true);
        testUser.logout();
        expect(testUser.loggedIn).toBe(false);
    })

    // User cannot login if incorrect password provided
    it("doesn't log user in with incorrect password", () => {
        expect(testUser.loggedIn).toBe(false);
        expect(() => {
            testUser.login("incorrect password");
        }).toThrow(new Error("incorrect password"));
    })
});
