function PromptNumeros() {
  let suma = 0;
  let media = 0;
  let contador = 0;
  let entrada = null;
  do {
    entrada = prompt(
      "Introduce un número, pulse Cancelar si no quiere seguir: "
    );
    // Salir del ciclo en el caso de que se de click en Cancelar
    if (entrada === null) break;
    // Convertir a Number
    let numero = parseFloat(entrada);
    // Puede ver en consola el valor de numero
    console.log(numero);
    // True si la conversión no fue posible
    if (isNaN(numero)) {
      alert("El valor introducido " + entrada + " no es un numero");
    } else {
      // Se ejecuta sólo si la entrada pudo ser convertida a un número
      contador++;
      suma = suma + numero;
      media = suma / contador;
    }
    // Confirmar si el usuario desea seguir ingresando datos. Confirm retorna true (OK) o false (Cancel)
    if (confirm("¿Desea seguir ingresando datos?")) {
    } else break;
  } while (entrada !== null);
  // Si no ingresó ningún dato
  if (entrada === null) {
    //document.write("No se ingresaron datos, el programa finalizó");
    alert("No se ingresaron datos, el programa finalizó");
  } else {
/*
    document.write("La suma de los números es: " + suma);
  document.write(
      "La media de los números introducidos son: " + media.toFixed(2)*/
    alert("La suma de los números es: " + suma);
    alert(
      "La media de los números introducidos son: " + media.toFixed(2)
    );
  }
}
