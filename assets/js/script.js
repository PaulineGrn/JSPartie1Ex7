//Déclaration d'une fonction
function validate(){
  //Déclaration de la variable
  var age = document.getElementById("age").value;
  //Si c'est une lettre message d'erreur avec une boîte de dialogue
  if(isNaN(age)==true){
    alert("erreur, ceci n'est pas un nombre");
    //Sinon si c'est un nombre 
  }else{
    //>= c'est supérieur ou égale à 18
    if(age>=18){
      alert("Vous êtes majeur");
      //else-> sinon
    }else{
      alert("Vous êtes mineur");
    }
  }
}
