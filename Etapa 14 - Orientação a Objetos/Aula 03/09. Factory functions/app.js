// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },

//     decrement: function() {
//       changeBy(-1);
//     },

//     value: function() {
//       return privateCounter;
//     }
//   }
// };

const makeCounter = function () {
  let privateCounter = 0

  function changeBy (val) {
    privateCounter += val
  }

  return {
    increment: function () {
      changeBy(1)
    },
    decrement: function () {
      changeBy(-1)
    },
    value: function () {
      return privateCounter
    }
  }
}

const counter1 = makeCounter()
const counter2 = makeCounter()

counter1.increment()
counter1.increment()
counter1.increment()

console.log(`privateCounter da counter1 armazena: ${counter1.value()}`)

counter1.decrement()
counter1.decrement()

console.log(`privateCounter da counter1 armazena: ${counter1.value()}`)

counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()

console.log(`privateCounter da counter2 armazena: ${counter2.value()}`)