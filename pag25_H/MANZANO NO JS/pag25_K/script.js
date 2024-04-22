let qtreal
let IC
let valor 
qtreal=parseFloat(prompt("insira a quantidade de reais que você tem"))
IC=parseFloat(prompt("qual o valor da cotação do dolar hoje"))
valor=(qtreal / IC)
alert("O valor da transformação é $:"+ valor)