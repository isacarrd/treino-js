let listaNumeros = [];
let soma = 0;

let qtdVezes = window.prompt("Insira quantas vezes deve se repetir");
let qtdVezesConv = Number(qtdVezes)

for(let contador = 0; contador < qtdVezesConv; contador++){

  if(listaNumeros.length > qtdVezes){
    console.log("Erro")
    break;
  }

  let numeros = window.prompt(`Insira o ${contador} numero`)
  let numerosConv = Number(numeros)

  listaNumeros.push(numerosConv)
  soma += listaNumeros[contador]
}
console.log(listaNumeros.length)
console.log(listaNumeros.join(", "))
console.log(soma)

