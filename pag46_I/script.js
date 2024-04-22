let valor
let soma = parseFloat
let media = parseFloat
let contador
contador = 0
   while (contador < 10){
      valor=parseFloat(prompt("Digite um valor: "))
      soma += valor
      contador ++
}
   media = soma / 10
   alert(" O total do somatório é: " + soma)
   alert(" A média aritmética dos valores é: " + media)