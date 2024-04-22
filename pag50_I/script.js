let numero = 0
let maior = 0
let menor = 0
let contador = 0

do{
   numero=parseInt(prompt("digite o número ou digite um numero negativo para sair: "))
   if (numero >= 0)
      if (contador == 0){
         maior = numero
         menor = numero
        }
      else
         if (numero > maior)
            maior = numero
         else
            if (numero < menor)
               menor = numero
      contador ++
}while (numero > 0)
alert(" O maior número é: " + maior)
alert(" O menor número é: " + menor)