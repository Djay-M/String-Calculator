const numString = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const convertStrToNumber = (str) => parseInt(str);

exports.calculateStringVal = (inputString) => {
  let val = 0;
  let curWindow = [];
  let negativeNumbers = [];
  let positiveNumbers = [];

  // extract only POSTIVIE numbers from inputString
  [...inputString].forEach((char) => {
    if (numString[char] >= 0 || char === "-") curWindow.push(char);
    else {
      // checking if the number(curWindow) is negative
      if (curWindow?.[0] === "-") negativeNumbers.push(curWindow.join(""));
      else {
        if (curWindow.length) {
          const num = convertStrToNumber(curWindow.join(""));
          val += num;
          positiveNumbers.push(num);
        }
      }
      curWindow = [];
    }
  });

  if (curWindow.length) {
    if (curWindow?.[0] === "-") negativeNumbers.push(curWindow.join(""));
    else {
      const num = convertStrToNumber(curWindow.join(""));
      val += num;
      positiveNumbers.push(num);
    }
  }

  return { val, negativeNumbers, positiveNumbers };
};
