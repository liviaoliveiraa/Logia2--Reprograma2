//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let distancia = 10
let dias = 5
let valor = 60

let valorAluguel = (60 * dias)
let kmRodado = (10 * 0.15)
let resultado = valorAluguel + kmRodado

console.log(`O valor total a pagar é de R$${resultado}`)