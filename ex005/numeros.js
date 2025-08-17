let listaNumeros = [];
let soma = 0;

let qtdVezes = document.querySelector('#num')
let divNumeros = document.querySelector('#numeros') 
let botao = document.querySelector('#botao')
/*
console.log(listaNumeros.length)
console.log(listaNumeros.join(", "))
console.log(soma)
*/

function confirmar(event){
  event.preventDefault()
  qtdVezesConv = Number(qtdVezes.value)
  
  //se o número não for um número(NAN) e diferente de zero...
  if(!isNaN(qtdVezesConv) && qtdVezesConv !== 0){
    eventos();
  } else{
    window.alert('Conjunto vazio.')
    window.location.reload(true)
  }
}


function eventos(){
  for(let contador = 0; contador < qtdVezesConv; contador++){
    //LABEL
    let novoLabel = document.createElement('label')
    novoLabel.id = 'novoLabel'
    novoLabel.textContent = `Insira o ${contador} numero:`
    novoLabel.setAttribute("for", 'novoInput')
    //INPUT
    let novoInput = document.createElement('input')
    novoInput.type = 'number'
    novoInput.id = 'novoInput'
    //adiciona o label e o input na divNumeros
    divNumeros.appendChild(novoLabel)
    divNumeros.appendChild(novoInput)
  }
  botao.disabled = true
  somarBotao();
}

function somarBotao(){
  let novoBotao = document.createElement('button');
  novoBotao.id = 'novoBotao';
  novoBotao.textContent = 'Somar';
  novoBotao.type = 'button';
  divNumeros.appendChild(document.createElement("br"));
  divNumeros.appendChild(novoBotao);

  novoBotao.addEventListener('click', somar);
}

function somar(){
  
  for (let contador2 = 0; contador2 < qtdVezesConv; contador2++){
    let numeros = parseInt(document.querySelector('#novoInput').value)

    if (numeros == "" || isNaN(numeros)) {
      window.alert('Conjunto vazio')
      return;
    }
    listaNumeros.push(numeros)
    soma += listaNumeros[contador2]
  }
  let resultadoSoma = document.createElement('span')
  resultadoSoma.id = 'resultadoSoma'
  resultadoSoma.textContent = `O resultado da sua soma foi ${soma}`
  divNumeros.appendChild(resultadoSoma)
}
