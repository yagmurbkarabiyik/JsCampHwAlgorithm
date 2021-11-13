function isPrime(number) {
    let counter = 0;
    for (let i = 1; i <= number; i++) {
       if(number % i == 0) {
           counter++
       }
    }
    if(number == 1 || number == 0){
        return false
    }
    if(counter > 2){
        return false
    }
    else{
        return true
    }        
}

function findPrimeNumbers(number) {
    let primeNumbers = []
    for (let i = 1; i <= number; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
            
        }
        
    }
    console.log(primeNumbers)   
}

isPrime(3)
findPrimeNumbers(1000)