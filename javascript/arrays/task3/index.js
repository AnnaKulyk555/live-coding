// input: array, callback
// output: array

// algo
// 1. create empty array +++
// 2. iterate arr +++
// 3. apply callback for every el +++
// 4. push el to the res if callback true +++

// callback
// input: element, index, array
// output: boolean

// OPTION 1
// const filterArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, arr);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }

//   return res;
// };

// OPTION 2
const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }

  return res;
};

// test 1
const arr = [2, 3, -5, undefined];
const callback = element => element > 0;

console.log(filterArrayElements(arr, callback));

// // test 2
// const array = [10, 5, 4, 6, 9];
// const func = el => el > 7;

// console.log(filterArrayElements(array, func));

//test 3
const array = [10, 5, 4, 6, 5, 99, 54, 555];
const func = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }

  return el > 7;
};

console.log(filterArrayElements(array, func));
