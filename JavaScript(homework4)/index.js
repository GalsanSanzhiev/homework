// Задача 1.
// const person = {
//     name: "Galsan",
//     age: 19,
//     city: "Novosibirsk",
// }
// console.log(person)


// Задача 2.
// const empty = {};
// function isEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// isEmpty(empty)


// Задача 3.

// const task = {
//     title: "Запланировать встречу с клиентом",
//     description: "Обсудить детали проекта по созданию фонтана в центральном парке",
//     isCompleted: false,
// };

// function cloneAndModify(original, modifications) {
//     return {
//         ...original,
//         ...modifications
//     };
// }

// const modifiedTask = cloneAndModify(task, {
//     description: "Обсудить бюджет и сроки проекта фонтана",
//     priority: "high"
// });

// console.log("Модифицированная задача:");
// for (let key in modifiedTask) {
//     console.log(`   ${key}: ${modifiedTask[key]}`);
// }

// Задача 4.

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'function') {
            try {
                obj[key]();
            } catch (error) {
                console.error(`Ошибка при вызове метода ${key}:`, error);
            }
        }
    }
}

callAllMethods(myObject);