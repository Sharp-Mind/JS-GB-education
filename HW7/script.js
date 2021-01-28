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
    this.uniqueInCartId = [];

    // ссылка на основной блок:
    this.cartDiv = document.querySelector('.cart_div');

    // создание блоков:
    this.emptyCartDiv = document.createElement('div');
    this.totalDiv = document.createElement('div');
    this.totalDivLeft = document.createElement('div');
    this.totalDivRight = document.createElement('div');
    this.discountedMsg = document.createElement('div');
    this.discountButtonDiv = document.createElement('div');
    this.toMakeOrderButtonDiv = document.createElement('div');

    this.glassShowcaseDiv = document.createElement('div');
    this.glassShowcaseDiv.className = 'glass_showcase_div';

    this.orderWindowDiv = document.createElement('div');
    this.orderWindowCartContentDivCenter = document.createElement('div');
    this.orderWindowCartContentDiv = document.createElement('div');
    this.orderWindowCloseButtonDiv = document.createElement('div');
    this.orderWindowCloseButton = document.createElement('div');

    this.orderNextBtn = document.createElement('div');
    this.orderNextBtn.className = 'order_window_btn';

    this.orderNextBtn.insertAdjacentHTML('afterbegin', 'Далее');
    this.orderWindowCenterDiv = document.createElement('div');
    this.orderWindowCenterDiv.className = 'order_window_center';
    this.orderWindowCloseButtonDiv.className = 'order_window_close_button_div';
    this.orderWindowCloseButtonDiv.insertAdjacentHTML('afterbegin', '<u>Ваш заказ</u>');
    this.orderWindowCloseButton.className = 'order_window_close_button';
    this.orderWindowCloseButton.insertAdjacentHTML('afterbegin', 'X');
    this.orderWindowCartContentDiv.className = 'order_window_cart_content_div';
    this.orderWindowCartContentDivCenter.className = 'order_window_divs_center';

    this.orderWindowTotalDiv = document.createElement('div');
    this.orderWindowTotalLeft = document.createElement('div');
    this.orderWindowTotalRight = document.createElement('div');
    this.orderWindowTotalDiscountMsg = document.createElement('div');
    this.orderWindowTotalDiv.className = 'order_window_total_div';
    this.orderWindowTotalLeft.className = 'order_window_total_div_inner';
    this.orderWindowTotalRight.className = 'order_window_total_div_inner';
    this.orderWindowTotalDiscountMsg.className = 'order_window_total_discount_msg';
    this.orderWindowTotalDiscountMsg.style.display = 'none';
    this.orderWindowTotalDiscountMsg.insertAdjacentHTML('afterbegin', 'С учётом вашей скидки (' + userDiscount * 100 + '%).');

    this.orderWindowCartContentDivLabel = document.createElement('label');
    this.orderWindowCartContentDivLabel.className = 'order_window_cart_label';
    this.orderWindowCartContentDivLabel.insertAdjacentHTML('afterbegin', 'Всего в корзине:');
    this.orderWindowCartContentDivCenter.appendChild(this.orderWindowCartContentDivLabel);

    // блок адреса доставки:
    this.orderWindowAddressContainer = document.createElement('div');
    this.orderWindowAddressContainer.className = 'order_window_address_container';

    this.orderWindowAddressDiv = document.createElement('div');
    this.orderWindowAddressDiv.className = 'order_window_address_div';
    this.orderWindowAddressDiv.insertAdjacentHTML('afterbegin', '<u style="padding: 10px;">Адрес доставки</u>');
    this.orderWindowAddressDiv.style.display = 'none';

    // левая часть блока заполнения адреса доставки:
    this.orderWindowAddressLeft = document.createElement('div');
    this.orderWindowAddressLeft.className = 'order_window_address_left';
    this.orderWindowAddressZipcodeTitle = document.createElement('div');
    this.orderWindowAddressZipcodeTitle.insertAdjacentHTML('afterbegin', 'Индекс:');
    this.orderWindowAddressZipcode = document.createElement('input');
    this.orderWindowAddressZipcode.className = 'input_address';
    this.orderWindowAddressZipcode.placeholder = '123456';
    this.orderWindowAddressPlaceTitle = document.createElement('div');
    this.orderWindowAddressPlace = document.createElement('input');
    this.orderWindowAddressPlace.className = 'input_address';
    this.orderWindowAddressPlace.placeholder = 'Москва';
    this.orderWindowAddressPlaceTitle.insertAdjacentHTML('afterbegin', 'Населённый пункт: ');
    this.orderWindowAddressStreetTitle = document.createElement('div');
    this.orderWindowAddressStreetTitle.insertAdjacentHTML('afterbegin', 'Улица: ');
    this.orderWindowAddressStreet = document.createElement('input');
    this.orderWindowAddressStreet.className = 'input_address';
    this.orderWindowAddressStreet.placeholder = 'Рябиновая ул.';

    // правая часть блока заполнения адреса доставки:
    this.orderWindowAddressRight = document.createElement('div');
    this.orderWindowAddressRight.className = 'order_windows_address_right';
    this.orderWindowAddressHouseTitle = document.createElement('div');
    this.orderWindowAddressHouseTitle.insertAdjacentHTML('afterbegin', 'Дом: ');
    this.orderWindowAddressHouse = document.createElement('input');
    this.orderWindowAddressHouse.className = 'input_address';
    this.orderWindowAddressHouse.placeholder = '15';
    this.orderWindowAddressBuildingTitle = document.createElement('div');
    this.orderWindowAddressBuildingTitle.insertAdjacentHTML('afterbegin', 'Строение/корпус: ');
    this.orderWindowAddressBuilding = document.createElement('input');
    this.orderWindowAddressBuilding.className = 'input_address';
    this.orderWindowAddressBuilding.placeholder = '2';
    this.orderWindowAddressApartTitle = document.createElement('div');
    this.orderWindowAddressApartTitle.insertAdjacentHTML('afterbegin', 'Квартира/офис: ');
    this.orderWindowAddressApart = document.createElement('input');
    this.orderWindowAddressApart.className = 'input_address';
    this.orderWindowAddressApart.placeholder = '4';

    // блоки-кнопки в блоке адреса доставки:
    this.addressButtonsDiv = document.createElement('div');
    this.addressButtonsDiv.className = 'address_btns_div';
    this.addressNextBtn = document.createElement('div');
    this.addressNextBtn.className = 'order_window_btn address_next_btn';
    this.addressNextBtn.insertAdjacentHTML('afterbegin', 'Далее');
    this.addressPrevBtn = document.createElement('div');
    this.addressPrevBtn.className = 'order_window_btn address_prev_btn';
    this.addressPrevBtn.insertAdjacentHTML('afterbegin', 'Назад');

    // блок с добавлением комментария к заказу:
    this.orderWindowCommentDiv = document.createElement('div');
    this.orderWindowCommentDiv.className = 'order_comment_div';
    this.orderWindowCommentDiv.style.display = 'none';
    this.orderWindowCommentLabel = document.createElement('label');
    this.orderWindowCommentLabel.className = 'order_comment_label';
    this.orderWindowCommentLabel.insertAdjacentHTML('afterbegin', '<u>Комментарий к заказу:</u>');
    this.orderWindowComment = document.createElement('textarea');
    this.orderWindowComment.className = 'order_comment_textarea';
    // кнопки в блоке добавления комментария:
    this.orderWindowCommentBtnsDiv = document.createElement('div');
    this.orderWindowCommentBtnsDiv.className = 'comment_btns_div';
    this.orderWindowCommentNextBtn = document.createElement('div');
    this.orderWindowCommentNextBtn.className = 'order_window_btn comment_next_btn';
    this.orderWindowCommentNextBtn.insertAdjacentHTML('afterbegin', 'Оформить заказ');
    this.orderWindowCommentPrevBtn = document.createElement('div');
    this.orderWindowCommentPrevBtn.className = 'order_window_btn comment_prev_btn';
    this.orderWindowCommentPrevBtn.insertAdjacentHTML('afterbegin', 'Назад');

    // блок с сообщением после совершения заказа:
    this.orderWindowThanksDiv = document.createElement('div');
    this.orderWindowThanksDiv.className = 'order_thanks_msg';
    this.orderWindowThanksDiv.insertAdjacentHTML('afterbegin', 'Спасибо за заказ!');
    this.orderWindowThanksDiv.style.display = 'none';

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

    //параметры для кнопки применения скидки:
    this.discountButtonDiv.className = 'discount_button_div';
    this.discountButtonDiv.insertAdjacentHTML('afterBegin', 'Применить скидку ' + userDiscount * 100 + '%.')

    //параметры для кнопки перехода к окну оформления заказа:
    this.toMakeOrderButtonDiv.className = 'to_make_order_button_div';
    this.toMakeOrderButtonDiv.insertAdjacentHTML('afterbegin', 'Заказать');

    //параметры для окна офомрления заказа:
    this.orderWindowDiv.className = 'order_window_div';

    // добавление блоков в DOM:
    this.orderWindowCloseButtonDiv.appendChild(this.orderWindowCloseButton);
    this.orderWindowCenterDiv.appendChild(this.orderWindowCloseButtonDiv);
    this.orderWindowCenterDiv.appendChild(this.orderWindowCartContentDiv);
    this.orderWindowTotalDiv.appendChild(this.orderWindowTotalLeft);
    this.orderWindowTotalDiv.appendChild(this.orderWindowTotalRight);

    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressZipcodeTitle);
    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressZipcode);
    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressPlaceTitle);
    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressPlace);
    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressStreetTitle);
    this.orderWindowAddressLeft.appendChild(this.orderWindowAddressStreet);

    this.orderWindowAddressRight.appendChild(this.orderWindowAddressHouseTitle);
    this.orderWindowAddressRight.appendChild(this.orderWindowAddressHouse);
    this.orderWindowAddressRight.appendChild(this.orderWindowAddressBuildingTitle);
    this.orderWindowAddressRight.appendChild(this.orderWindowAddressBuilding);
    this.orderWindowAddressRight.appendChild(this.orderWindowAddressApartTitle);
    this.orderWindowAddressRight.appendChild(this.orderWindowAddressApart);


    this.orderWindowAddressContainer.appendChild(this.orderWindowAddressLeft);
    this.orderWindowAddressContainer.appendChild(this.orderWindowAddressRight);
    this.orderWindowAddressDiv.appendChild(this.orderWindowAddressContainer);
    this.addressButtonsDiv.appendChild(this.addressPrevBtn);
    this.addressButtonsDiv.appendChild(this.addressNextBtn);
    this.orderWindowAddressDiv.appendChild(this.addressButtonsDiv);

    this.orderWindowCommentBtnsDiv.appendChild(this.orderWindowCommentPrevBtn);
    this.orderWindowCommentBtnsDiv.appendChild(this.orderWindowCommentNextBtn);
    this.orderWindowCommentDiv.appendChild(this.orderWindowCommentLabel);
    this.orderWindowCommentDiv.appendChild(this.orderWindowComment);
    this.orderWindowCommentDiv.appendChild(this.orderWindowCommentBtnsDiv);

    this.orderWindowCenterDiv.appendChild(this.orderWindowAddressDiv);
    this.orderWindowCenterDiv.appendChild(this.orderWindowCommentDiv);
    this.orderWindowCenterDiv.appendChild(this.orderWindowThanksDiv);

    this.orderWindowDiv.appendChild(this.orderWindowCenterDiv);

    document.querySelector('.main').appendChild(this.glassShowcaseDiv);
    document.querySelector('.main').appendChild(this.orderWindowDiv);
    this.cartDiv.appendChild(this.emptyCartDiv);
    this.totalDiv.appendChild(this.totalDivLeft);
    this.totalDiv.appendChild(this.totalDivRight);
    this.cartDiv.appendChild(this.totalDiv);
    this.cartDiv.appendChild(this.discountButtonDiv);
    this.cartDiv.appendChild(this.discountedMsg);
    this.cartDiv.appendChild(this.toMakeOrderButtonDiv);

    // переключение видимости блоков с общей стоимостью и с сообщением о пустой корзине:  
    this.switchDivs = function () {
        if (this.goods.length == 0) {
            // отображение сообщения о пустой корзине:
            this.totalDiv.style.display = 'none';
            this.emptyCartDiv.style.display = 'flex';

            // отмена скидки:
            this.discounted = false;
            // скрытие сообщений о применённой скидке и возвращение кнопки:
            this.discountButtonDiv.style.display = 'flex';
            // переключатель класса с серым цветом кнопки "применить скидку":
            this.discountButtonDiv.classList.add('bc-col-gray');
            this.discountedMsg.style.display = 'none';
            this.orderWindowTotalDiscountMsg.style.display = 'none';

            // сброс this.inCartId:
            this.inCartId = [];

            // переключатель класса с серым цветом кнопки "заказать":            
            this.toMakeOrderButtonDiv.classList.add('bc-col-gray');

        } else {
            // отображение содержимого корзины:
            this.emptyCartDiv.style.display = 'none';
            this.totalDiv.style.display = 'flex';

            // переключатель класса с серым цветом кнопки "применить скидку":  
            this.discountButtonDiv.classList.remove('bc-col-gray');

            // переключатель класса с серым цветом кнопки "заказать":   
            this.toMakeOrderButtonDiv.classList.remove('bc-col-gray');
        };
    };

    this.switchDivs();

    // вывод суммы стоимости товаров:
    this.getSumm = function () {
        let i = 0;
        let summ = 0;

        while (i < this.prices.length) {
            summ += this.discounted ? this.prices[i] * (1 - userDiscount) : this.prices[i];
            i++;
        };

        this.total = summ;
        return this.total;
    };

    // применение скидки:
    this.makeDiscount = function () {
        if (!this.discounted) {
            this.total *= (1 - userDiscount);
            this.discounted = true;
            this.totalDivRight.innerHTML = this.orderWindowTotalRight.innerHTML = this.total + ' р';
            this.discountedMsg.style.display = 'flex';
            this.discountButtonDiv.style.display = 'none';
            this.orderWindowTotalDiscountMsg.style.display = 'flex';
        };
    };

    // добавление товаров:
    this.addGoods = function (inx) {
        // добавление порядкового индекса в корзине:
        if (this.inCartId.length > 0) {
            this.inCartId.push(this.inCartId[this.inCartId.length - 1] + 1);
        } else {
            this.inCartId.push(0);
        };
        // добавление складского индекса и данных товара по нему:
        this.itemId.push(inx);
        this.goods.push(stock.name[inx]);
        this.prices.push(stock.price[inx]);
        this.description.push(stock.description[inx]);
        this.goodsIdcator.push(stock.itemId[inx]);

        // функция для подсчёта одинаковых позиций в корзине:
        this.counter = function () {
            let count = 0;
            for (let x = 0; x < this.itemId.length; (this.itemId[x++] == inx ? count++ : null));
            return count;
        };

        if (this.uniqueInCartId.indexOf(inx) != -1) {

            this.goodsDiv = document.querySelector('[data-stock_inx="' + inx + '"]');
            this.uniqueInCartIdDiv = this.goodsDiv.querySelector('[data-stock_inx="' + inx + '"]');

            var counted = this.counter();
            this.uniqueInCartIdDiv.innerHTML = counted + ' шт.';
            this.uniqueInCartIdDiv.dataset.unique = counted;

            this.orderWindowCartContentDivCenter.querySelector('[data-stock_inx="' + inx + '"]').querySelector('.order_goods_count').innerHTML = counted + ' шт.';

        } else { // если элемента нет:           

            // добавление блока для нового товара
            this.uniqueInCartId.push(inx);
            this.goodsDiv = document.createElement('div');
            this.goodsNameCartDiv = document.createElement('div');
            this.priceDiv = document.createElement('div');
            this.deleteDiv = document.createElement('div');
            this.uniqueInCartIdDiv = document.createElement('div');
            this.goodsNameCartDiv.className = 'goods_name_cart_div';
            this.priceDiv.className = 'price_div';
            this.uniqueInCartIdDiv.className = 'unique_inx_div';
            this.uniqueInCartIdDiv.dataset.unique = 1;
            this.uniqueInCartIdDiv.dataset.stock_inx = inx;


            // параметры для блока:
            this.goodsDiv.id = 'goods_div';
            this.goodsNameCartDiv.insertAdjacentHTML('afterBegin', stock.name[inx]);
            this.priceDiv.insertAdjacentHTML('afterBegin', stock.price[inx] + ' р');

            this.goodsDiv.className = 'goods_div';
            this.deleteDiv.className = 'delete_button_div';
            this.deleteDiv.insertAdjacentHTML('afterBegin', 'X');
            this.goodsDiv.dataset.cart_inx = this.inCartId[this.inCartId.length - 1];
            this.goodsDiv.dataset.stock_inx = inx;

            // добавление блоков в DOM:
            this.cartDiv.insertBefore(this.goodsDiv, this.totalDiv);
            this.goodsDiv.appendChild(this.goodsNameCartDiv);
            this.goodsDiv.appendChild(this.priceDiv);
            this.goodsDiv.appendChild(this.uniqueInCartIdDiv);
            this.goodsDiv.appendChild(this.deleteDiv);


            // блоки для окна совершения заказа:            
            this.orderWindowCartContentDivLine = document.createElement('div');
            this.orderWindowCartContentDivLineName = document.createElement('div');
            this.orderWindowCartContentDivLineDescr = document.createElement('div');
            this.orderWindowCartContentDivLinePrice = document.createElement('div');
            this.orderGoodsCount = document.createElement('div');

            this.orderWindowCartContentDivLine.className = ('order_window_cart_content_div_line');
            this.orderWindowCartContentDivLineName.className = ('order_window_cart_content_div_name');
            this.orderWindowCartContentDivLineDescr.className = ('order_window_cart_content_div_descr');
            this.orderWindowCartContentDivLinePrice.className = ('order_window_cart_content_div_price');
            this.orderGoodsCount.className = ('order_goods_count');

            this.orderWindowCartContentDivLine.dataset.stock_inx = inx;
            this.orderWindowCartContentDivLineName.innerHTML = stock.name[inx];
            this.orderWindowCartContentDivLineDescr.innerHTML = stock.description[inx];
            this.orderGoodsCount.innerHTML = 1 + ' шт.';
            this.orderWindowCartContentDivLinePrice.innerHTML = stock.price[inx] + ' р.';

            this.orderWindowCartContentDivLine.appendChild(this.orderWindowCartContentDivLineName);
            this.orderWindowCartContentDivLine.appendChild(this.orderWindowCartContentDivLineDescr);
            this.orderWindowCartContentDivLine.appendChild(this.orderGoodsCount);
            this.orderWindowCartContentDivLine.appendChild(this.orderWindowCartContentDivLinePrice);

            this.orderWindowCartContentDivCenter.appendChild(this.orderWindowCartContentDivLine);


        };

        this.totalDivLeft.innerHTML = this.orderWindowTotalLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.orderWindowTotalRight.innerHTML = this.getSumm() + ' р';
        this.uniqueInCartIdDiv.innerHTML = this.counter() + ' шт.';

        this.switchDivs();

    };

    // удаление товаров:
    this.deleteGoods = function (cart_inx) {

        this.goodsDiv = document.querySelector('[data-cart_inx="' + cart_inx + '"]');

        this.orderWindowCartContentDivLine = this.orderWindowCartContentDivCenter.querySelector('[data-stock_inx="' + this.goodsDiv.dataset.stock_inx + '"]');

        this.uniqueInCartIdDiv = this.goodsDiv.querySelector('.unique_inx_div');
        this.cartDiv = document.querySelector('.cart_div');

        var stockInx = this.goodsDiv.dataset.stock_inx;

        while (this.itemId.indexOf(stockInx) != -1) {
            this.goods.splice(this.goods.indexOf(stock.name[stockInx]), 1);
            this.prices.splice(this.prices.indexOf(stock.price[stockInx]), 1);
            this.description.splice(this.description.indexOf(stock.description[stockInx]), 1);
            this.goodsIdcator.splice(this.goodsIdcator.indexOf(stock.stockId[stockInx]), 1);

            this.itemId.splice(this.itemId.indexOf(stockInx), 1);
        };



        this.goodsDiv.remove();
        this.orderWindowCartContentDivLine.remove();
        this.inCartId.splice(cart_inx, 1);
        this.uniqueInCartId.splice(this.uniqueInCartId.indexOf(this.goodsDiv.dataset.stock_inx), 1);

        this.totalDivLeft.innerHTML = this.orderWindowTotalLeft.innerHTML = 'Товаров: ' + this.goods.length + '; на сумму ';
        this.totalDivRight.innerHTML = this.orderWindowTotalRight.innerHTML = this.getSumm() + ' р';

        this.switchDivs();

    };

    this.totalInCart = function () {
        if (this.goods.length > 0) {
            this.glassShowcaseDiv.style.display = 'flex';   // заграждение остальной части магазина
            this.orderWindowDiv.style.display = 'block';
            this.orderWindowCartContentDiv.appendChild(this.orderWindowCartContentDivCenter);
            this.orderWindowCartContentDiv.appendChild(this.orderWindowTotalDiv);
            this.orderWindowCartContentDiv.appendChild(this.orderWindowTotalDiscountMsg);
            this.orderWindowCartContentDiv.appendChild(this.orderNextBtn);
        };

    };

    // очистка параметров корзины после совершения заказа:
    this.erase = function () {
        this.total = 0;
        this.itemId = [];

        while (cart1.uniqueInCartId.length > 0) {
            this.uniqueInCartId.pop();
            document.querySelector('.goods_div').remove();
            document.querySelector('.order_window_cart_content_div_line').remove();
        };

        this.goods = [];
        this.prices = [];
        this.description = [];
        this.goodsIdcator = [];
        this.discounted = false;
        this.inCartId = [];
        this.uniqueInCartId = [];
        this.switchDivs();

        setTimeout(() => {
            this.orderWindowCartContentDiv.style.display = 'block';
            this.orderWindowDiv.style.display = 'none';
            this.orderWindowThanksDiv.style.display = 'none';
            this.glassShowcaseDiv.style.display = 'none';
        }, 2000);

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
cart1.discountButtonDiv.addEventListener('click', () => cart1.goods.length > 0 ? cart1.makeDiscount() : null, true);

// событие на кнопку "заказать":
cart1.toMakeOrderButtonDiv.addEventListener('click', () => cart1.totalInCart(), true);


// событие на кнопку "закрыть":
cart1.orderWindowCloseButton.addEventListener('click', function () {
    cart1.orderWindowCartContentDiv.style.display = 'block';
    cart1.orderWindowAddressDiv.style.display = 'none';
    cart1.orderWindowCommentDiv.style.display = 'none';
    cart1.orderWindowDiv.style.display = 'none';
    cart1.glassShowcaseDiv.style.display = 'none';
    document.querySelector('.order_window_divs_center').remove();
    document.querySelector('.order_window_btn').remove();
});


// событие на кнопку "далее" в блоке просмотра корзины:
cart1.orderNextBtn.addEventListener('click', function () {
    cart1.orderWindowCartContentDiv.style.display = 'none';
    cart1.orderWindowAddressDiv.style.display = 'flex';
});

//событие на кнопке "далее" в поле заполнения адреса:
cart1.addressNextBtn.addEventListener('click', function () {
    cart1.orderWindowAddressDiv.style.display = 'none';
    cart1.orderWindowCommentDiv.style.display = 'flex';
});

// событие на кнопке "назад" в блоке заполнения адреса:
cart1.addressPrevBtn.addEventListener('click', function () {
    cart1.orderWindowAddressDiv.style.display = 'none'
    cart1.orderWindowCartContentDiv.style.display = 'block';
});

// событие на кнопке "назад" в блоке добавления комментария:
cart1.orderWindowCommentPrevBtn.addEventListener('click', function () {
    cart1.orderWindowCommentDiv.style.display = 'none';
    cart1.orderWindowAddressDiv.style.display = 'flex';
});

// событие на кнопке "оформить заказ" в блоке добавления комментария:
cart1.orderWindowCommentNextBtn.addEventListener('click', function () {
    cart1.orderWindowCommentDiv.style.display = 'none';
    cart1.orderWindowThanksDiv.style.display = 'flex';
    cart1.erase(); // обнуление переменных корзины
});