// Using backtick ` in string
var myString = `The boy is just ${20+2}`;

console.log(myString)

var myVal = 20;
var myString2 = `I have ${myVal} apples`
console.log(myString2)

// Escaping strings
var newString = "It is mr Ovie's dog";
console.log(newString)

var newString1 = "Mr Audu said, \"It is Ade's\"";
console.log(newString1)

// String properties
var newString2 = "Just a string";
console.log("The length is " + newString2.length)
var iVar = newString.indexOf('e');
var lVar = newString2.lastIndexOf('s');
var cVar = myString2.charAt(10);

console.log(iVar);
console.log(lVar);
console.log(cVar);

console.log("\nThis is slice and split method")
var sVar = myString.slice(0, 4)
var ssVar = myString2.split("");

console.log(sVar);
console.log(ssVar);