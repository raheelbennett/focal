const args = process.argv.slice(2); // Taking in arguments and storing them as an array in another variable without the first two elements of the process.argv.

const reverse = function(str) { // creating a function reverse that will revrse the string of any element fed to it, and return reversed string back to the functiopn.
  let rts = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rts += str[i];
  } return rts;
};


const reverseAll = function(args) { // function reserveAll will take any length of array, corresponding to any number of command line arguments, and use the reverse function before outputting them one at a time to the console.
  for (let arg of args) {
    console.log(reverse(arg));
  }
};

reverseAll(args);

