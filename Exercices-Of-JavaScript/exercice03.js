function Exponenciacao(base, expoente) {
    const calculandoExponenciacao = base ** expoente

    if(Number.isInteger(calculandoExponenciacao) == true){
    console.log(`O valor dessa exponenciação é ${calculandoExponenciacao.toFixed(0)}`)
    } else {
        console.log(`O valor dessa exponenciação é ${calculandoExponenciacao.toFixed(2)}`)
    }
}

Exponenciacao(2, 2)
Exponenciacao(2.34, 4.12)
