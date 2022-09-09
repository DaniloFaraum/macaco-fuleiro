'use strict'

var resultado = document.getElementById("pepino")

function soma() {
  var numeUm = document.getElementById("numUm").value
  var numeDois = document.getElementById("numDois").value
  var soma = parseFloat(numeUm)+parseFloat(numeDois)
  resultado.textContent = soma
}
document.getElementById("cha").addEventListener("click", soma)
