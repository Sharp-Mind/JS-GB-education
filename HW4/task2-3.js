// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
// объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
// 3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в
// интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к
// тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
// разных местах давал возможность вызывать разные методы.


var cart = [];

cart.push(233.90);
cart.push(500.00);
cart.push(4080.55);
cart.push(7345.89);

function totalSumm(arr) {
    var total = 0;
    var i = 0;
    while (i < arr.length) {
        total += arr[i];
        i++;
    };
    return total;
};

console.log(totalSumm(cart));


var userDiscount = 0.05;                                                        // предположим, у пользователя есть скидка на 5%.
var notebook = { name: 'HP', price: 55685, description: 'HP notebook' };        // товар "ноутбук"
var batteries = { name: 'Varta', price: 150, description: ' Varta batteries' }; // товар "батарейки"

function Cart() {
    this.total = 0;
    this.goods = [];
    this.prices = [];
    this.description = [];
    this.discounted = false;

    // вывод суммы стоимости товаров:
    this.getSumm = function () {
        let i = 0;
        let summ = 0;
        while (i < this.prices.length) {
            summ += this.prices[i];
            i++;
        };
        this.total = summ;
        return this.total;
    };

    // применение скидки:
    this.makeDiscount = function () {
        if (this.discounted) {
            return 'Скидка уже была применена';
        } else {
            this.total *= (1 - userDiscount);
            this.discounted = true;
            return this.total;
        };
    };

    // добавление товаров:
    this.addGoods = function (item) {
        this.goods.push(item.name);
        this.prices.push(item.price);
        this.description.push(item.description);
    };

    // удаление товаров:
    this.deleteGoods = function (item) {
        this.goods.splice(this.goods.indexOf(item.name), 1);
        this.prices.splice(this.prices.indexOf(item.price), 1);
        this.description.splice(this.description.indexOf(item.description), 1);
    };

    // вывод описания товара:
    this.getDescription = function (item) {
        return item.description;
    };
};


cart1 = new Cart;                             // создание корзины cart1
cart1.addGoods(notebook);                     // добавить товар notebook
cart1.addGoods(batteries);                    // добавить товар batteries
console.log(cart1.goods, cart1.prices);       // выести массивы с товарами и ценами
console.log(cart1.getDescription(notebook));  // вывести описание товара 
cart1.deleteGoods(notebook);                  // удалить товар notebook
console.log(cart1.goods, cart1.prices);       // выести массивы с товарами и ценами
console.log(cart1.getSumm());                 // вывести сумму стоимости товаров    
console.log(cart1.makeDiscount());            // сделать скидку
console.log(cart1.makeDiscount());            // попытка сделать скидку повторно
