{
    /* 4 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1 Получить все товары, у которых есть фотографии, можете использовать метод filter 
    2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
    , как устроен sort можно посмотреть например здесь или в
    дополнительных видео в материалах урока. */

    'use strict';
    console.log(' ');
    console.log('Задание 4');
    const products = [{
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];


    let photoProducts = products.filter(product => 'photos' in product && product.photos.length > 0);
    /*
    let photoProducts = products.filter(function(product) {
            if (product.photos && (product.photos.length > 0)) {
                return product.photos;
            }
        })
         не получалось записать в обычной форме функцию, но вроде работает
    */
    console.log(photoProducts);
    let sortedPrice = products.sort(function(a, b) {
        return a.price - b.price;
    });
    console.log(sortedPrice);
}