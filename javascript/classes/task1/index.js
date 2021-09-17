export class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    // console.log('context is ', this);
    console.log(`${this.name} is running`);
  }
}

export class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    this.swimStyle = swimStyle;
  }

  swim() {
    // console.log('context is ', this);
    console.log(`${this.name} is swimming ${this.swimStyle}`);
  }
}

// test data
// const obj1 = {
//   name: 'James',
// };
// console.log(obj1);
// const obj2 = new Sportsman('John');
// console.log(obj2);
// obj2.run();

// const obj3 = new Sportsman('Max');
// console.log(obj3);

// const swimObj = new Swimmer('Mike', 'testStyle');
// swimObj.run();
// console.log(swimObj);
