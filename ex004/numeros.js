let divNumeros = document.querySelector('#numeros');
let numeros = [];

//.join transforma todos os elementos de um array numa string
function enviar(){
  let numero1 = document.querySelector('#num1').value;
  let numero2 = document.querySelector('#num2').value;
  let numero3 = document.querySelector('#num3').value;

  numeros.push(numero1, numero2, numero3);
  divNumeros.innerHTML = numeros.join(" ");
}