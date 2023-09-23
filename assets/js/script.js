 
 
let numberOne = prompt("entrez le premier nombre:");
 let numberTwo = prompt("entrez le deuxieme nombre:");
let sum = numberOne + numberTwo 

 numberOne = document.getElementById("number1")
 numberTwo = document.getElementById("number2")
// document.write=`la somme est: ${sum}` 
document.getElementById("result").innerHTML = sum
console.log(sum);