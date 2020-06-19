// ## Importe a biblioteca ##
let rs = require('readline-sync')

// ## Faça o código ##

let nome = rs.question('Qual seu nome ? \n')

let mascara = rs.question('Voce esta usando mascara ao sair de casa ? (Responde com "s" para sim e "n" para não.) \n')

let mao = rs.question('Voce esta lavando frequentemente as maos ? \n')

let correto = mascara == ("s") && mao == ("s")

if (correto) {
    console.log ('Muito bem, ' + nome +'! Você está indo bem na prevenção de COVID. ' )
} else {
    console.log ('Você não está seguindo as indicações contra a COVID e pode estar vulnerável.')
}