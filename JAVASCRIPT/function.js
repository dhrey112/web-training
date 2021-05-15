function displayFunc(){
    console.log("Hello, I am a function")
}

// Function with parameter and argument
displayFunc();

function sumFunc(a, b){
    var result = a + b;
    console.log("The sum is: " + result)
}

sumFunc(2, 65)

// Function with return statement
function theFunc(a, b){
    return (a+b);
}

var aVar = theFunc(3, 8)
console.log(aVar);

// Function as a value
function circleArea(radius){
    var result = 3.14 * (radius**2);
    return result;
}
console.log("The area of the circle is: "+circleArea(10));


// Scope
var gVar = "Hello";
console.log(gVar);

function myFunc(){
    gVar = "World";
    console.log(gVar);
}

myFunc();
console.log(gVar);



function theFunc(){
    var localVar = "I am local";
    console.log(localVar);
}

theFunc();
console.log(localVar);



