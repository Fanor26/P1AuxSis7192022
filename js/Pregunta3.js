function PromptMayor() {
  //INTRODUCIMOR TODOS LOS DATOS
  let nombre1 = prompt("Introduce Nombre 1:");
  let edad1 = Number(prompt("Introduce Edad 1:"));

  let nombre2 = prompt("Introduce Nombre 2:");
  let edad2 = Number(prompt(" Introduce Edad 2:"));

  let nombre3 = prompt(" Introduce Nombre 3:");
  let edad3 = Number(prompt(" Introduce Edad 3:"));

  //Función max() devuelve el mayor de los argumentos pasados.
  let maximo = Math.max(edad1, edad2, edad3);

  if (maximo == edad1) {

    //document.write("El mayor es: " + nombre1);
    alert("El mayor es: " + nombre1);
  }
  if (maximo == edad2) {
    //document.write("El mayor es: " + nombre2);
    alert("El mayor es: " + nombre2);
  }
  if (maximo == edad3) {
    //document.write("El mayor es: " + nombre3);
    alert("El mayor es: " + nombre3);
  }
}
