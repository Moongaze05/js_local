'use strict';
/*5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.*/

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            doSum(arg1, arg2);
            break;
        case '-':
            doDifference(arg1, arg2);
            break;
        case '*':
            doMultiply(arg1, arg2);
            break;
        case '/':
            doDivision(arg1, arg2);
            break;
        default:
            alert('Введена некорректная операция')
    }
}

let x = +prompt('Введите первое число: ', '');
let z = prompt('Введите одну из операций: +,-,*,/', '');
let y = +prompt('Введите второе число: ', '');
mathOperation(x, y, z);