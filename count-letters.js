var countLetters = function(inputString) {
  var returnObj = {};

  inputString = inputString.split(" ").join("");

  for (var i = 0; i < inputString.length; i++) {
    // check if returnObj has a key of inputString[i]
    // if it doesn't, create new key with a value of 1
    // if it does, increment value at key
    if (returnObj.hasOwnProperty(inputString[i])) {
      returnObj[inputString[i]] += 1;
    } else {
      returnObj[inputString[i]] = 1;
    }
  }

  return returnObj;
};

console.log(countLetters("lighthouse in the house"));
