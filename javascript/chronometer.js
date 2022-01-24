class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++;
      // if (callback > ) {
      //   clearInterval(intervalId2);
      // }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here

    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return ('0' + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
