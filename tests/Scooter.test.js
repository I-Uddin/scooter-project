const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeAll(() => {
    testScooter = new Scooter("St Pancras");
  });

  it("expects scooter be an object", () => {
    // edit this to be a real test!
    expect(typeof testScooter).toBe("object");
  });

  // Scooter class station, user, serial, charge, and isBroken properties initialized correctly
  it("checks if station, user, serial, charge, and isBroken properties initialized correctly", () => {
    expect(testScooter).toHaveProperty("station");
    expect(testScooter.station).toBe("St Pancras");

    expect(testScooter).toHaveProperty("user");
    expect(testScooter.user).toBe(null);

    expect(testScooter).toHaveProperty("serial");
    expect(testScooter.serial).toBe(1);

    expect(testScooter).toHaveProperty("charge");
    expect(testScooter.charge).toBe(100);

    expect(testScooter).toHaveProperty("isBroken");
    expect(testScooter.isBroken).toBe(false);
  });
  });

//Method tests
describe("scooter methods", () => {

  beforeEach(() => {
    testScooter = new Scooter("St Pancras");
  });
  // tests here!

  //rent method
  it("checks if scooter rents correctly", () => {
    testScooter.rent();
  });
  //dock method
  it("checks if scooter docks correctly", () => {});
  //requestRepair method
  it("checks if scooter repairs correctly", () => {
    testScooter.isBroken = true;
    console.log(testScooter.isBroken);
    testScooter.requestRepair();
    console.log(testScooter.isBroken);
  });
  //charge method
  it("checks if scooter charges correctly", () => {
    testScooter.charge = 0;
    testScooter.recharge();
    expect(testScooter.charge).toBe(100);
  });
});
