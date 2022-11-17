const raisinAlarm = function(cookie) {
  //loop through the input array
  for (let bite of cookie) {
    //identify if any elements is a raisin
    if (bite === "🍇") {
      // if raisin found return "Raisin alert!"
      return "Raisin alert!";
    }
  }
  // otherwise return "All good!"
  return "All good!";
};

const raisinAlarmArray = function(cookies) {
  let cookieJar = [];

  //loop through the outer array
  for (let cookie of cookies) {
    let flag = false;
    for (let bite of cookie) {
      if (bite === "🍇") {
        flag = true;
      }
    } if (flag === true) {
      cookieJar.push("Raisin alert!");
    } else {
      cookieJar.push("All good!");
    }
  }
  return cookieJar;
};



//output["Raisin alert!", "Raisin alert!", "All good!"]
//Test cases

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ]));