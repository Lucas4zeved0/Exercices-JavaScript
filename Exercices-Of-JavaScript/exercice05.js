function formatarValor(valor){
    console.log(`O valor decimal ${valor} formatado fica = R$${valor.toFixed(2).toString().replace(".", ",")}`)
}

formatarValor(2.0090404939038475849)
formatarValor(0.1 + 0.2)