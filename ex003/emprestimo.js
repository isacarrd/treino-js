let renda_mensal = document.querySelector('#rendaMensal');
let usuEmp = document.querySelector('#usuEmp');
let usuParc = document.querySelector('#usuParc');

function calcularEmprestimo(){
  let renda = Number(renda_mensal.value);
  let emprestimo = Number(usuEmp.value);
  let parcela = Number(usuParc.value);
  let mensagem = document.querySelector('#saida');

  let empresTotal = renda*10;
  let prestacao_min = renda*0.30;

  if(empresTotal >= emprestimo && prestacao_min <= parcela){
    mensagem.innerHTML = "Emprestimo concedido!";
  } else{
    mensagem.innerHTML = "Emprestimo não concedido!";
  }
}