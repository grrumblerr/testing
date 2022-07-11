/*
Objects and functions practical task 

-        Create a car object, add a color property to it with the value equals 'black'

-        Change the color property of the car object to 'green'

-        Add the power property to the car object, which is a function and displays the engine power to the console

-        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

-        Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

-        Write a function for calculating the type of argument and type output to the console

-        Write a function that determines whether a number is prime or not
*/

const car = {
  color: "black"
}

car.color = "green";

car.power = function(power) {
  console.log('the engine power is ' + power);
};
// car.power('200hp');

// car.enginePower = '150hp';
// car.power = function() {
//   console.log(car.enginePower);
// };
// console.log('the engine power is ' + car.power('200hp'));



// //---Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples---//

function result(pears, apples) {
  return pears + apples;
}


//---Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)---//

function hello(name) {
  if (name === undefined) {
    console.log('there is no such name');
  } else {
    console.log('hello ' + name);
  }
}
// hello();
// hello('John');



//---Write a function for calculating the type of argument and type output to the console---//

function type(arg) {
  console.log('the type of argument is a ' + typeof(arg))
}
// type('str');



//---Write a function that determines whether a number is prime or not---//

function isNumberPrime(num) {
  if (num===1) {
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

// console.log(isNumberPrime(5));