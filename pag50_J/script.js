let dividendo
let divisor
let quociente

dividendo=parseInt(prompt("Digite o dividendo: "))
divisor=parseInt(prompt("Digite o divisor: "))
quociente = 0
do{
   dividendo = dividendo - divisor
   quociente = quociente + 1
}while (dividendo > divisor)
alert("O resultado da divisão é " + quociente)