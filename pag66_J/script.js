let celsius = 0
let fahrenheit

for (celsius = 10 ; celsius <= 100 ; celsius = celsius +10){
   fahrenheit = (9/5) * celsius + 32
   console.log(celsius.toFixed(2) + " graus Celsius é igual a " + fahrenheit.toFixed(2) + " graus Fahrenheit.")
}