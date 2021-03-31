{
    /* 1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true. */
    'use strict';
    console.log('');
    console.log('task1-2');
    console.log('ES5');

    function Post(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    Post.prototype.edit = function(editedText) {
        this.text = editedText;
    }

    function AttachedPost(author, text, date) {
        Post.call(this, author, text, date);
        this.highlighted = false;
    }

    AttachedPost.prototype = Object.create(Post.prototype);
    AttachedPost.prototype.constructor = AttachedPost;

    AttachedPost.prototype.makeTextHighlighted = function() {
        this.highlighted = true;
    }

    let objPost = new Post('Пушкин', 'Стих', '1825');
    console.log(objPost);
    objPost.edit('Поэма');
    console.log(objPost);


    let objAttachedPost = new AttachedPost('Гоголь', 'Роман', '1826')
    console.log(objAttachedPost);
    objAttachedPost.makeTextHighlighted();
    objAttachedPost.edit('Стих');
    console.log(objAttachedPost);

    console.log('ES6');
    class Post2 {
        constructor(author2, text2, date2) {
            this.author2 = author2;
            this.text2 = text2;
            this.date2 = date2;
        }
        edit2(editedText2) {
            this.text2 = editedText2;
        }
    }
    class AttachedPost2 extends Post2 {
        constructor(author2, text2, date2) {
            super(author2, text2, date2);
            this.highlighted2 = false;
        }
        makeTextHighlighted2() {
            this.highlighted2 = true;
        }
    }
    let objPost2 = new Post2('Достоевский', 'Роман', '1860')
    console.log(objPost2);
    objPost2.edit2('Рассказ');
    console.log(objPost2);

    let objAttachedPost2 = new AttachedPost2('Толстой', 'Произведение', '1870');
    console.log(objAttachedPost2);
    objAttachedPost2.edit2('Эпопея');
    objAttachedPost2.makeTextHighlighted2();
    console.log(objAttachedPost2);
}