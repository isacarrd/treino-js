/*
const greet = () => "Hello"
console.log(greet())
*/

/*
const soma = (a, b) => a+b
let valor1 = parseInt(window.prompt("Valor 1: "))
let valor2 = parseInt(window.prompt("Valor 2: "))
let resultado = soma(valor1, valor2)
console.log(`Valor um -> ${valor1}`)
console.log(`Valor dois -> ${valor2}`)
console.log(`Soma -> ${resultado}`)
*/

const calcularIMC = (peso, altura) => {
  let imc = peso/(altura*altura)
  return imc
};
let pesoUsu = Number(window.prompt("Seu peso"))
let altUsu = Number(window.prompt("Sua altura"))
console.log(calcularIMC(pesoUsu, altUsu).toFixed(2))
