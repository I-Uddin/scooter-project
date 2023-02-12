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

        it("checks if registeredUsers initialized correctly", () => {
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

    // ScooterApp has createScooter, dockScooter, and rentScooter methods

    // create scooter
    it("checks createScooter method works correctly", () => {
        testScooterApp.createScooter("St Pancras");
        let testScooter = new Scooter("St Pancras");
        testScooter.serial = 1;
        expect(testScooterApp.stations["St Pancras"][0]).toStrictEqual(testScooter);
    });

    // Scooter cannot be created if station does not exist
    it("checks scooter cannot be created if station does not exist", () => {
        expect(() => {
            testScooterApp.createScooter("Moon Base");
        }).toThrow(new Error("no such station"));
    });
    
    // rent scooter
    it("checks scooter rents correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.createScooter("St Pancras");
        expect(testScooterApp.stations["St Pancras"].length).toBe(1);
        let testScooter = testScooterApp.stations["St Pancras"][0]
        let testUser = testScooterApp.registeredUsers["Andy"];
        testScooterApp.rentScooter(testScooter,testUser)
        expect(testScooterApp.stations["St Pancras"].length).toBe(0);
        expect(testScooter.user).toBe(testUser); 
    });
    
    // dock scooter
    it("checks scooter docks correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.createScooter("St Pancras");
        let testScooter = testScooterApp.stations["St Pancras"][0]
        let testUser = testScooterApp.registeredUsers["Andy"];
        testScooterApp.rentScooter(testScooter,testUser)
        expect(testScooterApp.stations["St Pancras"].length).toBe(0);
        expect(testScooter.user).toBe(testUser); 
        testScooterApp.dockScooter(testScooter, "St Pancras");
        expect(testScooterApp.stations["St Pancras"].length).toBe(1);
    });

    // Scooter cannot be docked if already docked at station
    it("checks scooter cannot be docked if already docked at station", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.createScooter("St Pancras");
        let testScooter = testScooterApp.stations["St Pancras"][0]
        expect(() => {
            testScooterApp.dockScooter(testScooter, "St Pancras");
        }).toThrow(new Error("scooter already at station"));
    });

    // Scooter cannot be docked if station does not exist
    it("checks scooter cannot be docked if station does not exist", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.createScooter("St Pancras");
        let testScooter = testScooterApp.stations["St Pancras"][0]
        expect(() => {
            testScooterApp.dockScooter(testScooter, "Moon base");
        }).toThrow(new Error("no such station"));
    });

    // Scooter cannot be rented if it is already rented
    it("checks scooter cannot be docked if station does not exist", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        testScooterApp.createScooter("St Pancras");
        let testScooter = testScooterApp.stations["St Pancras"][0]
        let testUser = testScooterApp.registeredUsers["Andy"];
        testScooterApp.rentScooter(testScooter,testUser);
        expect(() => {
            testScooterApp.rentScooter(testScooter,testUser);
        }).toThrow(new Error("scooter already rented"));
    });

    // ScooterApp methods log messages to the console as specified
    // ScooterApp has print method
    it("checks the print method log messages to the console as specified", () => {
        const logSpy = jest.spyOn(global.console, 'log');
        testScooterApp.print();
        expect(logSpy).toHaveBeenCalledWith({}, {"Canary Wharf": [], "Paddington": [], "St Pancras": []});
        logSpy.mockRestore();
    });

});