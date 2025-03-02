// const user = {
//     name: 'Galsan',
//     age: '18',
//     city: 'Novosibirsk'
// }
// console.log(user.age)


// const users = {
//     serega: {
//         age: 20,
//         height: 156,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }
// users.serega.sayHello('Nastya')

const users = [
    {
    name: 'john',
    age: 5,
    isAdmin: false
},
{
    name: 'sergio',
    age: 23,
    isAdmin: true
},
{
    name: 'nick',
    age: 19,
    isAdmin: false
},
{
    name: 'alex',
    age: 32,
    isAdmin: true
} 

]
let result = 0
for (let i = 0; i < users.length; i++ ) {
    if(users[i].isAdmin === false) {
        result += 1
    }
}
console.log(result)


