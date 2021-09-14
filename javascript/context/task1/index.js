export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    //   console.log(this);

    // // lose context case #2
    // [1, 2, 4].filter(function () {
    //   console.log('filter this: ' + this);
    // });

    // lose context case #2
    this.timerId = setInterval(() => {
      // console.log(this);

      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  // fix context with bind
  //     const callbackFunc = function () {
  //       console.log(this);
  //       this.secondsPassed += 1;
  //     };
  //     const bindedCallbackFunc = callbackFunc.bind(this);
  //     setInterval(bindedCallbackFunc, 1000);
  //   },

  // function filter(callback) {
  // ....
  // ....
  // callback()
  // ....
  // ....
  // }

  // function setInterval(callback) {
  // ....
  // ....
  // window.callback()
  // }
  stopTimer() {
    clearInterval(this.timerId);
    // console.log(this.secondsPassed);
  },

  getTime() {
    const minutes = this.minsPassed;
    let seconds = this.secondsPassed;
    if (seconds < 10) {
      seconds = `0${this.secondsPassed}`;
    }
    return `${minutes}:${seconds}`;
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// context
// 1. know when context is lost (2-3 cases)
// 2. fix context

// lose context case #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// set interval example
// setInterval(() => {
//   console.log('Monday');
// }, 2000);

// TEST DATA
// timer.startTimer();
// setTimeout(() => {
//   timer.stopTimer();
// }, 11000);
// setTimeout(() => {
//   console.log(timer.getTime());
// }, 11000);
// timer.startTimer();

// timer.startTimer();
// setTimeout(() => {
//   timer.stopTimer();
// }, 4000);
// setTimeout(() => {
//   console.log(timer.getTime());
// }, 4000);

// timer.startTimer();
// setTimeout(() => {
//   timer.stopTimer();
// }, 4000);
// setTimeout(() => {
//   timer.resetTimer();
// }, 2000);
// setTimeout(() => {
//   console.log(timer.getTime());
// }, 5000);
