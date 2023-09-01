const readline = require('readline');

function adder(a,b) {
    return a + b;
}

function subtractor(a,b) {
    return (a > b ? (a-b):(b-a)); 
}

function multiplier(a,b) {
    return a * b;
}

function divider(a,b) {
    if(b !== 0) {
        return a/b;
    }
    else {
      console.log("cant divide by 0");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
let val1, val2, option;

function startCalculator() {
    console.log("option 1: add");
    console.log("option 2: subtract");
    console.log("option 3: multiply");
    console.log("option 4: divide");
    console.log("option 5: exit");
  
    rl.question('Enter first number: ', (val1) => {
        val1 = parseInt(val1);
      rl.question('Enter second number: ', (val2) => {
        val2 = parseInt(val2);
        rl.question('Enter option: ', (option) => {
          option = parseInt(option);
  
          switch (option) {
            case 1:
              console.log("Result: " + adder(val1, val2));
              startCalculator();
              break;
            case 2:
              console.log("Result: " + subtractor(val1, val2));
              startCalculator();
              break;
            case 3:
              console.log("Result: " + multiplier(val1, val2));
              startCalculator();
              break;
            case 4:
              console.log("Result: " + divider(val1, val2));
              startCalculator();
              break;
            case 5:
              console.log("Exiting");
              rl.close();
              break;
            default:
              console.log("Invalid option");
              startCalculator();
              break;
          }
        });
      });
    });
  }
  
  startCalculator();
