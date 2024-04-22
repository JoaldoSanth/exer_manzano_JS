let base
let expoente
let resultado
let contador

base=parseInt(prompt("Digite o valor da base: "))
expoente=parseInt(prompt("Digite o valor do expoente: "))
resultado = 1
contador = 1
while (contador <= expoente){
    resultado = resultado * base
    contador++
}
alert("O resultado de " + base + " elevado a " + expoente + " é igual a: " + resultado)
