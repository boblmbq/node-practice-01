function mathOperations(operation, numbersArr) {
  switch (operation) {
    case "sum":
      return numbersArr.reduce((acc, number) => acc + number);
    case "sub":
      return numbersArr.reduce((acc, number) => acc - number);
    case "mult":
      return numbersArr.reduce((acc, number) => acc * number);
    case "div":
      return numbersArr.reduce((acc, number) => acc / number);

    default:
      return "unknown operation type";
  }
}


module.exports = mathOperations