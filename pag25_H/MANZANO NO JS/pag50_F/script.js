let valor = 0
let total_valores = 0
let somatorio = 0
do{
      valor=parseFloat(prompt("Digite um valor numérico (digite um valor negativo para encerrar): "))
      if (valor >= 0) 
         somatorio = somatorio + valor
         total_valores = total_valores + 1
}
   while (valor > 0)

   if (total_valores > 0 ){
      alert("O somatório dos valores é: "+ somatorio)
      alert("A média aritmética dos valores é: "+ somatorio / total_valores)
      alert("O total de valores lidos é: "+ total_valores)
   }
   else
       alert("Nenhum valor válido foi inserido.")
 