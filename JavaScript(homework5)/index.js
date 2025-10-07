// 1

// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
// ];

// users.push(
//   { name: 'Ann', age: 19, isAdmin: false },
//   { name: 'Jack', age: 43, isAdmin: true }
// );

// console.log(users);


// 2  ==========================

// function getUserAverageAge(users) {
//   if (users.length === 0) return 0;
  
//   const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//   return totalAge / users.length;
// }

// console.log(getUserAverageAge(users)); 

// 3 ================================


// function getAllAdmins(users) {
//   return users.filter(user => user.isAdmin);
// }

// console.log(getAllAdmins(users)); 


// 4 ================================

function first(arr, n) {
  if (n === 0) return [];
  if (n === undefined) return arr.length > 0 ? [arr[0]] : [];
  
  return arr.slice(0, n);
}

console.log(first([1, 2, 3, 4, 5], 0));    
console.log(first([1, 2, 3, 4, 5]));        
console.log(first([1, 2, 3, 4, 5], 3));   
console.log(first([], 2));                   