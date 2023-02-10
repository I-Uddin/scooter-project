const User = require("./User");

class Scooter {
  // scooter code here
  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = ++Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false;
  }


  rent(user) {
    if (this.charge < 20) throw new Error("scooter needs to charge");
    if (this.isBroken) throw new Error("scooter needs repair");
    this.station = null;
    this.user = user;
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  recharge() {
    // BONUS: Set a timer to incrementally update the Scooter’s charge to 100.

    // Every so often, log the new percentage of charge.
    this.charge = 100;
    console.log(this.charge);
  }

  requestRepair() {
    //     BONUS: Use a setInterval timer to schedule a repair in 5 seconds.
    //     When time elapses, set isBroken to false and log repair completed to the console.
    this.isBroken = false;
  }
}

module.exports = Scooter;
