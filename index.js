"use strict";

// concat
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arrayA = ["1", "2", "3"];
const arrayB = ["4", "5", "6"];
const arrayC = arrayA.concat(arrayB);
console.log(arrayC);

// reverse
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arrayD = ["1", "2", "3"];
console.log(arrayD.reverse());

// push, unshift
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/////////push/////////
const arrayE = ["1", "2", "3"];
arrayE.push("4", "5", "6");
console.log(arrayE);
/////////unshift/////////
const arrayF = ["1", "2", "3"];
arrayF.unshift("4", "5", "6");
console.log(arrayF);

// shift, pop
// Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
// Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
/////////shift/////////
const arrayG = ["js", "css", "html"];
console.log(arrayG[0]);
arrayG.shift();
console.log(arrayG);
/////////pop/////////
const arrayH = ["js", "css", "html"];
console.log(arrayH[arrayH.length - 1]);
arrayH.pop();
console.log(arrayH);

// slice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// splice
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// sort
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// Во всех задания ниже сделать функцию!!!
// В комментариях к коду описать задание.
// =========================================================
// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
// Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
