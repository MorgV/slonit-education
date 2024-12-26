function findingSumThreeBestBuyers(sumArray) {
  let sumResult = 0;
  sumArray.forEach((num) => {
    sumResult += num;
  });
  return sumResult;
}

let bestSumArray = [10000, 20000, 30000];
console.log(findingSumThreeBestBuyers(bestSumArray));

// Стало понятным:
// 1 - чем занимается функция
// 2 - какие данные принимает на вход
// 3 - и с чем работает внутри функции
