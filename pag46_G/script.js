let primeiroTermo
let segundoTermo
let proximoTermo
let contador

primeiroTermo = 1
segundoTermo = 1
console.log("1, 1, ")
contador = 3
while ( contador <= 15){
    proximoTermo = primeiroTermo + segundoTermo
    console.log(proximoTermo)
    if (contador < 15)
       console.log(", ")
    primeiroTermo = segundoTermo
    segundoTermo = proximoTermo
    contador ++
}