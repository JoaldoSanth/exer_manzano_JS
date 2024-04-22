let contadora = 1
let soma = 0

while (contadora < 501) {
    if (contadora % 2 == 0) {
        soma += contadora
        console.log (`${contadora}`)
    }
    contadora ++
}
console.log (`A soma dos numeros pares entre 1 a 500 é de:${soma}`)