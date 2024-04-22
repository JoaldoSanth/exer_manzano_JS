let A, B, C
let Nulos, Brancos, Total
let PercentualValidos, PercentualA, PercentualB
let PercentualC, PercentualNulos, PercentualBrancos
A=parseFloat(prompt("Digite a quantidade de votos válidos para o candidato A: "))
B=parseFloat(prompt("Digite a quantidade de votos válidos para o candidato B: "))
C=parseFloat(prompt("Digite a quantidade de votos válidos para o candidato C: "))
Nulos=parseFloat(prompt("Digite a quantidade de votos nulos: "))
Brancos=parseFloat(prompt("Digite a quantidade de votos em branco: "))
Total = A + B + C + Nulos + Brancos
PercentualValidos = (A + B + C) / Total * 100
PercentualA = A / Total * 100
PercentualB = B / Total * 100
PercentualC = C / Total * 100
PercentualNulos = Nulos / Total * 100
PercentualBrancos = Brancos / Total * 100
alert("O número total de eleitores é: "+ Total)
alert("O percentual de votos válidos é: "+ PercentualValidos.toFixed(2)+ "%")
alert("O percentual de votos válidos do candidato A é: "+ PercentualA.toFixed(2)+ "%")
alert("O percentual de votos válidos do candidato B é: "+ PercentualB.toFixed(2)+ "%")
alert("O percentual de votos válidos do candidato C é: "+ PercentualC.toFixed(2)+ "%")
alert("O percentual de votos nulos é: "+ PercentualNulos.toFixed(2)+ "%")
alert("O percentual de votos em branco é: "+ PercentualBrancos.toFixed(2)+ "%")