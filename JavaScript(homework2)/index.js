// 1 задание
// for(i = 0; i <= 20; i ++){
//     if (i % 4 == 0) {
//         continue;
//     }
//     console.log(i)
// }


// 2 задание
// let i = +prompt("Факториал");
// let factorial = 1;

// for(let j = 1; j <= i; j++) {
//     factorial *= j
//     console.log(factorial)
// }

// 3 задание
let board = '';
const size = 8;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        board += (i + j) % 2 === 0 ? '#' : ' ';
    }
    board += '\n';
}

console.log(board);