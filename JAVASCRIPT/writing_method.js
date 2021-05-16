var studentInfo = {

    // property : property value
    studentName: "John Bull",
    age: 17,
    admitted: true,
    hobbies: ['reading', 'gaming', 'running'],
//    Method or function expression
    makeSound: function (){
        console.log(studentInfo.studentName, "said meeeeeh");
    }
}

studentInfo.makeSound();


var studentInfo2 = {

    // property : property value
    studentName: "John Bull",
    age: 17,
    admitted: true,
    hobbies: ['reading', 'gaming', 'running'],
    greeting: function (endWord){
        console.log("The student said, "+endWord);
    }
}

console.log(studentInfo2.greeting);
studentInfo2.greeting("Hello");

// Modifying method
studentInfo.makeSound = function(sound){
    console.log("The student modifying the method, said: ", sound);
}

// console.log(studentInfo.makeSound)
studentInfo.makeSound("woof!")

studentInfo.greeting = function(theGreeting, time){
    console.log("The student said, ", theGreeting + ", this ", time)
}

studentInfo.greeting("Hello", "morning")
