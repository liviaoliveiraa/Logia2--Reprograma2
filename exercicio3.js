//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let jantar = 75
const taxa = 0.1

const valorTaxaGarçom = jantar * taxa
console.log(`O valor da taxa do garçom sobre o valor do jantar é de R$${valorTaxaGarçom}`)

const totalJantar = jantar + valorTaxaGarçom
console.log(`O total do jantar custará R$${totalJantar}`)