function amountSimpleInterest(initialCapital, rateInterest, applicationTime) {
    let amountCalculation = initialCapital * (1 + (rateInterest/100) * applicationTime) 
    console.log('The value of amount with simple interest is ' + amountCalculation.toFixed(2))
}

function amountCompoundInterest(initialCapital, rateInterest, applicationTime) {
    let amountCalculation = initialCapital * (1 + (rateInterest/100)) ** applicationTime
    console.log('The value of amount with compound interest is ' + amountCalculation.toFixed(2))
}


amountSimpleInterest(10, 10, 5)
amountSimpleInterest(240, 19.88, 12)
amountSimpleInterest(100, 10, 2)
amountCompoundInterest(10, 10, 3) 
amountCompoundInterest(283.33, 23.12, 5)
amountCompoundInterest(100, 10, 2)