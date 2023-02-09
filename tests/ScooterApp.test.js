const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe("ScooterApp tests", () => {

    beforeAll(() => {
        testScooterApp = new ScooterApp({"St Pancras": [], "Canary Wharf": [], "Paddington": []}, {"Gary": new User("Gary", "Password", 21), "Steve":new User("Steve", "pass", 12)})
    });

    // ScooterApp tests here
    
    // register user
    it("checks if user has registered correctly", () => {
        testScooterApp.registerUser("Andy", "1337", 94);
        expect(testScooterApp.registeredUsers["Andy"]).toStrictEqual({username:"Andy", password:"1337", age:94});
    });
    // log in
    
    // log out
    
    // rent scooter
    
    // dock scooter
    
});