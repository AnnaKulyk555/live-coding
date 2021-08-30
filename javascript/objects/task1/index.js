// input: obj, string (key), string  (value)
// output: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
const transaction1 = {
  value: 170,
};
console.log(transaction1);
console.log(addPropertyV1(transaction1, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction1);

// input: obj, string (key), string  (value)
// output: obj
function addPropertyV2(obj, key, value) {
  // input: target, ...sources
  // output: new target
  return Object.assign(obj, { [key]: value });
}

// test data
const transaction2 = {
  value: 170,
};
console.log(transaction2);
console.log(addPropertyV2(transaction2, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction2);

// input: obj, string (key), string  (value)
// output: obj
function addPropertyV3(obj, key, value) {
  // input: target, ...sources
  // output: new target
  return Object.assign({}, obj, { [key]: value });
}

// test data
const transaction3 = {
  value: 170,
};
console.log(transaction3);
console.log(addPropertyV3(transaction3, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction3);

// input: obj, string (key), string  (value)
// output: new obj
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const transaction4 = {
  value: 170,
  checkout: () => {
    console.log('hello');
  },
};
console.log(transaction4);
console.log(addPropertyV4(transaction4, 'currency', 'USD'));
console.log(addPropertyV4(transaction4, 'country', 'Ukraine'));
transaction4.city = 'Kiyv';
console.log(transaction4);

// rest operator
function sum(param1, ...params) {
  console.log(params);
  return params.reduce((acc, num) => {
    acc += num;
    return acc;
  });
}

// test data
console.log(sum(1, 2, 55, 9, 0));

// spread operator
const numbers = [10, 11, 1, 7, 0];
console.log(numbers);
console.log(...numbers);
const numbersCopy = [...numbers, 11111];
console.log(numbersCopy);

const transactionTest = {
  value: 170,
};
const transactionTestCopy = { ...transactionTest };
console.log(transactionTestCopy);

// data destructuring
const numbersRest = [10, 11, 1, 7, 0];
const [firstElem, ...restArr] = numbersRest;
console.log(firstElem);
console.log(restArr);
