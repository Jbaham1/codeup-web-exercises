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
