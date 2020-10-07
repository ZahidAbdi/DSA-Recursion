// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
const sheep = (num) => {
  //base case
  if (num === 0) {
    return 'All sheep jumped over the fence';
  }
  console.log(`${num} Another sheep jumps over the fence`);
  return sheep(num - 1);
};

console.log(sheep(3));

// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
const powerCalculator = (num, power) => {
  // base case
  if (power < 0) {
    return "exponent should be '>= 0'";
  }
  //   base case part 2
  if (power === 0) {
    return 1;
  }

  const current = num;
  const rest = powerCalculator(num, power - 1);
  return current * rest;
};

console.log(powerCalculator(10, 3));

// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
const reverse = (str) => {
  // base case
  if (str === '') {
    return '';
  }
  const current = str[0];
  const rest = str.slice(1);
  return reverse(rest) + current;
};

console.log(reverse('sheep'));
