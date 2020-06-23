// ## Importe a biblioteca ##
let rs = require('readline-sync')

// ## Faça o código ##
let mes = rs.questionInt('Qual o mes que voce nasceu ? \n')

let dia = rs.questionInt('Qual o dia que voce nasceu ? \n')

if ( (mes >12 || mes <= 0) || (dia >31 || dia <=0)){
    console.log("Mês ou dia inválido")
} else {
    switch (mes) {
        case 1:
            dia >= 20 ? console.log("Aquário") : console.log("Capricórnio")
            break
        case 2 :
            dia <= 18 ? console.log("Aquário") : console.log("Peixes")
            break
        case 3 :
            dia <=20 ? console.log("Peixes") : console.log("Áries")
            break
        case 4 :
            dia <=19 ? console.log("Áries") : console.log("Touro")
            break
        case 5 :
            dia <= 20 ? console.log("Touro") : console.log("Gêmeos")
            break
        case 6 :
            dia <=21 ? console.log("Gêmeos") : console.log("Câncer")
            break
        case 7 :
            dia <=22 ? console.log("Câncer") : console.log("Leão")
            break
        case 8 :
            dia <= 22 ? console.log("Leão") : console.log("Virgem")
            break
        case 9 :
            dia <= 22 ? console.log("Virgem") : console.log("Libra")
            break
        case 10 :
            dia <= 22 ? console.log("Libra") : console.log("Escorpião")
            break
        case 11 :
            dia <= 21 ? console.log("Escorpião") : console.log ("Sagitário")
            break
        case 12 :
            dia <= 21 ? console.log("Sagitário") : console.log("Capricórnio")
            break
        default:
            console.log("Mês ou dia inválido.")
            break
    }
}