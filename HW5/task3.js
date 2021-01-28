// 3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a. Создать массив товаров (сущность ​ Product​ );
// b. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только ​ div id=”catalog” ​ без вложенного кода. Весь вид
// каталога генерируется JS.

function Product() {
    this.name = [];
    this.price = [];
    this.description = [];
    var catalog = document.querySelector('#catalog');

    this.addProduct = function (item, price, descr) {
        this.name.push(item);
        this.price.push(price);
        this.description.push(descr);
        console.log('Товар ' + item + ' успешно добавлен.');
    };

    this.oneStep = function (inx) {
        this.productItem = document.createElement('div');
        this.nameDiv = document.createElement('div');
        this.priceDiv = document.createElement('div');
        this.descriptionDiv = document.createElement('div');

        this.productItem.style.display = 'flex';
        this.productItem.style.justifyContent = 'space-between';
        this.productItem.style.margin = '50px';
        this.productItem.style.padding = '25px';
        this.productItem.style.border = '1px';
        this.productItem.style.borderStyle = 'solid';

        this.nameDiv.style.padding = '10px';
        this.nameDiv.style.border = '1px';
        this.nameDiv.style.borderStyle = 'solid';
        this.nameDiv.style.minWidth = '150px';
        this.nameDiv.style.textAlign = 'left';

        this.priceDiv.style.padding = '10px';
        this.priceDiv.style.border = '1px';
        this.priceDiv.style.borderStyle = 'solid';
        this.priceDiv.style.minWidth = '80px';
        this.priceDiv.style.textAlign = 'right';

        this.descriptionDiv.style.padding = '10px';
        this.descriptionDiv.style.border = '1px';
        this.descriptionDiv.style.borderStyle = 'solid';
        this.descriptionDiv.style.minWidth = '150px';
        this.descriptionDiv.style.textAlign = 'center';

        this.nameDiv.innerHTML = this.name[inx];
        this.priceDiv.innerHTML = this.price[inx];
        this.descriptionDiv.innerHTML = this.description[inx];

        this.productItem.appendChild(this.nameDiv);
        this.productItem.appendChild(this.descriptionDiv);
        this.productItem.appendChild(this.priceDiv);
        catalog.appendChild(this.productItem);
    };

    this.getProducts = function () {
        for (let i = 0; i != this.name.length; this.oneStep(i++));
    };
};

a = new Product;
a.addProduct('HP', 45000, 'Notebook');
a.addProduct('Varta', 150, 'Batteries');
a.addProduct('Dell', 7450, 'Dockstation');
a.addProduct('Sony', 5000, 'Headphones');
a.addProduct('Intel', 25730, 'CPU');
a.addProduct('Samsung', 12355, 'Display');

a.getProducts();