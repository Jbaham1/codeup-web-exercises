var userInput = prompt("Please enter an odd number between 1 and 50.");

while((parseFloat(userInput) % 2 ===0) || (parseFloat(userInput) <= 1) || (parseFloat(userInput)>= 50) || isNaN(parseFloat(userInput))){
    alert("Try again! That was not a valid number");
    userInput = prompt("Please enter a valid odd number between 1 and 50");
}
console.log("The number to skip is: " + userInput);
console.log("");

for(var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }
    if(i == userInput){
        console.log("Yikes! You are now skipping: " + i);

    } else {
        console.log("Here is an odd number: + " + i);
    }
}