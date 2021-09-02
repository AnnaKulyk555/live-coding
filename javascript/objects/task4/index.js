// input: obj
// output: array

// входящий объект в формате:
// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customers-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// 1 get array from obj kind like [["customer-id-1", {…}],["customers-id-2", {…}]]
// 2 используя метод .map для получившегося массива добавить объекту
// свойство id со значением === первому элементу внутреннего массива
// 3  отсортировать массив массивов по возрастанию значения свойства age в объекте

// BAD OPTION

// const getCustomersList = obj => {
//   //i: callback
//   //o: array

//   // input: array
//   // output: obj
//   return Object.entries(obj)
//     .map(arr => {
//       console.log(arr);

//       let obj = { id: arr[0] };
//       console.log(obj);

//       const value = arr[1];
//       obj = { ...obj, ...value };
//       return obj;
//       // return { ...arr[1], id: arr[0] };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// GOOD OPTION
// const getCustomersList = obj => {
//   //i: callback
//   //o: array

//   // input: array
//   // output: obj
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// BEST OPTION
const getCustomersList = obj => {
  //i: callback
  //o: array

  // input: array
  // output: obj
  return Object.entries(obj)
    .map(([id, customerObj]) => ({ id, ...customerObj }))
    .sort((a, b) => a.age - b.age);
};

// test data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
    city: 'Kyiv',
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
    country: 'UA',
  },
  'customers-id-65115': {
    name: 'Dan',
    age: 99,
  },
};

console.log(getCustomersList(customers));
