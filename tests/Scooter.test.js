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
    let testUser = new User("a", "pass", 20);
    testScooter.rent(testUser);
    expect(testScooter.user).toBe(testUser);
  });

  // Scooter cannot be rented if it is low on charge or broken
  it("checks if scooter cannot be rented if it is low on charge", () => {
    let testUser = new User("a", "pass", 20);
    testScooter.charge = 0;
    expect(() => {
      testScooter.rent(testUser)
    }).toThrow(new Error("scooter needs to charge"));
  });

  it("checks if scooter cannot be rented if it is broken", () => {
    let testUser = new User("a", "pass", 20);
    testScooter.isBroken = true;
    expect(() => {
      testScooter.rent(testUser);
    }).toThrow(new Error("scooter needs repair"));
  });

  //dock method
  it("checks if scooter docks correctly", () => {
    testScooter.dock("Paddington");
    expect(testScooter.station).toBe("Paddington");
  });

  //requestRepair method
  it("checks if scooter repairs correctly", () => {
    testScooter.isBroken = true;
    testScooter.requestRepair();
    setTimeout(() => {
      expect(testScooter.isBroken).toBe(false);
    }, 6000);
  });

  //charge method
  it("checks if scooter charges correctly", () => {
    testScooter.charge = 80;
    testScooter.recharge();
    setTimeout(() => {
      expect(testScooter.charge).toBe(100);
    }, 4500);
  });
});

// Scooter class has nextSerial class property used to assign unique serial numbers
describe("scooter coding rooms checklist", () => {});
