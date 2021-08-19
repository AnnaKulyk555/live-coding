/* pop - удалит из массива последний элемент и вернет его */

const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);

//input: none
//output: num
const res = numbersList1.pop();
console.log(res);

console.log(numbersList1);

/* push - добавит элемент в конец массива */

//input: num  ( that will be pushed)
//output: num ( arr.length)

const numbersList2 = [1, 2, 3, 4, 5];

console.log('before push ', numbersList2);

const res = numbersList2.push(6);
console.log(res);

console.log('after push ', numbersList2);

/* shift - удалит из массива первый элемент и вернет его */

// input: none
//  output: num
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ', numbersList3);
const res3 = numbersList3.shift();
console.log(res3);
console.log('after shift ', numbersList3);

//======= slice

//input: num, num (optional)
//output : arr
const numbersList4 = [1, 2, 3, 4, 5];
console.log('before slice ', numbersList4);

const res4 = numbersList4.slice(2, 4);
console.log(res4);

console.log('arter slice ', numbersList4);

// ------- CALLACK

// input num, num, func
// output undefined
function sum(from, to, printer) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }

  printer(sum);
}

//test data
function printResult(res) {
  alert(res);
}

// input : num
// output : undefined
function printResult(res) {
  console.log(res);
}

sum(5, 8, printResult);

// ================= filter

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('before filter ', anotherNumbersList);

// callback
// input num, index (optional), array (optional)
// output boolean

// option 1
// function filterCallback(element, index, arr) {
//   console.log(element);
//   if (element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

//input callback
// output array
const filterRes = anotherNumbersList.filter(el => el > 5);
console.log(filterRes);

console.log('after filter ', anotherNumbersList);
