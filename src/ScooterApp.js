const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers) {
    this.stations = stations;
    this.registeredUsers = registeredUsers;
}

registerUser(username, password, age) {
    if (this.registeredUsers[username] != null) throw new Error("already registered");
    if (age < 18) throw new Error("too young to register");
    this.registeredUsers[username] = {username,password,age};
    console.log("user has been registered");
}

loginUser(username,password) {
    if (this.registeredUsers[username] === null) throw new Error("Username or password is incorrect");
    if (this.registeredUsers[username].password != password) throw new Error("Username or password is incorrect");

    // Locate the registered user by name and call its login method.
    // Log to the console that the user has been logged in.

    // If the user cannot be located or if the password is incorrect,
    // then throw an error: Username or password is incorrect.

}



// logoutUser(username)

// Locate the registered user and call its logout method. Log user is logged out to the console.

// If the user cannot be located, throw no such user is logged in error

createScooter(station) {
  if (!this.stations.includes(station)) throw new Error("no such station");
  let scooter = new Scooter(station);
  
  // Create a new scooter, add it to the station’s scooter list, 
  // and set its station property. Log created new scooter to the console. 
  // Return the scooter. 


}

dockScooter(scooter, station) {
  this.stations[station].push(scooter);
}
// Add the scooter to the station’s scooter list, and dock it. 

// Log scooter is docked to the console.  

// Throws no such station error if the station does not exist. 

// Throws scooter already at station error if the scooter is already there.

// rentScooter(scooter, user)

// Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. Log scooter is rented to the console. 

// If the scooter is already rented, throw the error scooter already rented.

// print()

// You will use this handy method when testing your ScooterApp.

// Log the list of registered users to the console.

// Log the list of stations and how many scooters are at each station to the console.

// Take a moment to format it nicely so you can read it.
}

module.exports = ScooterApp
