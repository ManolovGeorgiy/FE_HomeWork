console.log("Домашнее Задание:")
console.log("Найти сумму четных и нечетных чисел из массива","и вывести разницу между ними. Вычесть из большего меньшее.");
console.log("");
// Создаем массив чисел
const numbers = [1, 18, 33, 46, 51, 6, 27, 89, 14];

// Инициализируем суммы для четных и нечетных чисел
let sumEven = 0;
let sumOdd = 0;

// Вычисляем суммы четных и нечетных чисел
numbers.forEach(num => {
    if (num % 2 === 0) {
        sumEven += num;
    } else {
        sumOdd += num;
    }
});

// Находим разницу между суммами и вычитаем из большей суммы меньшую
const difference = Math.abs(sumEven - sumOdd);


console.log("Сумма четных чисел =", sumEven);
console.log("Сумма нечетных чисел =", sumOdd);
console.log("Разница между ними =", difference);
console.log("");
console.log("Домашнее задание: Выполнено");


