"use strict";

const arrayFirst = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const arrayConcat = arrayFirst.concat(arrayTwo);
console.log(arrayConcat);

const arrayReverse = [1, 2, 3];
console.log(arrayReverse.reverse());

const arrayPush = [1, 2, 3];
arrayPush.push(4, 5, 6);
console.log(arrayPush);

const arrayUnshift = [1, 2, 3];
arrayUnshift.unshift(4, 5, 6);
console.log(arrayUnshift);

const arrayShift = ["js", "css", "html"];
console.log(arrayShift[0]);
arrayShift.shift();
console.log(arrayShift);

const arrayPop = ["js", "css", "html"];
console.log(arrayPop[arrayPop.length - 1]);
arrayPop.pop();
console.log(arrayPop);

const arrayA = [1, 2, 3, 4, 5];
const arrayB = arrayA.slice(0, 3);
console.log(arrayB);

const arrayC = [1, 2, 3, 4, 5];
const arrayD = arrayC.slice(3);
console.log(arrayD);

const arrayE = [1, 2, 3, 4, 5];
arrayE.splice(0, 3, 1);
console.log(arrayE);

const arrayF = [1, 2, 3, 4, 5];
const arrayG = arrayF.splice(1, 3);
console.log(arrayG);

const arrayH = [1, 2, 3, 4, 5];
arrayH.splice(3, 0, "a", "b", "c");
console.log(arrayH);

const arrayI = [1, 2, 3, 4, 5];
arrayI.splice(1, 0, "a", "b");
arrayI.splice(6, 0, "c");
arrayI.splice(8, 0, "e");
console.log(arrayI);

const arraySort = [3, 4, 1, 2, 7];
arraySort.sort();
console.log(arraySort);

// Во всех задания ниже сделать функцию!!!
// В комментариях к коду описать задание.
// =========================================================//
// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку,
// и возвращать true, если строка есть в массиве, и false - если нет
/**
 *
 * @param {array} array
 * @param {string} element
 * @returns {boolean}
 */
function hasElem(array, element) {
  return array.includes(element);
}

const arrayFacts = [1, "hello", 3, 4, 5, "a", "find me"];
const elemDetect = "find me";
console.log(hasElem(arrayFacts, elemDetect));

// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
/**
 *
 * @param {array} array
 * @param {string} element
 * @returns {boolean}
 */
function hasElemtIs(array, element) {
  if (array.length <= 0) {
    return "Passed an empty array. It's very bad.";
  }
  return array.includes(element);
}

const arrayData = [1, "hello", 3, 4, 5, "a", "find me"];
const elemFind = 5;
console.log(hasElemtIs(arrayData, elemFind));

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
/**
 *
 * @param {array} array
 * @returns {boolean}
 */
function hasElemIdent(array) {
  if (array.length <= 0) {
    return "Passed an empty array. Try to fill in the data. ";
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      return true;
    }
  }
  return false;
}

const arrayDataCheck = [1, "hello", "hell", 3, 1, 15, "a", 13, "find me"];
console.log(hasElemIdent(arrayDataCheck));

// Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
/**
 *
 * @returns {array}
 */
function fillArray() {
  return Array.from({ length: 10 }, () => getRndInteger(5, 33));
}

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(fillArray());

// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
/**
 *
 * @param {array} array
 * @returns {number}
 */
function findArithmetic(array) {
  if (array.length <= 0) {
    return "The array needs to be filled with data.";
  }

  return array.reduce((elem, elem1) => elem + elem1) / array.length;
}
const arr = [12, 15, 20, 25, 59, 79];
console.log(findArithmetic(arr));
