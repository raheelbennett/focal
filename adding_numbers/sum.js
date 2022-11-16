const args = process.argv.slice(2);

let sum = function() { // creating a function sum that will take two arguments, convert them to integers and then add them. 
  return parseInt(args[0]) + parseInt(args[1]);
};

console.log(sum());
