var studentInfo = {

    // property : property value
    studentName: "John Bull",
    age: 17,
    admitted: true,
    hobbies: ['reading', 'gaming', 'running']
}

console.log(studentInfo);

// Accessing the object  primitive value
console.log(studentInfo.studentName);

// Modifying the object property
studentInfo.studentName = "Balikees";
studentInfo.age = studentInfo.age + 1;

console.log(studentInfo);

//  Modifying the object Array
studentInfo.hobbies[2] = "hiking";
studentInfo.hobbies.push('swimming');
console.log(studentInfo);