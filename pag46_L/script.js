let valor = 0
let maior = 0
let menor = 0

valor=parseInt(prompt("Digite um valor positivo ou um valor negativo para encerrar:"))
menor = valor
maior = valor
while (valor >= 0){
    valor=parseInt(prompt("Digite um valor positivo ou um valor negativo para encerrar:"))
    if (valor >= 0)
    if (valor < menor)
          menor = valor    
    if (valor > maior)
        maior = valor
}
alert("O maior valor digitado foi: " + maior)
alert("O menor valor digitado foi: " + menor)