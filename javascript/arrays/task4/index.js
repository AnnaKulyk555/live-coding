// input: array, callback
// output: array

// algo
// 1. create empty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el which callback will return to the res

// callback
// input: element, index, array
// output: elem

// OPTION 1
// const mapArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     callbackElem = callback(arr[index], index, arr);
//     if (callbackElem !== undefined) {
//       res.push(callbackElem);
//     }
//   }

//   return res;
// };

// OPTION 2
const mapArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr) !== undefined) {
      res.push(callback(arr[index], index, arr));
    }
  }

  return res;
};
// test 1
const arr = [2, 3, -5, -6, 0, 6, NaN];
const callback = element => {
  if (element > 0) {
    return element;
  }
};

console.log(mapArrayElements(arr, callback));

// // test 2
// const array = [10.5, '5vjfnv', 0, -6, undefined, '11'];
// const func = el => {
//   if (Number.isFinite(el)) {
//     return el;
//   }
// };

// console.log(mapArrayElements(array, func));

//test 3
const array = [10, 3, 54, 555, 8];
const func = (el, index, arr) => {
  if (arr.length < 5) {
    return el;
  } else if (el > 7) {
    return el;
  }
};

console.log(mapArrayElements(array, func));
