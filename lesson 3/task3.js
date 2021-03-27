{
    /*Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
    15%, можете использовать метод forEach*/
    'use strict';
    console.log('');
    console.log('Задание 3');
    const products = [{
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach(function(sale) {
        sale.price *= 0.85;
        console.log(sale.price);
    })
}