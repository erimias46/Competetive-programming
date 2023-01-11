/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
  let x = [];
  while (n !== 0) {
    if ((n % 3 === 0) & (n % 5 == 0)) {
      x.push("FizzBuzz");
    } else if (n % 3 === 0) {
      x.push("Fizz");
    } else if (n % 5 == 0) {
      x.push("Buzz");
    } else {
      x.push(n.toString());
    }
    n--;
  }
  return x.reverse();
};
