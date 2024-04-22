let valor
let tempo
let taxa
let total
valor=parseFloat(prompt("Qual o valor das prestações?"))
tempo=parseFloat(prompt("Qual a quantidade de dias atrasados?"))
taxa=parseFloat(prompt("Qual a taxa de juros?"))
total= valor + (valor * taxa/100) * tempo
alert ("O valor final da prestação é:" +total)