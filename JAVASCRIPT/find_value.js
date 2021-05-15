let scores = [30, 25, 94, 70, 45, 100, 150, 56]
var findVal;
var valueFound = false;
findVal = 94;

for(let i = 0; i < scores.length; i++) {
    var item = scores[i];
    if(item === findVal) {
        valueFound = true;
    }
}
console.log(valueFound)