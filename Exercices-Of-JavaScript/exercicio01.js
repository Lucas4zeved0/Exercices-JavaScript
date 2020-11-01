function calculosAritmeticos(valor1, valor2) {

    const soma = valor1 + valor2
    const subtracao = valor1 - valor2
    const multiplicacao = valor1 * valor2
    const divisao = valor1 / valor2

    console.log(`A soma entre os dois valores é = ${soma.toFixed(2)}`)
    console.log(`A subtração entre os dois valores é = ${subtracao.toFixed(2)}`)
    console.log(`A multiplicação entre os dois valores é = ${multiplicacao.toFixed(2)}`)
    console.log(`A divisão entre os dois valores é = ${divisao.toFixed(2)}`)

    console.log('================================================')
}

calculosAritmeticos(1, 1)
calculosAritmeticos(1, 3)
calculosAritmeticos(3.23, 5.96)
calculosAritmeticos(2.8371491791, 9.3749187349817)