{
    /* 1.1
    Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
    наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните
    их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
    уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри
    функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке). */

    'use strict';
    console.log('');
    console.log('task1-1');
    console.log('ES5');

    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.make25PercentDiscount = function() {
        this.price *= 0.75;
    }

    let obj1Product = new Product('Яблоко', 200);
    console.log(obj1Product);
    obj1Product.make25PercentDiscount();
    console.log(obj1Product);

    console.log('');
    console.log('ES6');

    // ВОПРОС. при вызове console.log('Текст' + obj1Product) объект выводится неопределенным, это из-за неочевидного приведения? Как исправить?

    class Product2 {

        constructor(name2, price2) {
            this.name2 = name2;
            this.price2 = price2;
        }

        make25PercentDiscount2() {
            this.price2 *= 0.75;
        }
    }

    let obj2Product = new Product2('Ананас', 400);
    console.log(obj2Product);
    obj2Product.make25PercentDiscount2();
    console.log(obj2Product);

}