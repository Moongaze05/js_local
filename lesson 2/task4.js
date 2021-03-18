'use strict';
/*4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/

function doSum(a, b) {
    return alert('Сумма: ' + (a + b));
}

function doDifference(a, b) {
    return alert('Разность: ' + (a - b));
}

function doMultiply(a, b) {
    return alert('Произведение: ' + (a * b));
}

function doDivision(a, b) {
    return alert('Частное: ' + (a / b));
}
let x = +prompt('Введите первое число: ', '');
let y = +prompt('Введите второе число: ', '');
doSum(x, y);
doDifference(x, y);
doMultiply(x, y);
doDivision(x, y);