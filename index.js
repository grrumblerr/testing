//---Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

let animal = {
    move: null
};
let cat = Object.create(animal);
// {
//     __proto__: animal
//     // move: null
// };
animal.move = true;

// Object.setPrototypeOf(cat, animal);

console.log(animal);
console.log(cat);