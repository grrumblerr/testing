//---Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

const animal = {};

const cat = {
  // __proto__: animal
};

Object.setPrototypeOf(cat, animal);

animal.move = true;

console.log(animal);
console.log(cat.move);