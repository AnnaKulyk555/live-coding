// apply
// i: this, [argsArray]
// o:

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// console.log(user);
// console.dir(printMessage);

// printMessage('Ukraine', 'Lviv');
// bind
// i: context, arg1, ...argN
// o: func

// option 1
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Ukraine', 'Lviv');

// printMessage.bind(user)('Ukraine', 'Lviv');

// option 2
// const printMessageBinded2 = printMessage.bind(user, 'UK', 'London');
// printMessageBinded2('France', 'Paris');

// option 3
// const printMessageBinded3 = printMessage.bind(user, 'Poland');
// printMessageBinded3('Warsaw');

//input: func, context, arg1 ... argN
//output: bindedFunc

function myBind(func, context, ...args) {
  // call
  // i: context, arg1, ...argN
  // o: func result

  //input: the same as func
  //otput: func result
  return function (...funcArgs) {
    func.call(context, ...args, ...funcArgs);
  };
}

// test  data

const bindedFunc = myBind(printMessage, user);
bindedFunc('UK', 'London');

const bindedFunc2 = myBind(printMessage, user, 'Ukraine');
bindedFunc2('Lviv');

function myBindAdvanced(func, context, ...args) {
  //
}
