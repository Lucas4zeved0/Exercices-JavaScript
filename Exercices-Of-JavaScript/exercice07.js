// Minha versão
function calculeOfBhaskara(ax2, bx , c) {
    let results = []
    const calculeOfDelta = (bx ** 2) - (4 * ax2 * c)
    if(calculeOfDelta < 0) {
        console.log('') // Blank line for organization
        console.log(`Delta is negative for a = ${ax2}, b = ${bx}, c = ${c}. The value of Delta is ${calculeOfDelta}`)
        console.log('======================================================================')
        console.log('')
    } else {
        const calculeOfX1 = (-bx + Math.sqrt(calculeOfDelta)) / (2 * ax2) 
        const calculeOfX2 = (-bx - Math.sqrt(calculeOfDelta)) / (2 * ax2)
        results.push(calculeOfX1.toFixed(2))
        results.push(calculeOfX2.toFixed(2))

        console.log(`      The values of X1 and X2 for a = ${ax2}, b = ${bx}, c = ${c}. And Delta = ${calculeOfDelta}     `)
        console.log(`                     =>The value of X1 is = ${results[0]}`)
        console.log(`                     =>The value of X2 is = ${results[1]}`)
    }
}

calculeOfBhaskara(3, -5, 12)
calculeOfBhaskara(2, 10, 2)
calculeOfBhaskara(8, 1, 23)

calculeOfBhaskara(1, 3, 2)
calculeOfBhaskara(3, 1, 2)







