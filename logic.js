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

// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const nth = (n) => {
  // base case
  if (n === 1) {
    return 1;
  }
  // recursion

  return n + nth(n - 1);
};

console.log(nth(4)); //10

// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem. Input: 02/20/2020 Output: ["02", "20", "2020"]

const split = (str) => {};

// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
const fib = (num) => {
  // base case
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  // recursion
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(7)); // 13

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
const factorial = (num) => {
  // base case
  if (num === 1) {
    return 1;
  }
  // recursion
  return num * factorial(num - 1);
};

console.log(factorial(5)); //120
// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.
// You can use the following mazes to test your program:
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
