let lervalor1
let lervalor2
let diferença

lervalor1 = parseInt(prompt("Digite um Valor: "))
lervalor2 = parseInt(prompt("Digite outro Valor: "))

diferença = lervalor1 - lervalor2

if (lervalor2 > lervalor1) {
    diferença = lervalor2 - lervalor1
}

alert ('A diferença dos valores é ' + diferença)