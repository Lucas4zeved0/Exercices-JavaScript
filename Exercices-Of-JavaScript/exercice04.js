//
function calculationDivAndRest(divider, dividend) {
    const resultOfDivision = divider / dividend
    const restOfDivision = divider % dividend
    
    // Result of division
    if(Number.isInteger(resultOfDivision) == true) {
        console.log(`The result of division between ${divider} and ${dividend} is = ${resultOfDivision.toFixed(0)}`)
    } else {
        console.log(`The result of division between ${divider} and ${dividend} is = ${resultOfDivision.toFixed(2)}`)
    }

    //Rest of division
    if(Number.isInteger(restOfDivision) == true) {
        console.log(`The rest of division between ${divider} and ${dividend} is = ${restOfDivision.toFixed(0)}`)
    } else {
        console.log(`The rest of division between ${divider} and ${dividend} is = ${restOfDivision.toFixed(2)}`)
    }
    console.log('============================================================')
} 

calculationDivAndRest(2, 2)
calculationDivAndRest(5, 3)
calculationDivAndRest(28, 3.14)