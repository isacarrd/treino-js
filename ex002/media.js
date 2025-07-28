let valor1 = document.querySelector('#nota1');
let valor2 = document.querySelector('#nota2');

let resMedia = document.querySelector('#resMedia');
let resSoma = document.querySelector('#resSoma');

function resultado(){
  let nota1 = Number.parseInt(valor1.value);
  let nota2 = Number.parseInt(valor2.value);

  let soma = nota1 + nota2;
  let media = soma/2;
  resMedia.innerHTML = `A sua média é de: ${media}!`;

  if(media>=6){
    resSoma.innerHTML = `APROVADO!!!!!! NAO FEZ MAIS QUE SUA OBRIGACAO`;
  } else if(media >= 4 && media < 6){
    resSoma.innerHTML = `DA PRA RECUPERAR`;
  } else{
    resSoma.innerHTML = `REPROVADO!!!!!!!!!`;
  }

}