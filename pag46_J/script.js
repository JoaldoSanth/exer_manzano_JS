let soma = 0
let media =0
let quantidade_pares = 0
let contador = 50

   while (contador < 70){
    if (contador % 2 === 0){
        soma += contador
        quantidade_pares += 1
    }
    contador += 1
} 
 if (quantidade_pares > 0){
    media = soma / quantidade_pares
 }else{
    media = 0
 } 
   alert("O total da soma dos valores pares de 50 a 70 é: " + soma)
   alert("A média aritmética dos valores pares de 50 a 70 é: " + media)