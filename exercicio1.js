//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

const valorMercadoria = 520
const desconto = 0.2

const valorDesconto = valorMercadoria * desconto
const valorPagar = valorMercadoria - valorDesconto

console.log(`O desconto será de R$${valorDesconto} e o valor a pagar será de R$${valorPagar}`)