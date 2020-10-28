'use strict';

const num = 266219,
	strNum = num.toString(),
	arrNum = strNum.split('');

const reducer = (accumulator, currentValue) => accumulator * currentValue; // функция произведения элементов в массиве

console.log( 'Сумма произведения цифр в числе: ' + arrNum.reduce(reducer) );

const sumPow = arrNum.reduce(reducer) ** 3;

console.log( 'Возводим в степень: ' + sumPow);
console.log( 'Показываем первые два символа: ' + sumPow.toString().slice(0, 2) );