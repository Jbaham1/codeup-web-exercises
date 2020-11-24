function countTimer(num){
    var start = Date.now();
    console.log("Counting from 1 to " + num);
    for(var i=1; i<num; i++){
        //just counting
    }
    var end = Date.now();
    console.log("Done!");
    console.log("It took " + (end - start) + " milliseconds");
}

console.log(countTimer(100))

function fizzBuzz(num){
    for(var i = 0; i <= num; i++){
        if(i % 15 ===0){
            console.log("FizzBuzz")
            continue;
        }
        if( i % 3 ===0){
         console.log("Fizz");
         continue;
     }
        if(i % 5 === 0){
            console.log("Buzz");
            continue;
        }
       console.log(i);
    }
}

console.log(fizzBuzz(30));