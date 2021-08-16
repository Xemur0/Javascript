/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
console.log('task 3')
{
    let a = parseInt(Math.random() * 100) - parseInt(Math.random() * 100)
    let b = parseInt(Math.random() * 100) - parseInt(Math.random() * 100)

    console.log(a)
    console.log(b)
    if (a > 0 && b > 0) {
        result = a - b
        console.log(result)
    } else if (a < 0 && b < 0) {
        result = a * b
        console.log(result)
    } else if (a <= 0 && b >= 0 || a >= 0 && b <= 0) {
        result = a + b
        console.log(result)
    }
}

/*
 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
 */
console.log('task 4')
let a = 10
switch (a) {
    case 1:
        console.log('1');
    case 2:
        console.log ('2');
    case 3:
        console.log ( '3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
 */
console.log('task 5')
function sumNumbers(x, y) {
    return x + y
}

function subtractNumbers(x, y) {
    return x - y
}

function divNumbers(x, y) {
    return x / y
}

function multNumbers(x, y) {
    return x * y
}

console.log(sumNumbers(2, 4))
console.log(subtractNumbers(4, 4))
console.log(divNumbers(20, 10))
console.log(multNumbers(4, 5))


/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения
операции выполнить одну из арифметических операций (использовать функции из пункта 5)
и вернуть полученное значение (использовать switch).
 */
function mathOperation(x, y, operation) {
    switch (operation){
        case 'sum':
            return sumNumbers(x, y);
            break;
        case 'div':
            return divNumbers(x, y);
            break;
        case 'multi':
            return multNumbers(x, y);
            break;
        case 'sub':
            return subtractNumbers(x, y);
            break;
    }
}

console.log('task 6')
console.log(mathOperation(10, 10, 'sum'))
console.log(mathOperation(10, 10, 'div'))
console.log(mathOperation(10, 10, 'sub'))
console.log(mathOperation(10, 10, 'multi'))


/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
 */
console.log('task 8')
function exp(val,pow) {
    if (pow == 0){
        return 1
    }
    return val * exp(val, pow-1)
}

console.log(exp(2, 1))