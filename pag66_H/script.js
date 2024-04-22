let base 
let expoente 
let resultado 
let contadora

   base=parseInt(prompt("Digite o valor da base:"))
   expoente=parseInt(prompt("Digite o valor do expoente:"))
   resultado = 1
   for (contadora = 1 ; contadora <= expoente ; contadora++){
    resultado = resultado * base
   }
   alert("O resultado de " + base + " elevado a " + expoente + " é: " + resultado)