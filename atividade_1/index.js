// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##

let voo = rs.question('Qual é o número do seu voo ? \n')

let fileira = rs.question('Em qual fileira você deseja sentar? \n')

console.log('==============================================')
console.log('Cartão de embarque para o Voo de número: ' + voo)

console.log('Você sentará na fileira : '+fileira)
console.log('==============================================')