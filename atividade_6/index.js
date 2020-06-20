// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##
let nome = rs.question('Qual o seu nome ? \n')

let caracteres = rs.question('Digite alguma coisa.\n')

console.log('Você digitou ' + caracteres.length +' caracteres.')

