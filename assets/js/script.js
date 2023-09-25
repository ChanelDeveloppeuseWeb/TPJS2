
function yearsOldValid(){
    let age = document.getElementById("age").value
    if (age <= 0 || age > 150){
    document.getElementById("resultat").value = "age non valide"
    }else{
    document.getElementById("resultat").value = `l \'age est valide`
    }
}
