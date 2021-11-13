function sumHelper(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}
function findPerfectNumber(number) {
  for (let i = 0; i < number; i++) {
    let sumPerfect = sumHelper(i);
    if (sumPerfect == 2 * i && i >= 2) {
      console.log(i + " mükemmel sayıdır.");
    }
  }
}
