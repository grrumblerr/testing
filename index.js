/*
1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
2. Given an array of car manufacturers, convert the array to a string and back to an array
3. Given an array of the names of your friends, add the words hello to each element of the array
4. Convert numeric array to Boolean
5. Sort the array [1,6,7,8,3,4,5,6] in descending order
6. Filter array [1,6,7,8,3,4,5,6] by value> 3
7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
8. Implement a loop that will print the number 'a' until it is less than 10
9. Implement a loop that prints prime numbers to the console
10. Implement a loop that prints odd numbers to the console
*/

//-----Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let movieArr = ['Eternal Sunshine of the Spotless Mind',
                'Il buono, il brutto, il cattivo',
                'Crouching Tiger, Hidden Dragon',
                'Lock, Stock and Two Smoking Barrels',
                'Pulp Fiction'];
movieArr.forEach(el => console.log(el));


//---Given an array of car manufacturers, convert the array to a string and back to an array
let carArr = ['Audi', 'BMW', 'Nissan', 'Renault', 'Mercedes'];
let convert = carArr.join(', ').split(', ')
console.log(convert);


//---Given an array of the names of your friends, add the words hello to each element of the array
let friendsArr = ['Stan', 'Kyle', 'Erick', 'Kenny', 'Butters'];
let greetingsArr = friendsArr.map(el => 'Hello ' + el);
console.log(greetingsArr);


//---Convert numeric array to Boolean
let numArr = [0, 1, 2, 0, 4];
let boolArr = numArr.map(el => Boolean(el));
console.log(boolArr);


//---Sort the array [1,6,7,8,3,4,5,6] in descending order
let arr1 = [1,6,7,8,3,4,5,6];
let arr2 = arr1.sort((a, b) => b - a);
console.log(arr2);


//---Filter array [1,6,7,8,3,4,5,6] by value> 3
let arr3 = [1,6,7,8,3,4,5,6];
console.log(arr3.filter(el => el > 3));


//---Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function searchIndex (arr, num) {
  for (let i =0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
      // console.log(`index of an element ${num} is ${i}`);
    }
  } 
    // console.log('no such element');
  
}
// console.log(searchIndex([1, 2, 3, 4, 5], 4));


//---Implement a loop that will print the number 'a' until it is less than 10
let a = 6;
while (a < 10) {
  console.log(a);
  a++;
};


//---Implement a loop that prints prime numbers to the console
function isNumberPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  } else if (num === 2) {
     return true;
  } else {
     for(let i = 2; i < num; i++) {
       if(num % i === 0) {
        return false;
      }
    }
    return true;  
  }
}

let limit = 10; //max number to check if its prime

for(let i=0; i<=limit; i++) {
  if(isNumberPrime(i)) {
    console.log(i);
  }
}


//---Implement a loop that prints odd numbers to the console
let limit2 = 10; //max number to check
for(let i=0; i<limit2; i++) {
  if (i%2!==0) {
    console.log(i);
  }
}