const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username] != null)
      throw new Error("already registered");
    if (age < 18) throw new Error("too young to register");
    this.registeredUsers[username] = { username, password, age };
    console.log("user has been registered");
  }

  loginUser(username, password) {
    if (this.registeredUsers[username] === undefined)
      throw new Error("Username or password is incorrect");
    if (this.registeredUsers[username].password != password)
      throw new Error("Username or password is incorrect");
    this.registeredUsers[username].login(password);
  }

  logoutUser(username) {
    if (this.registeredUsers[username] === undefined)
      throw new Error("no such user is logged in");
    this.registerUsers[username].logoutUser();
    console.log("user is logged out");
  }

  createScooter(station) {
    if (this.stations[station] === undefined) throw new Error("no such station");
    this.stations[station].push(new Scooter(station));
  }

  dockScooter(scooter, station) {
    if (this.stations[station] === undefined) throw new Error("no such station");
    if (this.stations[station].includes(scooter))
      throw new Error("scooter already at station");
    this.stations[station].push(scooter);
    scooter.dock(station);
    // BONUS
    // Messages logged to the console have more specific information
    // e.g. scooter #10 is docked instead of scooter is docked
    console.log(`scooter #${scooter.serial} is docked`);
  }

  rentScooter(scooter, user) {
    if (scooter.user != null) throw new Error("scooter already rented");
    this.stations[scooter.station].splice(indexOf(scooter), 1);
    scooter.user = user;
    console.log("scooter is rented");
  }

  print() {
    for (let userKey in this.registeredUsers)
      console.log(this.registeredUsers[userKey]);
    console.log(this.stations);
  }
}

module.exports = ScooterApp;
