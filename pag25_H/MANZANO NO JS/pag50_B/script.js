let contadora = 1;
let soma = 0;
        
    do {
    if (contadora % 2 === 0) {
            soma += contadora;
            console.log(contadora);
        }
        contadora++;
        } while (contadora <= 500);
        
console.log("A soma dos pares entre 1 e 500 é: " + soma);
        