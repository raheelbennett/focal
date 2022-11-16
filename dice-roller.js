// Takes parameter from the command line.
const args = process.argv.slice(2);

//Need to make sure it's only a single parameter and it's a number. Otherwise user will get a warning message.
if (args.length > 1 || args % 1 !== 0) {
  return console.log("Please enter a single integer");
}

//Need to create a function that generates a random number from 1 to 6, number of times equal to user input value.
//Use the Math.random function to generate a random number between 1 and 6
let randomNum = function() {
  let x = 0;
  while (true) {
    x = Math.floor(10 * Math.random());
    if (x <= 6 && x >= 1) { // The loop through random numbers will continue until it's between 1 and 6.
      return x;
    }
  }
};

//loop over the randomNum function that generates a random number between 1-6 time the original argument.
let final = [];
for (let i = 0; i < args[0]; i++) {
  final.push(randomNum());
}
// Final output has to be a sting that says rolled the number of dice followed the outcomes of the rolls.
console.log(`Rolled ${args[0]} dice: ${final.join(", ")}`);