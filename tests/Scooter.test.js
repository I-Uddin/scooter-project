const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  beforeAll(() => {
    testScooter = new Scooter("St Pancras");
  });

  it("checks if scooter is an object", () => {
    // edit this to be a real test!
    expect(typeof testScooter).toBe("object");
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
  it("checks if scooter repairs correctly", () => {});
  //charge method
  it("checks if scooter charges correctly", () => {});
});
