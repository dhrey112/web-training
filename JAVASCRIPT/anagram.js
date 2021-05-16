function isAnagram(string1, string2){
      var strLow1 = string1.toLowerCase();
      var strLow2 = string2.toLowerCase();

      var strArray1 = strLow1.split("");
      var strArray2 = strLow2.split("");

      var sortedArray1 = strArray1.sort();
      var sortedArray2 = strArray2.sort();

      var sortedString1 = sortedArray1.join("");
      var sortedString2 = sortedArray2.join("");
    return sortedString1 == sortedString2
}


var result = isAnagram("peach", 'cheap')
console.log(result);

function isAnagram2(string1, string2){
    var sortedString1 = string1.toLowerCase().split("").sort().join("");
    var sortedString2 = string2.toLowerCase().split("").sort().join("");

    return sortedString1 == sortedString2;
}

var result2 = isAnagram2("are", "rea")
console.log(result2)