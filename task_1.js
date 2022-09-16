
/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */



function simply(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}
i = 2
while (i < 100){
    if(simply(i)) console.log(i);
    i++;
}
