let valorA = document.querySelector('#numeroA');
let valorB = document.querySelector('#numeroB');
let valorC = document.querySelector('#numeroC');

let valor = document.querySelector('#valor');
let condicao = document.querySelector('#cond');

function somar(){
  let A = Number.parseInt(valorA.value);
  let B = Number.parseInt(valorB.value);
  let C = Number.parseInt(valorC.value);

  let soma = A+B; 
  valor.innerHTML = `Soma de A(${A}) e B(${B}) é ${soma}!`;

  if(soma > C){
    cond.innerHTML = `A(${A}) + B(${B}) é maior que C(${C})`;
  } else{
    cond.innerHTML = `A(${A}) + B(${B}) é menor que C(${C})`;
  }
}