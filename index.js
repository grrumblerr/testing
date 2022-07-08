//  Perform addition of various types (string + boolean, string + number, number + boolean)

// let string = 'string';
// let stringNum = '5';
// let num = 2;
// let boolT = true;
// let boolF = false;


console.log('string' + true);      //'stringtrue'
console.log('5' + true);           //'5true'
console.log('string' + 2);         //'string2'
console.log('5' + 2);              //'52'
console.log(2 + true);             //3
console.log(2 + false);            //2


//  Perform multiplication of various types (string * boolean, string * number, number * boolean)

console.log('string' * true);        //NaN
console.log('string' * false);       //NaN
console.log('string' * 2);           //NaN
console.log('5' * 2);                //10
console.log(2 * true);               //2
console.log(2 * false);              //0


//  Divide different types (string / boolean, string / number, number / Boolean)

console.log('string' / true);      //NaN
console.log('string' / false);     //NaN
console.log('5' / true);           //5
console.log('5' / false);          //Infinity
console.log('string' / 2);         //NaN
console.log('5' / 2);              //2.5
console.log(2 / true);             //2
console.log(2 / false);            //Infinity


//Perform explicit conversion (number, string, boolean)

//string to number
console.log(Number('234'));           //234
console.log(+'234');                  //234
console.log(Number('string'))         //NaN

//boolean to number
console.log(Number(true));            //1
console.log(Number(false));           //0

//number to string
console.log(String(234));             //'234'
console.log((234).toString());        //'234'
console.log(String(2 + 3));           //'5'

//boolean to string
console.log(String(true));            //'true'
console.log(String(false));           //'false'

//number to boolean
console.log(Boolean(0));               //false
console.log(Boolean(1));               //true
console.log(Boolean(5));               //true

//string to boolean
console.log(Boolean(''));              //false
console.log(Boolean(' '));             //true
console.log(Boolean('string'));        //true
