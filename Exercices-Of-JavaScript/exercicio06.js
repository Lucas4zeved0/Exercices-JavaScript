/*
* M = C(1 + i) ** n
* M = montante
* C = Capital inicial
* i = taxa de juros
* n = número de períodos que o capital ficou aplicado
*/

function montanteComJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let calculoDoMontante = capitalInicial * (1 + (taxaJuros/100) * tempoAplicacao) 
    console.log('O valor do montante com juros simples é ' + calculoDoMontante.toFixed(2))
}

function montanteComJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let calculoDoMontante = capitalInicial * (1 + (taxaJuros/100)) ** tempoAplicacao
    console.log('O valor do montante com juros compostos é ' + calculoDoMontante.toFixed(2))
}


montanteComJurosSimples(10, 10, 5)
montanteComJurosSimples(240, 19.88, 12)
montanteComJurosSimples(100, 10, 2)
montanteComJurosCompostos(10, 10, 3) 
montanteComJurosCompostos(283.33, 23.12, 5)
montanteComJurosCompostos(100, 10, 2)