/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */


const basketobj = {
    summaryBasket: 0,
};

const goods = {
    addToBasket: function(name, quantity, price) {
        let good = {
            name: name,
            quantity: quantity,
            price: price,
            summaryPrice: quantity * price,
        }
        basketobj.summaryBasket += quantity * price;
        basketobj[name] = good;
        console.log(`Товар '${name}' добавлен в корзину`)
}}

goods.addToBasket('ПК', 100, 2000)
goods.addToBasket('Стол', 2000, 200)

console.log(basketobj)









