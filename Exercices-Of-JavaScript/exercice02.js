function classifyTriangle(side1, side2, side3) {

    if(side1 == side2 && side2 == side3) {
        return 'This triangle is equilateral, since everyone the sides be equals.'
        
    } else if(side1 == side2 || side1 == side3 || side2 == side3){
        return 'This triangle is isosceles, since have only two sides equals.'

    } else {
        return 'This triangle is scalene, since not have sides equals.'

    }
}

// Testing triangle equilateral
console.log('====================Equilateral========================')
console.log(classifyTriangle(1, 1, 1))
console.log(classifyTriangle(4, 4, 4))
console.log(classifyTriangle(7, 7, 7))
console.log('=======================================================')

// Testing triangle isosceles
console.log('=====================Isosceles=========================')
console.log(classifyTriangle(2, 1, 1))
console.log(classifyTriangle(1, 2, 1))
console.log(classifyTriangle(1, 1, 2))
console.log('=======================================================')

// Testing triangle scalene
console.log('=====================Scalene=========================')
console.log(classifyTriangle(3, 2, 1))
console.log(classifyTriangle(5, 4, 3))
console.log(classifyTriangle(9, 5, 7))
console.log('=====================================================')
