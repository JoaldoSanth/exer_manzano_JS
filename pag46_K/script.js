let nome
let largura
let comprimento
let area
let areaTotal = parseInt
let continuar = "SIM"

   while (continuar === "SIM") {
    nome=String(prompt("Digite o nome do cômodo: "))
    largura=parseInt(prompt("Digite a largura do cômodo (em metros): "))
    comprimento=parseInt(prompt("Digite o comprimento do cômodo (em metros): "))
    area = largura * comprimento
    alert("A área do cômodo " + nome + " é de " + area + " metros quadrados.")
    areaTotal = areaTotal + area
    continuar=String(prompt("digite NÃO caso queira sair do calculo ou SIM se quiser adicionar mais um comodo:"))
   } 
   alert("O valor total acumulado da área residencial é de " + areaTotal + " metros quadrados.")
