let contadora, totalGraos, graosNesteQuadrado
   totalGraos = 0
   graosNesteQuadrado = 1
   contadora = 1

   do{
      totalGraos = totalGraos + graosNesteQuadrado
      graosNesteQuadrado = graosNesteQuadrado * 2
      console.log("No quadro "+ contadora+ " há "+ totalGraos+ " grãos de trigo.")
   
    contadora ++
   }
   while (contadora <= 64)

   console.log("O total de grãos de trigo no tabuleiro é: "+ totalGraos)