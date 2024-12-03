// Binary Search

const rand = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

let number = rand(99);
console.log("1 компьютер загадал: ", number);

const searchSecretNum = (numSearch) => {
  let max = 100;
  let min = 1;

  let mid = Math.floor((max + min) / 2);

  while (mid !== numSearch) {
    mid = Math.floor((max + min) / 2);
    console.log(`Компьютер 2: Пробую число ${mid}.`);
    if (mid < numSearch) {
      min = mid;
      console.log("Больше");
    } else if (mid == numSearch) {
      console.log("Угадал");
      return null;
    } else if (mid > numSearch) {
      max = mid;
      console.log("Меньше");
    }
  }
};

searchSecretNum(number);

//node SecretNum.js
