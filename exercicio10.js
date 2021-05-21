// Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = 1994
let ano = 2021

let conta = (ano - anoNascimento)

if (conta >= 18) {
    console.log("Você tem maioridade, já está pronto para pagar boletos!")
} else {
    console.log("Você é menor de idade, não pode beber!")
}