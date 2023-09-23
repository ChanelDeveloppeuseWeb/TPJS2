function yearsOldValid(){
    let age = document.getElementById("age").value

switch (age) {
    case  5:
        result = "valide"
        break;

    default:
        result = "l age est errore"
        break;
}
document.querySelector("#result").innerHTML = result
console.log(age)
}
