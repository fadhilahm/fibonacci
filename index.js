function fibonacci(number) {
  if (number < 3) {
    return 1;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
}

// 1 1 2 3 5 8 13 21 34 55

// driver code
console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(8)); // 21

// 4:42