//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

let nota1 = 5
let nota2 = 3
let nota3 = 5

let somaNotas = (nota1 + nota2 + nota3) / 3
if (somaNotas >= 7){
    console.log("Você Passou")
} else if (somaNotas >= 5 && somaNotas < 7) {
    console.log("Recuperação")
} else {
    console.log("Reprovada")
}