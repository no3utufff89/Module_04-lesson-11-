'use strict';
console.log('Задание 1 на рекурсию');
const min = 1;
const max = 100;
const number = Math.floor(Math.random() * (max - min + 1)) + min;

const gameBot = (number) => {
  const answer = +prompt(`Я загадал число от
  ${min} до ${max} попробуй его отгадать`);
  if (answer === number) {
    alert('Угадал');
  }
  if (answer === 0) {
    return alert('Отмена');
  }
  if (answer > number) {
    alert('Мое число меньше');
    return gameBot(number);
  }
  if (answer < number) {
    alert('Мое число больше');
    return gameBot(number);
  }

  if (Number.isNaN(answer)) {
    alert('Надо вводить числа');
    return gameBot(number);
  }
};
gameBot(number);

console.log('Задание 2 на рекурсию');

const randomArr = [];
const getRandom = () => Math.floor(Math.random() * 10);

const arrayFunc = (arr) => {
  randomArr.push(getRandom());
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  if (arrSum < 50) {
    return arrayFunc(randomArr);
  } else {
    console.log(randomArr);
    console.log(`Сумма элементов массива ${arrSum}`);
  }
};
arrayFunc(randomArr);

console.log('Задание 1 на This');

const rectangle = {
  width: 5,
  height: 5,
  get newWidth() {
    return this.width;
  },
  get newHeight() {
    return this.height;
  },
  set newWidth(width) {
        isNaN(width) ? console.log(
            `Вы ввели не число, изменения не приняты`) : this.width = width;
  },
  set newHeight(height) {
        isNaN(height) ? console.log(
            'Вы ввели не число, изменения не приняты') : this.height = height;
  },
  get perimetr() {
    return `Периметр фигуры = ${(this.width + this.height) * 2} см`;
  },
  get area() {
    return `Площадь фигуры = ${this.width * this.height} см`;
  },
};
rectangle.newWidth = 10;
rectangle.newHeight = 'dfsf';
console.log(rectangle.perimetr);
console.log(rectangle.area);
