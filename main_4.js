'use strict'

// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
//     в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например,
//     для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// function numberAnObject(n) {
//     let unDozHund = {}; // пустой обьект
//     let arr = []; // пустой массив
//     let x;
//     let y;
//     let z;
//     if (Number.isInteger(n) && n >= 0 && n <= 999) { // если n является целым числом от 0 до 999 то
//         n = String(n); // приводим значение n к строке
//         arr = n.split(''); // значения строки записываем в массив

//         switch (arr.length) {
//             case 3: // если длинна массива равна 3 то
//                 x = arr.pop(); c
//                 y = arr.pop(); // повторяем для y
//                 z = arr.pop(); // повторяем для z
//                 unDozHund.dhundreds = z;
//                 unDozHund.dozens = y;
//                 unDozHund.units = x;
//                 break;

//             case 2:
//                 x = arr.pop();
//                 y = arr.pop();
//                 unDozHund.dozens = y;
//                 unDozHund.units = x;
//                 break;

//             case 1:
//                 x = arr.pop();
//                 unDozHund.units = x;

//             default:
//                 break;
//         }

//     } else {
//         console.log('Введите число от 0 до 999');
//     }

//     return unDozHund;
// }

// console.log(numberAnObject(555));


// function numberAnObject(n) {
//     let unDozHund = {}; // пустой обьект
//     let arr = []; // пустой массив
//     unDozHund.dhundreds = 0;
//     unDozHund.dozens = 0;
//     unDozHund.units = 0;
//     if (Number.isInteger(n) && n >= 0 && n <= 999) { // если n является целым числом от 0 до 999 то
//         n = String(n); // приводим значение n к строке
//         arr = n.split(''); // значения строки записываем в массив

//         unDozHund.units = +arr.pop() || 0;  // извлекаеи последнее значение и сприсваемаем unDozHund.units
//         unDozHund.dozens = +arr.pop() || 0;
//         unDozHund.dhundreds = +arr.pop() || 0;

//         return unDozHund; // функция отдаёт обьект
//     } else { // иначе ошибка и пустой обьект
//         console.log('Введите число от 0 до 999');
//         return unDozHund;
//     }
// }

// console.log(numberAnObject(4));


function numberAnObject(n) {
    let unDozHund = {}; // пустой обьект
    if (Number.isInteger(n) && n >= 0 && n <= 999) { // если n является целым числом от 0 до 999 то
        let string = n.toString(); // приводим значение n к строке
        let len = string.length; // вычисляем длинну строки
        switch (len) {
            case 3:
                unDozHund.dhundreds = string[len - 3]; // ключу обьекта присваеваем 3-е значение из строки
            case 2:
                unDozHund.dozens = string[len - 2];
            case 1:
                unDozHund.units = string[len - 1];
        }
        return unDozHund; // функция отдаёт обьект
    } else { // иначе ошибка и пустой обьект
        console.log('Введите число от 0 до 999');
        return unDozHund;
    }
}

console.log(numberAnObject(45));



// 2. Продолжить работу с интернет - магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
//     Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно - ориентированную базу.
// * Подумать над глобальными сущностями.К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины, но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.



let basket = [

    { name: 'футболка', size: 'm', model: 'hjr5', color: 'black', price: 500 },
    { name: 'носки', size: 'm', model: 'hjr5', color: 'black', price: 600 },
    { name: 'трусы', size: 'm', model: 'hjr5', color: 'black', price: 300 },
    { name: 'куртка', size: 'm', model: 'hjr5', color: 'black', price: 5000 },

];

function countBasketPrice(arr) {
    let sum = 0;
    for (let num of arr) {

        sum += num.price;

    }
    return sum;

}

console.log(countBasketPrice(basket));