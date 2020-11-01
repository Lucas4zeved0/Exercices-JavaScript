function classificarTriangulo(lado1, lado2, lado3) {

    if(lado1 == lado2 && lado2 == lado3) {
        return 'Este triangulo é equilátero, pois todos os lados são iguais'
        
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return 'Este triangulo é isósceles, pois possui somente dois lados iguais'

    } else {
        return 'Este é um triangulo escaleno, pois não possui lados iguais'

    }
}

// Testando triangulo equilátero 
console.log('========================================================')
classificarTriangulo(1, 1, 1)
classificarTriangulo(4, 4, 4)
classificarTriangulo(7, 7, 7)
console.log('========================================================')

// Testando triangulo isósceles
console.log('========================================================')
classificarTriangulo(2, 1, 1)
classificarTriangulo(1, 2, 1)
classificarTriangulo(1, 1, 2)
console.log('========================================================')

// Testando triangulo escaleno
console.log('========================================================')
classificarTriangulo(3, 2, 1)
classificarTriangulo(5, 4, 3)
classificarTriangulo(9, 5, 7)
console.log('========================================================')
