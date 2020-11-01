function AritmeticCalculations(value1, value2) {

    const sum = value1 + value2
    const subtraction = value1 - value2
    const multiplication = value1 * value2
    const division = value1 / value2

    console.log(`The sum between the two values is = ${sum.toFixed(2)}`)
    console.log(`The subtraction between the two values is = ${subtraction.toFixed(2)}`)
    console.log(`The multiplication between the two values is = ${multiplication.toFixed(2)}`)
    console.log(`The division between the two values is = ${division.toFixed(2)}`)

    console.log('================================================')
}

AritmeticCalculations(1, 1)
AritmeticCalculations(1, 3)
AritmeticCalculations(3.23, 5.96)
AritmeticCalculations(2.8371491791, 9.3749187349817)