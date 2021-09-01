// input-obj,obj
// output- boolean

// 1. compare if  number keys in obj1 !== number keys in obj2=>false
//2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// option1
// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let index = 0; index < keys1.length; index += 1) {
//     const key = keys1[index];

//     const value1 = obj1[key];
//     const value2 = obj2[key];

//     if (value1 !== value2) {
//       return false;
//     }
//   }

//   return true;
// }

// option2
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);

  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keys1.some(key => obj1[key] !== obj2[key]);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  test: 'Tom',
  age: 17,
};

const obj6 = {
  age: 17,
  name: 'Tom',
};

// test data
console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj1, obj5)); // ==> false
console.log(compareObjects(obj1, obj6)); // ==> true

// entries
const obj = {
  name: 'Tom',
  age: 17,
};

// i: obj
// o: array [[key, value],[key, value], ]

console.log(Object.entries(obj));
