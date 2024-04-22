let contadora1 = 0
let contadora2 = 0
let fatorial

   for (contadora1 = 1 ; contadora1 <= 10 ; contadora1= contadora1 +2){
     fatorial = 1
      for (contadora2 = 1 ; contadora2 <= contadora1; contadora2 ++)
        fatorial = fatorial * contadora2
      console.log("O fatorial de " + contadora1 + " é: " + fatorial)
   }
     