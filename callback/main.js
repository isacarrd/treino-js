function execute(taskName, callback) {
  console.log("Executando: ", taskName)
  callback()
}

function callback(){
  console.log("Callback executado.")
}

execute("Download de arquivo...", callback)
execute("upload do arquivo...", function(){
  console.log("Função de callback com uma função anônima")
})
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluído")
})

// Forma encurtada
execute("Salvando arquivo...", () => console.log("Arquivo salvo") )