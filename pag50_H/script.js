let nome
let largura
let comprimento
let area
let areaTotal = 0
let continuar

   continuar = "SIM"
   do{
      nome=String(prompt("Digite o nome do cômodo: "))
      largura=parseFloat(prompt("Digite a largura do cômodo (em metros): "))
      comprimento=parseFloat(prompt("Digite o comprimento do cômodo (em metros): "))
      area = largura * comprimento
      alert("A área do " + nome + " é " + area + " m².")
      areaTotal = areaTotal + area
      continuar=String(prompt("Deseja continuar calculando novos cômodos? (SIM/NAO): "))
   }
   while (continuar != "NAO")
   alert("A área total da residência é " + areaTotal + " m².")