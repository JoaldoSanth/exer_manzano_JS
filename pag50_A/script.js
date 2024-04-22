let contadora
let numero
let quadrado
let _inicio
numero=parseFloat(prompt("Digite um número entre 15 e 200: "))
   if (numero < 15 || numero > 200)
      alert("Número inválido. Por favor, digite um número entre 15 e 200.")
   else
      contadora = numero
      do{
         quadrado = contadora * contadora
         alert("O quadrado de "+ contadora+ " é "+ quadrado)
         contadora ++}
      while (contadora > 200)
     