/*Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
Get the day, month and year of the current date and output it to the console separately
*/

//---Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const string = 'ahb acb aeb aeeb adcb axeb';
const result = string.match(/a.b/gi);
console.log(result);


//---Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const str = '2 + 3 223 2223';
const res = (str.match(/2\s\+\s3\s/gi))
const res2 = res.toString().trim();
console.log(res);
console.log(res2);


//---Get the day, month and year of the current date and output it to the console separately
const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

// console.log(`Today is ${day} - ${month} - ${year}`);
console.log(day);
console.log(month);
console.log(year);
