 function verificarNotaAluno(notaAluno) {
    let verificarArredondamento = arredondamento()

    if(verificarArredondamento >= 40){
        console.log(`Aprovado com nota = ${verificarArredondamento}`)
    } else if(verificarArredondamento < 38) {
        console.log(`Reprovado com nota = ${verificarArredondamento}`)
    }

    function arredondamento() {
        if(notaAluno % 5 > 2 && notaAluno > 37){
            let calculoArredondamento = notaAluno + (5 - (notaAluno % 5))
            return calculoArredondamento
        } else {
            return notaAluno
        }
    }

}

verificarNotaAluno(38)
verificarNotaAluno(37)
verificarNotaAluno(23)
verificarNotaAluno(33)
verificarNotaAluno(40)
verificarNotaAluno(44)
verificarNotaAluno(58)
verificarNotaAluno(79)
verificarNotaAluno(19)
