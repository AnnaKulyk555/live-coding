// i: string[], array
// o: obj

// algo
// reduce

//algo
// for
// 1. create res obj
// 2. iterate keyList
// 3. get value by index
// 4. add key-value to the object

// OPTION BAD
// function buildObject(keysList, valuesList) {
//   let resObj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     resObj = { ...resObj, [keysList[index]]: valuesList[index] };
//   }

//   return resObj;
// }

// OPTION GOOD
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    return { ...obj, [key]: valuesList[index] };
  }, {});
}

// OPTION GOOD - 2
// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

// examples
const keys = ['name', 'address', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  34,
  () => {
    console.log('run');
  },
];

const result = buildObject(keys, values);
console.log(result);
result.run();
