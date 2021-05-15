let scores = [30, 25, 94, 70, 45, 100, 150, 56]
var minVal = Number.MAX_VALUE;

for(let i = 0; i < scores.length; i++) {
    var item = scores[i];
    if(item < minVal){
        minVal = item;
    }
}
console.log("The lowest score is: " + minVal);