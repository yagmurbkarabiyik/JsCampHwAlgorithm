function sumHelper(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}
function friendNumbers(number1, number2) {
  let number1Helper = sumHelper(number1);
  let number2Helper = sumHelper(number2);

  if (
    (number1 == number1Helper && number2 == number2Helper) ||
    (number2 == number1Helper && number1 == number2Helper)
  ) {
    console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
  } else {
    console.log(number1 + " ve " + number2 + " arkadaş sayı değillerdir.");
  }
}
