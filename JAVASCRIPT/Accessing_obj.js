// Accessing using the property value using square bracket []

var car = {
    name: "Tesla",
    model: "Cyber Truck",
    speed: 280,
    available: false
}

console.log(car['model']);
car['speed'] = car['speed'] + 46;
console.log(car['speed']);

car["available"] = true;
console.log(car['available'])