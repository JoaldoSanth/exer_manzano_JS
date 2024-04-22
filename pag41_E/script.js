let A, B, C
let delta
let raiz1, raiz2

    do
        A=parseInt(prompt("Digite o valor de A (deve ser diferente de zero): "))
     while ( A == 0)
    B=parseInt(prompt("Digite o valor de B: "))
    C=parseInt(prompt("Digite o valor de C: "))

    delta = B * B - 4 * A * C

    if (delta >= 0 ){
      raiz1 <- (-B + sqrt(delta)) / (2 * A)
      raiz2 <- (-B - sqrt(delta)) / (2 * A)
       alert("As raízes da equação são: " + raiz1 + " e " + raiz2)
    }
    else
        alert("Não é possível calcular as raízes da equação.")