const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')


// ScooterApp tests here
describe("ScooterApp tests", () => {

    beforeEach(() => {
        testScooterApp = new ScooterApp({"St Pancras": [], "Canary Wharf": [], "Paddington": []}, {})
    });

    // ScooterApp stations and registeredUsers properties initialized correctly
    describe("scooterApp object", () => {
        it("checks if stations initialized correctly", () => {
            expect(testScooterApp).toHaveProperty("stations");
            expect(testScooterApp.stations).toStrictEqual({"St Pancras": [], "Canary Wharf": [], "Paddington": []});
        });

        it("checks if registerdUsers initialized correctly", () => {
            expect(testScooterApp).toHaveProperty("registeredUsers");
            expect(testScooterApp.registeredUsers).toStrictEqual({});
        });
    });

    // ScooterApp has registerUser, loginUser and logoutUser methods
    // register user
    it("checks if user has registered correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        let result = new User("Andy", "1337", 94);
        expect(testScooterApp.registeredUsers["Andy"]).toStrictEqual(result);
    });

    // User cannot register if under age or already registered
    it("checks if user cannot register if under age", () => {
        expect(() => {
            testScooterApp.registerUser("Andy", "1337", 13);
        }).toThrow(new Error("too young to register"));
    });

    it("checks if user cannot register if already registered", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        expect(() => {
            testScooterApp.registerUser("Andy", "1337", 94);
        }).toThrow(new Error("already registered"));
    });

    // log in
    it("checks if user can log in correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        expect(testScooterApp.registeredUsers["Andy"].loggedIn).toBe(false);
        testScooterApp.loginUser("Andy", "1337");
        expect(testScooterApp.registeredUsers["Andy"].loggedIn).toBe(true);
    });

    // log out
    it("checks if user can log out correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.registeredUsers["Andy"].loggedIn = true;
        expect(testScooterApp.registeredUsers["Andy"].loggedIn).toBe(true);
        testScooterApp.logoutUser("Andy");
        expect(testScooterApp.registeredUsers["Andy"].loggedIn).toBe(false);
    });

    // User cannot login if not registered
    it("checks if user cannot login if not registered", () => {
        expect(() => {
            testScooterApp.loginUser("Andy", "1337");
        }).toThrow(new Error("Username not recognised"));
    });

    // User cannot login if incorrect password provided
    it("checks if user cannot login if incorrect password provided", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        expect(() => {
            testScooterApp.loginUser("Andy", "incorrect password");
        }).toThrow(new Error("Username or password is incorrect"));
    });

    // User cannot logout if not logged in
    it("checks if user cannot logout if not logged in", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        expect(() => {
            testScooterApp.logoutUser("Andy");
        }).toThrow(new Error("no such user is logged in"));
    });






    
    // rent scooter
    
    // dock scooter

});