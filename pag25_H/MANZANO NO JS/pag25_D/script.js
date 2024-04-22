let _tempo
let velocidade 
let distancia 
let litros_usados 
_tempo=parseFloat(prompt("Qual o tempo gasto da viagem?"))
velocidade=parseFloat(prompt("Qual a velocidade média que foi utilizada?"))
distancia = _tempo * velocidade
litros_usados = distancia / 12
alert("Nesta viagem, o tempo gasto foi de:"+_tempo+"h")
alert("A velocidade média foi de:"+velocidade+"km/h")
alert("A distância foi de:"+distancia+"km")
alert("A quantidade de litros gastos foi de"+litros_usados+"L")