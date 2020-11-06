"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!")
var color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!")
//Exercises 1
var a = prompt("Please input a number");
var b = a++;
var c = ++a;
alert("Your number is " + a + "!" + " Incriments are " + a + "," + b + "," + c);
// what is the value of a, b, and c?
var username = prompt("What is your username?");
console.log("Username is " + username);
var password = prompt("what is your password");
console.log("Passowrd is " + password);
// Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

var usernameLength = username.length >= 5;
console.log(usernameLength);
var passMatch = username !== password && password.indexOf(username) == -1;
console.log(passMatch)
var usernameMax = username.length <= 20;
console.log(usernameMax)
var whitespace = username[0] !== " " && password[0] !== " ";
console.log(whitespace);
alert("Username and password meet criteria!");