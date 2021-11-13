function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
    return true;
  }
}

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(numbers[i] + " asal sayıdır. ");
    } else {
      console.log(numbers[i] + "asal sayı değildir.");
    }
  }
}
findPrime(3, 5, 7, 12);
