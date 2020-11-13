var count = 1
while(count <= 65536){
    console.log(count);
    count *=2
}

var allCones = Math.floor(Math.random()*50)+50;
console.log("I have this many cones to sell: " + allCones);

do{
  var conesPurchased =  Math.floor(Math.random()*5)+1;
  if(conesPurchased > allCones){
      console.log("Can't sell you that many cones. You wanted " + conesPurchased + ", but I only have " + allCones)
  } else {
      allCones = allCones - conesPurchased;
      console.log("Here are your " + conesPurchased + " cones! I have " + allCones + " left.")
  }

} while(allCones > 0)

console.log("I've sold all of my cones! Time to go home!")