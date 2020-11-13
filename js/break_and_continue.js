var numToSkip = prompt("Can you give me an odd number between 1 and 50?");
    for (var i = 0; i < 10; i++) {
        if (i === num) {
            continue;
        }
        return i;
    }
}
console.log(skip(numToSkip));