class Scooter {
  // scooter code here
  // Scooter class has nextSerial class property used to assign unique serial numbers
  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = ++Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false;
  }

  // Scooter class has rent and dock methods
  rent(user) {
    // Scooter cannot be rented if it is low on charge or broken
    if (this.charge < 20) throw new Error("scooter needs to charge");
    if (this.isBroken) throw new Error("scooter needs repair");
    this.station = null;
    this.user = user;
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  async recharge() {
    // BONUS: Set a timer to incrementally update the Scooter’s charge to 100.
    // Every so often, log the new percentage of charge.
    while (this.charge < 100) {
      setTimeout(() => {}, 100);
      if (++this.charge % 25 === 0)
        console.log(`Scooter has ${this.charge}% Charge`);
    }
    console.log("Charge complete");
  }

  async requestRepair() {
    //     BONUS: Use a setInterval timer to schedule a repair in 5 seconds.
    //     When time elapses, set isBroken to false and log repair completed to the console.
    setTimeout(() => {
      this.isBroken = false;
    }, 5000);
  }
}

module.exports = Scooter;
