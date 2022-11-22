//Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a text in order to make it usable as a title or headline.


//Construct the a function called titleCase that takes a text string and gives it title casing.

const titleCase = (text) => {
  if (text === "") {
    return "";
  }
  let finalString = text[0].toUpperCase();
  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === " ") {
      finalString += text[i].toUpperCase();
    } else {
      finalString += text[i].toLowerCase();
    }
  } return finalString;
};

console.log(titleCase("WHAT HAPPENS HERE"));