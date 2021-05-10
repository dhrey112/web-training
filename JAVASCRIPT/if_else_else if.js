let hasAccount = "No";

if (hasAccount === "Yes"){

    console.log("Citizen is qualified");
} else {
    console.log("Citizen is not qualified");
}


let hasWallet = "Yes"

if (hasAccount === "Yes"){
    console.log("Citizen is qualified");
} else if (hasWallet === "Yes"){
    console.log("Citizen is qualified because Citizen has mobile wallet");
}else{
    console.log("Citizen is not qualified");
}

