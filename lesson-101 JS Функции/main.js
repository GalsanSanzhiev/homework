// 1 - Задание

function hello(name) {
    return `Hello ${name}`
}

console.log(hello('Alex'))

// 2 - Задание

const Numbers = [1,4,5,6,19,20]

function checking(Array) {
    for(let i = 0; i < Array.length; i++) {
        if(Array[i] > 10) {
            console.log(Array[i])
        }
    }
    }

checking(Numbers)

// 3 - Задание

function calculator(num1, num2, sign) {
    if(sign === '-') {
        console.log(num1 - num2)
    } else if(sign === '+') {
        console.log(num1 + num2)
    } else if( sign === '*') {
        console.log(num1 * num2)
    } else if(sign === '/') {
        console.log(num1 / num2)
    } else {
        console.log('Неизвестный оператор')
    }
}
calculator(1, 2, '-')
calculator(2, 2, '+')
calculator(4, 2, '*')
calculator(4, 8, '/')
calculator(4, 8, '%')
