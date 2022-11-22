
const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");
  //place holder to hold key value
  const keyHolder = {};
  //assign obj2 key2 to place holder
  keyHolder["tempKey"] = object2[key2];
  //make obj2 key2 = obj1 key1
  object2[key2] = object1[key1];
  //place holder to obj1 key1
  object1[key1] = keyHolder["tempKey"];
  console.log("object1: ", object1);
  console.log("object2: ", object2);
};



swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });

/*
Expected Logs
Swap!
object1: { a: 5 , b: 2, c: 3 }
object2: { a: 4, b: 3, c: 1 }
Swap!
object1: { a: 8 , b: 12, c: 6 }
object2: { a: 5, b: 1, c: 2, d: 7}
Swap!
object1: { a: 1 , b: 3, c: 5, d: 7 }
object2: { a: 4, b: 0, c: 3 }
*/