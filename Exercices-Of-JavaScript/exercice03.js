function exponentiation(base, exponent) {
    const calculatingExponentiation = base ** exponent
    if(Number.isInteger(calculatingExponentiation) == true){
    console.log(`The value this exponentiation is ${calculatingExponentiation.toFixed(0)}`)
    } else {
        console.log(`the value this exponentiation is ${calculatingExponentiation.toFixed(2)}`)
    }
}

exponentiation(2, 2)
exponentiation(2.34, 4.12)
