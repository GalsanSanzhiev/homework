users = ['Alex', 'Ayana', 'Denis']

function checkToItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return `There is copy of the ${item} in array `
        }
    }
    return `There is not such in the array`

}

console.log(checkToItem(users, 'Alex'))