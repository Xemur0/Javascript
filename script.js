const goodItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена:</b>: ${good.price} рупий</div>
                    <button id="buy" class="btn" data-index=${good.index}>Купить</button>
                </div>`;
    },
};
const cartItem = {
    render(good) {
        return `<div class="basketStyle">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена: </b>: ${good.price} рупий.</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${(good.quantity * good.price)} рупий</div>
                </div>`;
    },
};

const catalogGoods = {
    catalogElement: null,
    goodItem,
    cart: null,
    goods:
        [
            {
                index: 0,
                product_name: 'Ноутбук',
                quantity: 2,
                price: 32000,

            },
            {
                index: 1,
                product_name: 'Мышь',
                quantity: 1,
                price: 500,
            },
            {
                index: 2,
                product_name: 'Клавиатура',
                quantity: 6,
                price: 1250,
            },

        ],
    init() {
        this.catalogElement = document.querySelector('.catalog');
        this.render();
        this.cart = cart;
        const btns = document.getElementsByTagName('button');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', event => this.putProductInCart(event));
        }
    },
    render() {
        this.catalogElement.insertAdjacentHTML('afterbegin', '<h2>Каталог</h2>')
        this.goods.forEach(good => {
            this.catalogElement.insertAdjacentHTML('beforeend', this.goodItem.render(good));
        });
    },

    putProductInCart(event) {
        const currentButton = event.target;
        let id_product = +currentButton.dataset.index;
        const prodObj = this.goods.find((currentValue) => currentValue.index === id_product);
        this.cart.addProductInCart(prodObj);
    },
};

const cart = {
    cartElement: null,
    cartItem,
    goods: [],
    btnClear: null,
    init() {
        this.cartElement = document.querySelector('.cart');
        this.cartElement.insertAdjacentHTML('afterbegin', '<h2>Корзина</h2>');
        this.cartItem = cartItem;
        this.btnClear = document.querySelector('.clear');
        this.render();
        this.btnClickListener();
    },

    btnClickListener() {
        this.btnClear.addEventListener('click', () => this.clearCart());
    },

    clearCart() {
        this.goods = [];
        this.render();
    },

    getProductFromCart(product) {
        return this.goods.find((good) => good.index === product.index)
    },

    render() {
        this.cartElement.innerHTML = '';
        this.cartElement.insertAdjacentHTML('afterbegin', '<h2>Корзина</h2>');
        if (this.goods.length > 0) {
            this.goods.forEach(good => {
                this.cartElement.insertAdjacentHTML('beforeend', this.cartItem.render(good))
            })
            this.cartElement.insertAdjacentHTML('beforeend',
                `<div><b>В корзине ${this.countCartGoods()} товаров на сумму ${this.countCartPrice()} рупий</b></div>`);
        } else {
            this.cartElement.insertAdjacentHTML('beforeend', '<div>Корзина пуста</div>');
        };
    },

    addProductInCart(product) {
        const goodInCart = this.getProductFromCart(product);

        if (goodInCart) {
            goodInCart.quantity++;
        } else {
            this.goods.push({ ...product, quantity: 1 });
        }
        this.render();
    },

    countCartGoods() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.quantity, 0);
    },

    countCartPrice() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.price * currentGood.quantity, 0);
    },
};

catalogGoods.init();
cart.init();