let numero
let maior, menor
let contadora

for (contadora = 1; contadora <= 5; contadora++) {
    numero=parseInt(prompt("digite o " + contadora + " número: "))
    if (contadora == 1){
        maior = numero
        menor = numero
          }   
          else
       if ( numero > maior){
        maior = numero
       } 
       else
          if (numero < menor){
            menor = numero
    }
}
alert(" O maior número é: " + maior)
alert(" O menor número é: " + menor)