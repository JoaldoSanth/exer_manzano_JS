let nota1
let nota2
let nota3
let nota4
let notasmedia

lernota1 = parseFloat(prompt("Digite a 1° Nota: "));
lernota2 = parseFloat(prompt("Digite a 2° Nota: "));
lernota3 = parseFloat(prompt("Digite a 3° Nota: "));
lernota4 = parseFloat(prompt("Digite a 4° Nota: "));

notasmedia = (lernota1 + lernota2 + lernota3 + lernota4) / 4

    if (notasmedia >= 5) {
        alert ("O aluno foi aprovado por exame. Nota da media "+notasmedia)
    
    } else {
        alert ("O aluno foi Reprovado. Nota da media" + notasmedia)
    }
