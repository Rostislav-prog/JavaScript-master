//  LESSON_2

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 «Префиксная форма» — это когда оператор идёт перед переменной: ++a  возвращает новое значение 2
// d = b++; alert(d);           // 1 Когда оператор идёт после переменной — это «постфиксная форма»: a++  возвращает старое значение 1
// c = (2 + ++a); alert(c);      // 5 работает как : (2+1)+(1+1)=5
// d = (2 + b++); alert(d);      // 4 работает как : (2)+(1+1)=4
// alert(a);                    // 3 a = ++2 = 3 из c = (2 + ++a)
// alert(b);                    // 3 b = b++ = 3 из d = (2 + b++)


// var a = 2;
// var x = 1 + (a *= 2); // Оператор присваивания умножения ( *=) умножает переменную на значение правого операнда и присваивает результат переменной. 1+(2*2) = 5
// console.log(x); // 5



// let a = -6;
// let b = 2;

// if ((a >= b) && (a >= 0) && (b >= 0)) { //если a и b положительные, вывести их разность;
//     console.log(a - b);
// } else if ((a <= b) && (a >= 0) && (b >= 0)) {
//     console.log(b - a);
// } else if ((a < 0) && (b < 0)) { //если а и b отрицательные, вывести их произведение
//     console.log(a * b);
// } else { //если а и b разных знаков, вывести их сумму
//     console.log(a + b);
// }


// Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15

// let a = Math.round(Math.random() * 15);

// switch (a) {
//     case a = 0:
//         console.log('0');
//     case a = 1:
//         console.log('1');
//     case a = 2:
//         console.log('2');
//     case a = 3:
//         console.log('3');
//     case a = 4:
//         console.log('4');
//     case a = 5:
//         console.log('5');
//     case a = 6:
//         console.log('6');
//     case a = 7:
//         console.log('7');
//     case a = 8:
//         console.log('8');
//     case a = 9:
//         console.log('9');
//     case a = 10:
//         console.log('10');
//     case a = 11:
//         console.log('11');
//     case a = 12:
//         console.log('12');
//     case a = 13:
//         console.log('13');
//     case a = 14:
//         console.log('14');
//     case a = 15:
//         console.log('15');
//         break;
// }


// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.

// function sum(a, b) { //сумма
//     c = a + b;
//     return c;
// }

// function subtr(a, b) { //разница
//     c = a - b;
//     return c;
// }

// function multipl(a, b) { //умножение
//     c = a * b;
//     return c;
// }

// function divis(a, b) { //деление
//     c = a / b;
//     return c;
// }

// console.log(divis(5, 5));
// console.log(sum(5, 5));
// console.log(subtr(5, 5));
// console.log(multipl(5, 5));


// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
//     operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3)
// и вернуть полученное значение(использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return arg1 + arg2;
        case 2:
            return arg1 - arg2;
        case 3:
            return arg1 * arg2;
        case 4:
            return arg1 / arg2;
    }
}
console.log(mathOperation(5, 5, 4));


//  Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0); // false - 0 в js это положительное число, а null - пустое значение, пропасть в бесконечность.


// С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень

function power(val, pow) {
    if (pow == 1) {
        return val;
    } return val * power(val, pow - 1);
}
console.log(power(2, 4));