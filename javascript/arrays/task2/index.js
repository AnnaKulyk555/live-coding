// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* MAP */
// input callback, obj (optional)
// output arr

console.log('numberList before map ', numbersList);

// callback
//input: number (current value), index(optional), array (optional)
// output: number
//option 1
// const mapRes = numbersList.map(function (el) {
//   return el * el;
// });

//option 2
const mapRes = numbersList.map(el => el * el);

console.log(mapRes);
console.log('numberList arter map ', numbersList);

/* метод FIND */
//input: callback
//output num || undefined

// CALLBACK
// input: num, index, arr
// output:

// OPTION 1
// const findRes = numbersList.find(el => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// OPTION 2
const findRes = numbersList.find(el => el % 2 === 0 && el > 0);

console.log(findRes);

/* метод FOREACH */
//input: callback
//output: undefined

// callback
// input: num, index, arr
//output: undefined

const forEachRes = numbersList.forEach(el => {
  if (el >= 0) {
    console.log(el);
  }
});

console.log(forEachRes);

/* метод REDUCE */
//input: callback, number (acc initial value (optional))
//output: number

const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];

//CALLBACK
// input: acc(number), number, index(opt), array(opt)
//output: number
const reduceRes = transactions.reduce((res, el, index) => {
  console.log('step: ' + index + ', acc is: ' + res + ', element is: ' + el);
  res += el;
  return res;
});

console.log(reduceRes);
