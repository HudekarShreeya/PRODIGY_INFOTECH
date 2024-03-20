let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startStop() {
  const startStopBtn = document.getElementById('startStopBtn');
  if (!isRunning) {
    startStopBtn.textContent = 'Stop';
    startTime = Date.now() - (lapCount > 1 ? localStorage.getItem('lapTime') : 0);
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  } else {
    startStopBtn.textContent = 'Start';
    clearInterval(timer);
    isRunning = false;
    localStorage.setItem('lapTime', Date.now() - startTime);
  }
}

function lap() {
  if (isRunning) {
    const display = document.querySelector('.display');
    const lapsList = document.querySelector('.laps');
    const lapTime = Date.now() - startTime;
    const lapMinutes = Math.floor((lapTime / 60000) % 60).toString().padStart(2, '0');
    const lapSeconds = Math.floor((lapTime / 1000) % 60).toString().padStart(2, '0');
    const lapMilliseconds = Math.floor((lapTime % 1000) / 10).toString().padStart(2, '0');
    const lapText = `${lapCount++}. ${lapMinutes}:${lapSeconds}:${lapMilliseconds}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapText;
    lapsList.appendChild(lapItem);
  }
}

function reset() {
  clearInterval(timer);
  const display = document.querySelector('.display');
  display.textContent = '00:00:00';
  lapCount = 1;
  const startStopBtn = document.getElementById('startStopBtn');
  startStopBtn.textContent = 'Start';
  isRunning = false;
  localStorage.removeItem('lapTime');
  const lapsList = document.querySelector('.laps');
  lapsList.innerHTML = '';
}

function updateDisplay() {
  const display = document.querySelector('.display');
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor((currentTime / 60000) % 60).toString().padStart(2, '0');
  const seconds = Math.floor((currentTime / 1000) % 60).toString().padStart(2, '0');
  const milliseconds = Math.floor((currentTime % 1000) / 10).toString().padStart(2, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
