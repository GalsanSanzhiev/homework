// // 1 task
// const firstName = "Alex";
// const lastName = "Stepanov";
// const isStudent = true;

// //2 task
// const age = 19;
// const currentYear = 2025;
// const birthYear = ([currentYear] - [age]);
// // console.log(birthYear);

// //3 task
// //console.log("Меня зовут " + firstName + " " + lastName + ", мне " + age + " лет. Я ученик курса: " + isStudent + ".");

// //4 task

// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;
// console.log(result);
// // 123456789falsetrue


// Тернарный оператор
// const a = +prompt("Введите первое число", 0);
// const b = +prompt("Введите второе число", 0);
// let max 
// if (!isNaN(a) || !isNaN(b)) {
//     max = (a > b ? a : b);
// }
// else {
//     max = "Test";
// }

// console.log(max)

// switchCase
// const weather = "солнечно";

// switch(weather) {
//     case "дождь":
//         console.log("Остаемся дома");
//         break;
//     case "солнечно":
//         console.log("Идем гулять");
//         break;
// }



// ========================================================================
// 1 task

// const num = 3;
// if (num % 2 == 0) {
//     console.log("число четное")
// }
// else {
//     console.log("Нечетное")
// }

// 2 task ===================================================================================
// const age = 70;
// const discount = age < 18 ? "скидка - 10%" : 
//                  age < 65 ? "скидка - 20%" : 
//                  "скидка - 30%";
// console.log(discount);
// alert(discount);

// const age = 17;
// let discount;

// switch (true) {
//     case (age < 18):
//         discount = "скидка - 10%";
//         break;
//     case (age < 65):
//         discount = "скидка - 20%";
//         break;
//     default:
//         discount = "скидка - 30%";
// }

// console.log(discount);
// alert(discount);

// 3 task ===================================================================================

// const username = prompt("Введите имя пользователя:");
// const password = prompt("Введите пароль:");

// if ((username === "admin" || username === "user") && password === "123456") {
//     console.log("Доступ разрешен");
//     alert("Доступ разрешен");
// } else {
//     console.log("Доступ запрещен");
//     alert("Доступ запрещен");
// }

// 4 task ===================================================================================

const weight = parseFloat(prompt("Введите вес посылки (в килограммах):"));
const deliveryType = prompt("Введите тип доставки (Стандарт/Экспресс/Премиум):");


if (weight <= 0 || isNaN(weight)) {
    alert("Некорректный вес посылки");
} else if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
    alert("Неверный тип доставки");
} else {

    let baseCost;
    
    if (weight < 1) {
        baseCost = 5;
    } else if (weight <= 5) {
        baseCost = 10;
    } else {
        baseCost = 15;
    }


    let coefficient;
    
    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
    }

    const totalCost = baseCost * coefficient;
    alert(`Итоговая стоимость доставки: ${totalCost}$`);
}

