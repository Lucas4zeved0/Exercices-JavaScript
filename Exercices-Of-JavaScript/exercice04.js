//9/4 9 divisor e 4 dividendo 

function calculoDivEResto(divisor, dividendo) {
    const resultadoDaDivisao = divisor / dividendo
    const restoDaDivisao = divisor % dividendo
    
    // Resultado da divisão
    if(Number.isInteger(resultadoDaDivisao) == true) {
        console.log(`O resultado da divisão entre ${divisor} e ${dividendo} é = ${resultadoDaDivisao.toFixed(0)}`)
    } else {
        console.log(`O resultado da divisão entre ${divisor} e ${dividendo} é = ${resultadoDaDivisao.toFixed(2)}`)
    }

    //Resto da divisão
    if(Number.isInteger(restoDaDivisao) == true) {
        console.log(`O resto da divisão entre ${divisor} e ${dividendo} é = ${restoDaDivisao.toFixed(0)}`)
    } else {
        console.log(`O resto da divisão entre ${divisor} e ${dividendo} é = ${restoDaDivisao.toFixed(2)}`)
    }
    console.log('============================================================')
} 

calculoDivEResto(2, 2)
calculoDivEResto(5, 3)
calculoDivEResto(28, 3.14)