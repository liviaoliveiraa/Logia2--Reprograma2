//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let numero1 = 20
let numero2 = 10

if (numero1 > numero2) {
    console.log(`O primeiro número é maior que o segundo número`)
} else if (numero1 < numero2) {
    console.log(`O primeiro número é menor que o segundo`)
} else {
    console.log(`Os números são iguais`)
}

let numero3 = 20
let numero4 = 10

switch(numero3 > numero4){
    case 'numero3 > numero4':
        console.log(`O primeiro número é maior que o segundo número`)
        break
    case 'numero1 < numero2':
        console.log(`O primeiro número é maior que o segundo número`)
        break
    default:
        console.log(`Os números são iguais`)
        break
}

