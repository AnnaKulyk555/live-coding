//input: obj
// output: undefined
function saveUser(userData) {
  //input: Url (string), obj (headers, ...
  //output: promise
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    //input:callback
    //output:promise
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(e => {
      console.log(e);
    });

  console.log(res);
}

// test data
const user = {
  email: 'test@urk.net',
  firstName: 'Anna',
  lastName: 'Kulik',
  city: 'World',
  age: 23,
};

console.log(JSON.stringify(user));
saveUser(user);
