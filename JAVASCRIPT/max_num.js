let scores = [30, 25, 94, 70, 45, 100, 150, 56]
var maxVal = -Number.MAX_VALUE;

for(let i = 0; i < scores.length; i++) {
    var item = scores[i];
    if(item > maxVal){
        maxVal = item;
    }
}
console.log("The maximum score is: " + maxVal);