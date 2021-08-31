'use strict';

const basket = {
    basketElement: null,
    goods: [
        {
            goodName: 'ПК',
            quantity: 2,
            price: 10000,
        },
        {
            goodName: 'Стол',
            quantity: 5,
            price: 3000,
        },
        {
            goodName: 'Стул',
            quantity: 6,
            price: 1500,
        },
        {
            goodName: 'Клавиатура',
            quantity: 2,
            price: 1500,
        },
    ],
    init() {
        this.basketElement = document.getElementById('basket');
        this.basketRender();
    },
    getHTMLTextOfGoodElement(num) {
        return `<div class="good">
            <div><b>Наименование</b>: ${this.goods[num].goodName}</div>
            <div><b>Стоимость за ед. </b>: ${this.goods[num].price} руб </div>
            <div><b>Количество </b>: ${this.goods[num].quantity} шт. </div>
            <div><b>Стоимость позиции </b>: ${this.goods[num].quantity * this.goods[num].price} руб </div>
        </div>`;
    },
    basketRender() {
        this.basketElement.insertAdjacentHTML('beforeend', `<div><b>Корзина</b></div>`);
        if (this.goods.length > 0) {
            for (let i = 0; i < this.goods.length; i++)
                this.basketElement.insertAdjacentHTML('beforeend', this.getHTMLTextOfGoodElement(i));
            this.basketElement.insertAdjacentHTML('beforeend',
                `<div><b>В корзине ${this.countBasketGoods()} товаров на сумму ${this.countBasketPrice()} руб.</b></div>`);
        } else
            this.basketElement.insertAdjacentHTML('beforeend', `<div><b>Корзина пуста.</b></div>`);
    },
    countBasketGoods() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.quantity, 0);
    },
    countBasketPrice() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.price * currentGood.quantity, 0);
    },

};

basket.init();