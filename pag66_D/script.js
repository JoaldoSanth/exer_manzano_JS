let contadora
let soma = 0

for (contadora = 1; contadora <= 500 ; contadora ++){
    if (contadora % 2 == 0)
    soma += contadora
    console.log(contadora)
}
console.log("a soma dos pares é de: " + soma)