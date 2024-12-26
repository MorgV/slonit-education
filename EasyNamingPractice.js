function findingSumThreeBestBuyers(sumArray) {
  let sumResult = 0;
  sumArray.forEach((i) => {
    sumResult += i;
  });
  return sumResult;
}

let bestSumArray = [10000, 20000, 30000];
console.log(findingSumThreeBestBuyers(bestSumArray));
