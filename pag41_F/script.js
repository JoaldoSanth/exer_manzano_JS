let A, B, C 
let Auxiliar

   A=parseFloat(prompt("Digite o primeiro valor:"))
   B=parseFloat(prompt("Digite o segundo valor:"))
   C=parseFloat(prompt("Digite o terceiro valor:"))

   if (A > B){
    Auxiliar = A
    A = B
    B = Auxiliar
   }
   if (A > C){
    Auxiliar = A
    A = C
    C = Auxiliar
   }
 if (B > C){
    Auxiliar = B
    B = C
    C = Auxiliar
 }  
   alert("Os valores em ordem crescente são: " + A + ", " + B + ", " + C)
   