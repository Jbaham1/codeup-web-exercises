"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(input){
    if(input === "red"){
        return "Apples are red."
} else if(input === "blue") {
        return "The ocean in Tahiti is blue";
    } else if (input === "cyan"){
    return "I don't know anything about cyan"
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(input){
    switch(input){
        case "red":
            return "Apples are red.";
            break;
        case "orange":
            return "Traffic cones are orange";
            break;
        case "yellow":
            return "Bananas are yellow";
        case "green":
            return "Grass is green";
        case "blue":
            return "The ocean in Tahiti is blue";
        default:
            return "I dont know anything that color";
    }
}
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
function analyzeColor(input){
    switch(input){
        case "red":
            return "Apples are red.";
            break;
        case "orange":
            return "Traffic cones are orange";
            break;
        case "yellow":
            return "Bananas are yellow";
        case "green":
            return "Grass is green";
        case "blue":
            return "The ocean in Tahiti is blue";
        default:
            return "I dont know anything that color";
    }
}
console.log(analyzeColor(prompt ("Pick a color! ANY COLOR!!")));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor(Math.random() * (5 - 0)) + 0;

function calculateTotal(luckyNum, total){
    switch(luckyNum){
        case 0:
            return total;
        case 1:
            return total - (total * .1);
        case 2:
            return total - (total * .25);
        case 3:
            return total- (total * .35);
        case 4:
            return total - (total * .50)
        case 5:
            return 0
        default:
            return total;
    }

}
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill in whole numbers?")

alert("Your lucky number was: " + luckyNumber)
alert("Your price before discount was $" + totalBill)
alert("your new total after discount is: " + calculateTotal(luckyNumber,(totalBill)));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
function calculateTotal(luckyNum, total){
    switch(luckyNum){
        case 0:
            return total;
        case 1:
            return total - (total * .1);
        case 2:
            return total - (total * .25);
        case 3:
            return total- (total * .35);
        case 4:
            return total - (total * .50)
        case 5:
            return 0
        default:
            return total;
    }

}
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill in whole numbers?")

alert("Your lucky number was: " + luckyNumber)
alert("Your price before discount was $" + totalBill)
alert("your new total after discount is: " + calculateTotal(luckyNumber,(totalBill)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterOrNot = confirm("Do you want to enter a number?");
if(enterOrNot){
    var userNumber = prompt("Please type in a number.");
    if(typeof parseFloat(userNumber) === "number"){
        userNumber = parseFloat(userNumber)
    if(isEven(userNumber)){
        alert("Your number is even.")
    } else {
        alert("Your number is odd.")
    }
    }else {
        alert("That is not a valid number")
    }
    alert("Your number + 100 is " + addHundred(userNumber))
    if(isNegative(userNumber)){
        alert("Your number is negative.")
    } else{
        alert("Your number is positive.")
    }
}
function isEven(number){
    return number % 2 === 0
}
function addHundred(number){
    return number + 100;
}
function isNegative(number){
    if(0 > number){
        return true;
    } else {
        return false;
    }

}

