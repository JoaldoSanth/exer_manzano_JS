let somatorio = 0;
let i = 0;

do {
    let valor = prompt("Digite um valor inteiro:");
    valor = Number(valor);

    let fatorial = 1;
    let contador = 1;

    do {
        fatorial *= contador;
        contador++;
    } while(contador <= valor);

    somatorio += fatorial;

    console.log("O somatório da fatorial dos valores é: " + somatorio);
    i++;
} while(i < 15);


