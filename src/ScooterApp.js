const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    this.stations = stations;
    this.registeredUsers = registeredUsers;
  }

  // ScooterApp has registerUser, loginUser and logoutUser methods
  registerUser(username, password, age) {
    // User cannot register if under age or already registered
    if (this.registeredUsers[username] != null)
      throw new Error("already registered");
    if (age < 18) throw new Error("too young to register");
    this.registeredUsers[username] = { username, password, age };
    console.log("user has been registered");
  }

  loginUser(username, password) {
    // User cannot login if not registered or incorrect password provided
    if (this.registeredUsers[username] === undefined)
      throw new Error("Username or password is incorrect");
    if (this.registeredUsers[username].password != password)
      throw new Error("Username or password is incorrect");
    this.registeredUsers[username].login(password);
  }

  logoutUser(username) {
    if (this.registeredUsers[username] === undefined)
      throw new Error("no such user is logged in");
    // User cannot logout if not logged in
    if (this.registeredUsers[username].loggedIn === false)
      throw new Error("no such user is logged in");
    this.registerUsers[username].logoutUser();
    console.log("user is logged out");
  }

  // ScooterApp has createScooter, dockScooter, and rentScooter methods
  createScooter(station) {
    // Scooter cannot be created if station does not exist
    if (this.stations[station] === undefined)
      throw new Error("no such station");
    this.stations[station].push(new Scooter(station));
  }

  dockScooter(scooter, station) {
    // Scooter cannot be docked if already docked at station, or if station does not exist
    if (this.stations[station] === undefined)
      throw new Error("no such station");
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
    // Scooter cannot be rented if it is already rented
    if (scooter.user != null) throw new Error("scooter already rented");
    this.stations[scooter.station].splice(indexOf(scooter), 1);
    scooter.user = user;
    console.log("scooter is rented");
  }
  
  // ScooterApp methods log messages to the console as specified
  // ScooterApp has print method
  print() {
    for (let userKey in this.registeredUsers)
      console.log(this.registeredUsers[userKey]);
    console.log(this.stations);
  }
}

module.exports = ScooterApp;
