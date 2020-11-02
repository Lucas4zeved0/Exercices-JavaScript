function formatValueDecimal(value){
    console.log(`The value decimal ${value} formatted is = $ ${value.toFixed(2).toString().replace(".", ",")}`)
}

formatValueDecimal(2.0090404939038475849)
formatValueDecimal(0.1 + 0.2)