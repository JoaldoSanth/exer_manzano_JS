let contadora;
let fatorial;
let numero;

for (contadora = 1; contadora <= 10; contadora = contadora + 2) {
    numero = contadora;
    fatorial = 1;
    do {
        fatorial = fatorial * numero;
        numero = numero -1;
    } while (numero > 0);
    console.log("O fatorial de " + contadora + " é " + fatorial);
}

