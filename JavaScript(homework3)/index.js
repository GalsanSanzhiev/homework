// Задача 1.

// function calculateFinalPrice(basePrice, discountPercent, taxRate) {
//     const discountAmount = basePrice * (discountPercent / 100);
//     const priceAfterDiscount = basePrice - discountAmount;
//     const taxAmount = priceAfterDiscount * taxRate;
//     return priceAfterDiscount + taxAmount;
// }
// console.log(calculateFinalPrice(200, 20, 0.5));


// Задача 2.

// function checkAccess(user,password) {
//     if (user == "admin" && password == "123456") {
//         console.log("Доступ разрешен");
//     }
//     else {
//         console.log("Доступ запрещен");
//     }
    
// }
// console.log(checkAccess("admin", 12345));

// Задача 3.
// function getTimeOfDay(time) {
//     if (time < 0 || time > 23) {
//         return "Некорректное время";
//     }
//     else if (time >= 0 && time <= 5) {
//         return "Ночь";
//     }
//     else if (time >= 6 && time <= 11) {
//         return "Утро";
//     }
//     else if (time >= 12 && time <= 17) {
//         return "День";
//     }
//     else {
//         return "Вечер";
//     }
// }

// console.log(getTimeOfDay(25));

// Задача 4.

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Чётных чисел нет";
}
console.log(findFirstEven(18, 20))