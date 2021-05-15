var newArr = [9, 5, 4, 7];

for (var i = 0; i < newArr.length; i++){
    var currentVal = newArr[i]; 
    console.log(currentVal);
}

console.log("This is for the multi-dimensional array");
var multi_arr = [[1,2,3,4], ["a", "b", 'c', 'd', 'e']];
for(let i = 0; i < multi_arr.length; i++){
    var child = multi_arr[i];
    for(let j = 0; j < child.length; j++){
        var item = child[j];
        console.log(item);
    }

}