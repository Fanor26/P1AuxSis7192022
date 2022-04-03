function PromptEdad() {
  //Ingresamos una pregunta
  let edad = prompt("Introduce tu Edad");
  //Verificamos si el usuario ingreso un valor
  if (edad >= 18){
    alert("Puedes Conducir tienes:" + edad + "años");
    //document.write("Puedes Conducir tienes:" + edad + "años");
  }
  //Verificamos si el usuario NO ingreso un valor o introduce un valor menor a 18
  else {
    alert("Eres Menor de Edad No puedes Conducir");
  }
}
