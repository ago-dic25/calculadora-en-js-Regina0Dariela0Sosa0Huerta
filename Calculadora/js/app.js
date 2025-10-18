function operacion(tipo) {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
  // obtiene los numeros ingresados
  let resultados = document.getElementById("resultado");
  let log = document.getElementById("historial");
  //obtiene las operaciones y el resultado de la operacion

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  // convierte el texto el numeros flotantes
  let resultado;

  //realiza operacion segun el boton al q le dio clic
  if (tipo === "+") {
    resultado = n1 + n2;
  } else if (tipo === "-") {
    resultado = n1 - n2;
  } else if (tipo === "*") {
    resultado = n1 * n2;
  } else if (tipo === "/") {
    if (n2 === 0) {
      resultados.innerHTML = "Error: No se puede dividir entre 0";
      return;
    }
    resultado = n1 / n2;
  }
  //va a mostrar el resultado
  resultados.innerHTML = "Resultado: " + resultado;

  //cada linea de operacion con numeros, su tipo de signo y el resultado, lo agrega al historial
  let li = document.createElement("li");
  li.textContent = `${n1} ${tipo} ${n2} = ${resultado}`;
  log.appendChild(li);
}

function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerHTML = "Resultado:";
  document.getElementById("historial").innerHTML = "";
}

