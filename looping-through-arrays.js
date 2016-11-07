var pets = ['cat', 'dog', 'rat'];

// for (var i = 0; i < pets.length; i++) {
//     pets[i] = pets[i] + 's';
// }

pets.forEach(funtion(element, index, array) {
    array[index] = element + 's';
});

console.log(pets);
