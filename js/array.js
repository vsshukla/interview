const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers); // => true

    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers); // => false
      return this.numberA + this.numberB;
    }

    return calculate();
  },
};

//numbers.sum();

const findMax = [1, 4, 3, 5, 6, 2, 8];

// find min number
let minNumber = findMax[0];
findMax.map((item) => item < minNumber && (minNumber = item));
console.log(minNumber);

// find max number
let manNumber = findMax[0];
findMax.forEach((val) => {
  val > manNumber && (manNumber = val);
});

console.log(manNumber);
