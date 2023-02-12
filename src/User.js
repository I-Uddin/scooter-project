class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  // User class has login and logout methods
  login(password) {
    // User cannot login if incorrect password provided
    if (this.password != password) throw new Error("incorrect password");
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User;
