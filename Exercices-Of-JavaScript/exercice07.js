// Minha versão
function calculoDeBhaskara(ax2, bx , c) {
    let resultados = []
    const calculoDelta = (bx ** 2) - (4 * ax2 * c)
    if(calculoDelta < 0) {
        console.log('')
        console.log(`Delta é negativo para a = ${ax2}, b = ${bx}, c = ${c}. O valor de delta é ${calculoDelta}`)
        console.log('======================================================================')
        console.log('')
    } else {
        const calculoX1 = (-bx + Math.sqrt(calculoDelta)) / (2 * ax2) 
        const calculoX2 = (-bx - Math.sqrt(calculoDelta)) / (2 * ax2)
        //const vetorResultado = [X1.toFixed(2), X2.toFixed(2)]\\
        resultados.push(calculoX1.toFixed(2))
        resultados.push(calculoX2.toFixed(2))

        console.log(`      Valores de X1 e X2 para a = ${ax2}, b = ${bx}, c = ${c}. E Delta = ${calculoDelta}     `)
        console.log(`                     =>O valor de X1 é = ${resultados[0]}`)
        console.log(`                     =>O valor de X2 é = ${resultados[1]}`)
    }
}

calculoDeBhaskara(3, -5, 12)
calculoDeBhaskara(2, 10, 2)
calculoDeBhaskara(8, 1, 23)

calculoDeBhaskara(1, 3, 2)
calculoDeBhaskara(3, 1, 2)







// Versão mais compacta
function calculoDeBhaskara(ax2, bx , c) {
    let resultados = []
    let calculoDelta = (bx ** 2) - (4 * ax2 * c)
    if(calculoDelta < 0) {
        return `Delta é negativo para a = ${ax2}, b = ${bx}, c = ${c}. O valor de delta é ${calculoDelta}`
    }
        calculoX1 = (-bx + Math.sqrt(calculoDelta)) / (2 * ax2) 
        calculoX2 = (-bx - Math.sqrt(calculoDelta)) / (2 * ax2)
        //const vetorResultado = [X1.toFixed(2), X2.toFixed(2)]\\

        console.log(`Valores de X1 e X2 para a = ${ax2}, b = ${bx}, c = ${c}. E Delta = ${calculoDelta}`)
        resultados.push(calculoX1.toFixed(2))
        resultados.push(calculoX2.toFixed(2))
        return resultados
}

console.log(calculoDeBhaskara(3, -5, 12))
console.log(calculoDeBhaskara(2, 10, 2))
console.log(calculoDeBhaskara(8, 1, 23))

console.log(calculoDeBhaskara(1, 3, 2))
console.log(calculoDeBhaskara(3, 1, 2))
