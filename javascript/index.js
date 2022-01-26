const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}
function printSeconds() {
  // ... your code goes here
  secDecElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {}

function printSplit() {}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  // ... your code goes here
}

function setSplitBtn() {
  let split = chronometer.split();
  let newSplit = document.createElement('li');
  newSplit.innerText = split;
  newSplit.classList.add('single-split');
  const parent = document.querySelector('#splits');
  parent.appendChild(newSplit);
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  chronometer.reset();
  printTime();
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.start(printTime);
  } else {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'SPLIT') {
    setSplitBtn();
  } else {
    setResetBtn();
    clearSplits();
  }

  // ... your code goes here
});
