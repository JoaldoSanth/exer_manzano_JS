let SM
let PR
let NS
SM=parseFloat(prompt("Qual o salário mensal?"))
PR=parseFloat(prompt("Qual o valor do reajuste?"))
NS = SM + (SM * PR/100)
alert("O novo salário será de: "+NS)