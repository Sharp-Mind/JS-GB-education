// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML-структуре. Там должен быть только div​ , в который будет вставляться корзина,
// сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: ​ n ​ товаров на сумму ​ m ​ рублей».

var userDiscount = 0.05;        // предположим, у пользователя есть скидка на 5%.

function Cart() {
    this.total = 0;
    this.itemId = [];
    this.goods = [];
    this.prices = [];
    this.description = [];
    this.goodsIdcator = [];
    this.discounted = false;
    this.inCartId = [];
    this.toDeleteProduct = null;



    // ссылка на основной блок:
    this.cartDiv = document.querySelector('.cart_div');

    // создание блоков:
    this.emptyCartDiv = document.createElement('div');
    this.totalDiv = document.createElement('div');
    this.totalDivLeft = document.createElement('div');
    this.totalDivRight = document.createElement('div');
    this.discountedMsg = document.createElement('div');
    this.discountButtonDiv = document.createElement('div');

    // задание параметров:
    this.emptyCartDiv.insertAdjacentHTML('afterBegin', 'Корзина пуста.');
    this.emptyCartDiv.className = 'empty_cart_div';

    this.totalDivLeft.insertAdjacentHTML('afterBegin', 'Итого: ');
    this.totalDivRight.id = 'total_div_right';
    this.totalDiv.style.margin = '10px';
    this.totalDiv.style.justifyContent = 'space-between';

    // this.discountedMsg.id = 'discounted_msg';
    this.discountedMsg.insertAdjacentHTML('afterBegin', 'С учётом вашей скидки (' + userDiscount * 100 + '%).');
    this.discountedMsg.style.display = 'none';
    this.discountedMsg.style.paddingLeft = '10px';

    this.discountButtonDiv.className = 'discount_button_div';
    this.discountButtonDiv.insertAdjacentHTML('afterBegin', 'Применить скидку ' + userDiscount * 100 + '%.')

    // добавление блоков в DOM:
    this.cartDiv.appendChild(this.emptyCartDiv);
    this.totalDiv.appendChild(this.totalDivLeft);
    this.totalDiv.appendChild(this.totalDivRight);
    this.cartDiv.appendChild(this.totalDiv);
    this.cartDiv.appendChild(this.discountButtonDiv);
    this.cartDiv.appendChild(this.discountedMsg);

    // переключение видимости блоков с общей стоимостью и с сообщением о пустой корзине:  
    this.checkDivs = function () {
        if (this.goods.length == 0) {
            this.totalDiv.style.display = 'none';
            this.emptyCartDiv.style.display = 'flex';

            // отмена скидки:
            this.discounted = false;
            this.discountButtonDiv.style.display = 'flex';
            this.discountedMsg.style.display = 'none';

        } else {
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

        if (this.discounted) {
            summ *= (1 - userDiscount);
        };

        this.total = summ;
        return this.total;
    };

    // применение скидки:
    this.makeDiscount = function () {
        if (!this.discounted) {
            this.total *= (1 - userDiscount);
            this.discounted = true;
            this.totalDivRight.innerHTML = this.total + ' р';
            this.discountedMsg.style.display = 'flex';
            this.discountButtonDiv.style.display = 'none';
        };
    };

    // добавление товаров:
    this.addGoods = function (inx) {
        if (this.inCartId.length > 0) {
            this.inCartId.push(this.inCartId[this.inCartId.length - 1] + 1);
        } else {
            this.inCartId.push(0);
        };
        // this.itemId.push(this.stockId.indexOf(inx), 1);
        this.itemId.push(inx);
        this.goods.push(stock.name[inx]);
        this.prices.push(stock.price[inx]);
        this.description.push(stock.description[inx]);
        this.goodsIdcator.push(stock.itemId[inx]);

        // добавление блока для нового товара:
        this.goodsDiv = document.createElement('div');
        this.priceDiv = document.createElement('div');
        this.deleteDiv = document.createElement('div');

        // параметры для блока:
        this.goodsDiv.id = 'goods_div';
        this.goodsDiv.insertAdjacentHTML('afterBegin', stock.name[inx]);
        this.priceDiv.insertAdjacentHTML('afterBegin', stock.price[inx] + ' р');

        this.goodsDiv.className = 'goods_div';
        this.deleteDiv.className = 'delete_button_div';
        this.deleteDiv.insertAdjacentHTML('afterBegin', 'X');
        this.goodsDiv.dataset.cart_inx = this.inCartId[this.inCartId.length - 1];

        this.totalDivLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.getSumm() + ' р';

        this.checkDivs();

        // добавление блоков в DOM:
        this.cartDiv.insertBefore(this.goodsDiv, this.totalDiv);
        this.goodsDiv.appendChild(this.priceDiv);
        this.goodsDiv.appendChild(this.deleteDiv);
    };

    // удаление товаров:
    this.deleteGoods = function (cart_inx) {

        this.cartDiv = document.querySelector('.cart_div');
        this.toDeleteProduct = document.querySelector('[data-cart_inx="' + cart_inx + '"]');

        this.innerInx = this.itemId[this.inCartId.indexOf(cart_inx)];

        this.itemId.splice(this.inCartId.indexOf(cart_inx), 1);
        this.goods.splice(this.goods.indexOf(this.innerInx), 1);
        this.prices.splice(this.prices.indexOf(this.innerInx), 1);
        this.description.splice(this.description.indexOf(this.innerInx), 1);
        this.goodsIdcator.splice(this.goodsIdcator.indexOf(this.innerInx), 1);

        this.totalDivLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.getSumm() + ' р';

        this.toDeleteProduct.remove();

        this.inCartId.splice(this.inCartId.indexOf(this.innerInx), 1);

        this.checkDivs();
    };
};



function Product() {
    this.itemId = [];
    this.name = [];
    this.price = [];
    this.description = [];
    this.stockId = [];

    var catalog = document.querySelector('#catalog');


    this.addProduct = function (item, price, descr, idcator) {
        this.name.push(String(item));
        this.price.push(Number(price));
        this.description.push(String(descr));
        this.itemId.push(String(idcator));
        console.log('Товар ' + item + ' успешно добавлен.');
    };

    this.oneStep = function (inx) {
        this.productItem = document.createElement('div');
        this.nameDiv = document.createElement('div');
        this.priceDiv = document.createElement('div');
        this.descriptionDiv = document.createElement('div');
        this.buttonDiv = document.createElement('div');

        this.productItem.className = 'product_item';
        this.nameDiv.className = 'product_item_div';
        this.nameDiv.id = 'images_here';
        this.priceDiv.className = 'product_item_div';
        this.descriptionDiv.className = 'product_item_div';

        this.buttonDiv.className = 'product_item_div button_tocart_div';
        this.buttonDiv.id = 'button_tocart';
        this.buttonDiv.innerHTML = 'Купить';

        this.nameDiv.style.textAlign = 'left';

        this.priceDiv.style.textAlign = 'right';
        this.priceDiv.style.minWidth = '80px';

        this.buttonDiv.style.marginLeft = '20px';

        this.nameDiv.innerHTML = this.name[inx];
        this.priceDiv.innerHTML = this.price[inx];
        this.descriptionDiv.innerHTML = this.description[inx];

        this.productItem.dataset.index = inx;
        this.stockId.push(inx);

        this.productItem.appendChild(this.nameDiv);
        this.productItem.appendChild(this.descriptionDiv);
        this.productItem.appendChild(this.priceDiv);
        this.productItem.appendChild(this.buttonDiv);

        catalog.appendChild(this.productItem);
    };

    this.getProducts = function () {
        for (let i = 0; i != this.name.length; this.oneStep(i++));
    };

    // -- про картинки:

    // this.imagesWindowDiv = document.createElement('div');
    // this.imagesWindowDiv.className = 'images_window_div';

    // document.querySelector('.main').appendChild(this.imagesWindowDiv);
};




// создание корзины cart1   
cart1 = new Cart;

// создание "склада" на странице сайта:
stock = new Product;

// добавление товаров на "склад":
stock.addProduct('HP', 45000, 'Notebook', 123533);     // название, цена, описание, любой идентификатор (штрих-код например)
stock.addProduct('Varta', 150, 'Batteries', 247263);
stock.addProduct('Dell', 7450, 'Dockstation', 003234);
stock.addProduct('Sony', 5000, 'Headphones', 902321);
stock.addProduct('Intel', 25730, 'CPU', 749431);
stock.addProduct('Samsung', 12355, 'Display', 348501);

// выкладка товаров:
stock.getProducts();

//обработчики событий:

//добавить товар в корзину:
document.querySelectorAll('.product_item').forEach(el => el.addEventListener('click', function (evt) {
    evt.target.id == 'button_tocart' ? cart1.addGoods(this.dataset.index) : null;
}, true));

// удалить товар из корзины:
document.querySelector('.cart_div').addEventListener('click', function (evt) {
    evt.target.className == 'delete_button_div' ? cart1.deleteGoods(evt.target.parentElement.dataset.cart_inx) : null;
}, true);

// сделать скидку:
document.querySelector('.discount_button_div').addEventListener('click', function () {
    cart1.goods.length > 0 ? cart1.makeDiscount() : null;
}, true);


// ------------------------- про картинки


// document.querySelectorAll('.product_item').forEach(el => el.addEventListener('click', function (evt) {

//     console.log(this, evt.target);

// }, true))