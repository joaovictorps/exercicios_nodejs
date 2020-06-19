// ## Importe a biblioteca ##
let rs = require('readline-sync')


// ## Faça o código ##
console.log("===================================")
console.log("Calcule a area de um QUADRADO")
console.log("===================================")
let numero = rs.questionFloat('Qual o tamanho do lado do quadrado ? \n')

let area = numero * numero

console.log("===================================")
console.log("A área do quadrado é "+area +" .")
console.log("===================================")
