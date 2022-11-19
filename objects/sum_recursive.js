function sumToOne(n) {
  // if (n === 1) {
  //   return 1;
  // }
  let sum = n;
 if(n > 0) {
  
  sum += sumToOne(n-1);
 } return sum;
};

console.log(sumToOne(4));