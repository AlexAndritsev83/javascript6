/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение
const forEach = function(arr, callback) {

    if (!Array.isArray(arguments[0])) {return null};
    if (!(typeof(arguments[1]) === 'function')) {return null};

    let  length = arr.length;
    for (let i = 0; i < length; i++) {
        callback(arr[i], i, arr);
    }
};



//Проверка
const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;
