let termo1 
let termo2 
let proximo 
let contadora

   termo1 = 1
   termo2 = 1

   console.log("Termo 1: " + termo1)
   console.log("Termo 2: " + termo2)

   for (contadora = 3 ; contadora <= 15; contadora++){
    proximo = termo1 + termo2
      console.log("Termo " + contadora + ": " + proximo)
      termo1 = termo2
      termo2 = proximo
   }