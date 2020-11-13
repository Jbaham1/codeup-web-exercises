var numToSkip = prompt("Can you give me an odd number between 1 and 50?");

function skip(num) {
    while(num % 2 ===0 || num > 50 || num < 1){
        numToSkip = prompt("Try again. Please give me an odd number between 1 and 50?");
    }
    for (var i = 1; i < 10; i+=2) {
            if (i === numToSkip) {
            console.log("Yikes you're skipping " + numToSkip);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
skip(numToSkip)