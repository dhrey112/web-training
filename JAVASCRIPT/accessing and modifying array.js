var score = [75, 56, 85, 50, 34];

console.log(score[2])

score[4] = 45;
console.log(score[4]);

score[1] = score[1] + 10;
console.log(score[6])

// Accessing multi-dimensional array
var mulArr = [
    ["a", 1],
    ["b", 2],
    ["c", 3]
];

var result = mulArr[1][2];
console.log(result);

mulArr[1][0] = 10;
console.log(mulArr);