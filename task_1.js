function primeNumbers (number) {
    const arrayElements = []
    for (let i = 2; arrayElements.length < number; i++) { 
        for (let y = 2; y <= i; y++) {
            if (i == y) {
                arrayElements.push(i)
            }
            if (i % y == 0) {
                break
            } 
        }
    }
    return arrayElements
}


console.time()
console.log(primeNumbers(process.argv[2]))
console.timeEnd()