// 1. Выведите числа от 1 до 50 и от 35 до 8.

// for (let i = 0; i >= 0 && i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 38; i <= 38 && i >= 5; i--) {
//     console.log(i);
// }



// 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.

// let i = 89;

// while (i >= 11 && i <=89) {
//     document.write(i + '<br>');
//     i--;
// }



// 3. С помощью цикла найдите сумму чисел от 0 до 100.

// let sum = 0;

// for (let i = 0; i >= 0 && i <= 100; i++) {
//     console.log (sum += i);
// }



// 4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     for (let x = 0; x <= i; x++) {
//         console.log(sum += x);
        
//     }
//     document.write('sum' + i + '=' + sum + '<br>');
//     sum = 0;
    
// }




// 5. Выведите чётные числа от 8 до 56. Решить задание через while и for.

// for (let i = 8; i <= 56; i += 2) {
//     console.log(i);
// }



// 6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10
// ...
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// ...

// let umn = 0;

// for(let i = 2; i <= 10; i++) {
//     for(let x = 0; x <= 10; x++ ) {
//         document.write(umn = x * i + '<br>');
//     }
// }
