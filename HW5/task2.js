// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML-структуре. Там должен быть только div​ , в который будет вставляться корзина,
// сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: ​ n ​ товаров на сумму ​ m ​ рублей».

var userDiscount = 0.05;                                                        // предположим, у пользователя есть скидка на 5%.
var notebook = { name: 'HP', price: 55685, description: 'HP notebook' };        // товар "ноутбук"
var batteries = { name: 'Varta', price: 150, description: ' Varta batteries' }; // товар "батарейки"

function Cart() {
    this.total = 0;
    this.goods = [];
    this.prices = [];
    this.description = [];
    this.discounted = false;



    // ссылка на основной блок:
    this.cartDiv = document.querySelector('.cart_div');

    // создание блоков:
    this.emptyCartDiv = document.createElement('div');
    this.totalDiv = document.createElement('div');
    this.totalDivLeft = document.createElement('div');
    this.totalDivRight = document.createElement('div');
    this.discountedMsg = document.createElement('div');

    // задание параметров:
    this.emptyCartDiv.innerHTML = 'Корзина пуста.';
    this.emptyCartDiv.style.borderStyle = 'solid';
    this.emptyCartDiv.style.borderWidth = '0.25px';
    this.emptyCartDiv.style.padding = '10px';
    this.emptyCartDiv.style.marginTop = '10px';

    this.totalDivLeft.innerHTML = 'Итого: ';
    this.totalDivRight.id = 'total_div_right';
    this.totalDiv.style.margin = '10px';
    this.totalDiv.style.justifyContent = 'space-between';

    this.discountedMsg.id = 'discounted_msg';
    this.discountedMsg.style.display = 'none';

    // добавление блоков в DOM:
    this.cartDiv.appendChild(this.emptyCartDiv);
    this.totalDiv.appendChild(this.totalDivLeft);
    this.totalDiv.appendChild(this.totalDivRight);
    this.cartDiv.appendChild(this.totalDiv);
    this.cartDiv.appendChild(this.discountedMsg);

    // переключение видимости блоков с общей стоимостью и с сообщением о пустой корзине:  
    this.checkDivs = function () {
        if (this.goods.length == 0) {
            this.totalDiv.style.display = 'none';
            this.emptyCartDiv.style.display = 'flex';
        } else if (this.goods.length > 0) {
            this.emptyCartDiv.style.display = 'none';
            this.totalDiv.style.display = 'flex';
        };
    };

    this.checkDivs();

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

    this.discountedMessage = function () {
        this.discountedMsg.style.display = 'flex';
        this.discountedMsg.innerHTML = 'Скидка уже была применена.';
    };

    // применение скидки:
    this.makeDiscount = function () {
        if (this.discounted) {
            this.discountedMessage;
        } else {
            this.total *= (1 - userDiscount);
            this.discounted = true;

            this.totalDivRight.innerHTML = this.total + ' р';
        };
    };

    // добавление товаров:
    this.addGoods = function (item) {
        this.goods.push(item.name);
        this.prices.push(item.price);
        this.description.push(item.description);

        // добавление блока для нового товара:
        this.goodsDiv = document.createElement('div');
        this.priceDiv = document.createElement('div');

        // параметры для блока:
        this.goodsDiv.id = 'goods_div';
        this.goodsDiv.innerHTML = item.name;         // отдельные блоки внутри для названия и стоимости для выравнивания
        this.priceDiv.innerHTML = item.price + ' р';
        this.goodsDiv.style.padding = '10px';
        this.goodsDiv.style.borderStyle = 'solid';
        this.goodsDiv.style.borderWidth = '0.25px';
        this.goodsDiv.style.display = 'flex';
        this.goodsDiv.style.justifyContent = 'space-between';
        this.goodsDiv.style.marginTop = '10px';

        this.totalDivLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.getSumm() + ' р';

        this.checkDivs();

        // добавление блоков в DOM:
        this.cartDiv.insertBefore(this.goodsDiv, this.totalDiv);
        this.goodsDiv.appendChild(this.priceDiv);

    };

    // удаление товаров:
    this.deleteGoods = function (item) {
        this.goods.splice(this.goods.indexOf(item.name), 1);
        this.prices.splice(this.prices.indexOf(item.price), 1);
        this.description.splice(this.description.indexOf(item.description), 1);

        var goodsDiv = document.querySelector('#goods_div');

        this.totalDivLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.getSumm() + ' р';
        this.cartDiv.removeChild(goodsDiv);

        this.checkDivs();
    };

};


cart1 = new Cart;                                // создание корзины cart1
cart1.addGoods(notebook);                        // добавить товар notebook
cart1.addGoods(batteries);                       // добавить товар batteries
cart1.deleteGoods(notebook);                     // удалить товар notebook    
cart1.makeDiscount();                            // сделать скидку
