
/* try {
  console.log(result)
} catch (error) {
  // console.log("Não foi possível prosseguir")
  console.log(error)
} finally{
  console.log("Cabô")
} */

  let result = 1
  try {
    if (result === 1) {
      throw new Error("Valor igual a zero")
    }
  } catch (error) {
    console.log(error)
  } finally{
    console.log("Fim")
  }
