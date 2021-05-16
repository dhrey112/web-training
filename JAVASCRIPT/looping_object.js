// For.....in loop is use to access the value in object property

var car = {
    name: "Tesla",
    model: "Cyber Truck",
    speed: 280,
    available: false
}

for (let i in car){
    // console.log(i);
    console.log(i, car[i]);
}