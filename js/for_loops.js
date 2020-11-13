
// Exercise 2
function showMultiplicationTable(num) {
 for(var count = 1; count < 11; count++){
     console.log(num + " x " + count + " = " + (num * count));
 }
}
showMultiplicationTable(7)

//Exercise 3
for(var count = 1; count <= 10; count++){
    var random = Math.floor(Math.random() * (200 - 20 + 1) ) + 20;
    if(random % 2 === 0){
        console.log(random +" is even");
    } else {
        console.log(random + " is odd.")
    }
}

//Exercise 4

for(var i = 1; i < 10; i++){
    var count= i.toString()
    console.log(count.repeat(i));
}
//Exercise 5
for(var i = 100; i > 0; i-=5){
   console.log(i)
}