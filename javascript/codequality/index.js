// bad 1
// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// good 1
const withdraw = (clients, balances, clientName, amount) => {
  const clientIndex = clients.indexOf(clientName);

  if (balances[clientIndex < amount]) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// OPTION 2
// const withdraw = (clients, balances, client, amount) =>
// balances[clients.indexOf(client)] < amount ? -1 : balances[clients.indexOf(client)] -= amount;

// BAD 2
// function withdrawV2(clients, balances, client, amount) {
//   let i = 0;
//   for (; i < clients.length; ++i) {
//     if (clients[i] === client) {
//       break;
//     }
//   }

//   balances[i] -= amount;
//   console.log(balances);
//   return balances[i] > 0 ? balances[i] : -1;
// }

// GOOD 2
function withdrawV2(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex < amount]) {
    return -1;
  }
  // ...
  // ...
  // ...
  // ...
  balances[clientIndex] -= amount;
  return balances[clientIndex];
}

// bad 3
// const withdrawV3 = (clients, balances, client, amount) => {
//   let clientNum = clients.indexOf(client);
//   console.log(clientNum);

//   const isEnough = num => {
//     if (num > amount) {
//       return num - amount;
//     }
//     return -1;
//   };
//   const newBalances = balances.map(isEnough);
//   return newBalances[clientNum];
// };

// good 3
const withdrawV3 = (clients, balances, client, amount) => {
  let clientNum = clients.indexOf(client);

  if (balances[clientNum < amount]) {
    return -1;
  }

  balances[clientNum] -= amount;
  return balances[clientNum];
};

const clients = ['Denis', 'Andrey', 'Jack'];
const balances = [100, 80, 1200];
const client = 'Jack';
const amount = 500;
console.log(withdraw2(clients, balances, client, amount));
console.log(balances);

// bad 4
// const withdrawV4 = (clients, balances, client, amount) => {
//   //put your code here
//   let ind = clients.indexOf(client);
//   let bal = balances[ind];
//   return bal < amount ? -1 : (balances[ind] -= amount);
// };

// good 4
const withdrawV4 = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  return balances[index] < amount ? -1 : (balances[index] -= amount);
};

// bad 5
// function withdrawV5(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] >= amount) {
//     balances[indexOfPerson] -= amount;
//     return amount;
//   }
//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }
// }

// good 5
function withdrawV5(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);
  if (balances[indexOfPerson] < amount) {
    return -1;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// bad 6
// function withdrawV6(clients, balances, client, amount) {
//   let output = 0;
//   const indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] >= amount) {
//     output = balances[indexOfPerson] - amount;
//     return output;
//   }
//   output = -1;

//   return output;
// }

// good 6
function withdrawV6(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson < amount]) {
    return -1;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

// ... take attention to the memory usage, don't create new array if it is not needed
const users = [10, 24, 15, 43, 33, 21, 22];
const res = users.filter(age => age > 18);
console.log(res.length);

// ...magical numbers or strings
const NEGATIVE_RESULT = 4;

function withdrawV6(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson < amount]) {
    return NEGATIVE_RESULT;
  }

  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}
