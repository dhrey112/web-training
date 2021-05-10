let gender = "male";
let isAfrican = false;

if (gender === "female" && isAfrican === true) {
    console.log("100% scholarship");
} else if (gender === "female" || isAfrican === true) {
    console.log("80% scholarship.")
} else {
    console.log("50% scholarship")
}