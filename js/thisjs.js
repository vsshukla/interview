// Arrow function does not have access of `this` in object method
const numbers = {
    numberA: 5,
    numberB: 10,
    name: 'vikas',
    sum: function() {
        console.log(this === numbers);
        console.log(this.name);
        console.log(this.numberA + this.numberB);
    },
    sumArrowFun: () => {
        console.log(this.name);
    }
};

// numbers.sum();

class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName = () => {
      console.log(this.heroName);
    }
  }
  
  const batman = new Hero('Batman');



  setTimeout(batman.logName, 1000)

