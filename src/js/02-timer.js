import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.getElementById('datetime-picker');

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert('Please choose a date in the future');
    } else {
      const startButton = document.querySelector('[data-start]');
      startButton.disabled = false;
    }
  },
});
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0;

timerDays.textContent = addLeadingZero(days);
timerHours.textContent = addLeadingZero(hours);
timerMinutes.textContent = addLeadingZero(minutes);
timerSeconds.textContent = addLeadingZero(seconds);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const startButton = document.querySelector('[data-start]');
let countdownInterval;

startButton.addEventListener('click', () => {
  const selectedDate = datePicker._flatpickr.selectedDates[0];
  const currentDate = new Date();

  if (!selectedDate || selectedDate <= currentDate) {
    alert('Please choose a date in the future');
    return;
  }

  startButton.disabled = true;

  let difference = selectedDate - currentDate;

  countdownInterval = setInterval(() => {
    const timeLeft = convertMs(difference);

    timerDays.textContent = addLeadingZero(timeLeft.days);
    timerHours.textContent = addLeadingZero(timeLeft.hours);
    timerMinutes.textContent = addLeadingZero(timeLeft.minutes);
    timerSeconds.textContent = addLeadingZero(timeLeft.seconds);

    timerDays.classList.add('red');
    timerHours.classList.add('red');
    timerMinutes.classList.add('red');
    timerSeconds.classList.add('red');

    if (timeLeft.days !== '00') {
      timerDays.classList.add('red');
    } else {
      timerDays.classList.remove('red');
    }
    if (timeLeft.hours !== '00') {
      timerHours.classList.add('red');
    } else {
      timerHours.classList.remove('red');
    }
    if (timeLeft.minutes !== '00') {
      timerMinutes.classList.add('red');
    } else {
      timerMinutes.classList.remove('red');
    }
    if (timeLeft.seconds !== '00') {
      timerSeconds.classList.add('red');
    } else {
      timerSeconds.classList.remove('red');
    }

    difference -= 1000;

    if (difference < 0) {
      clearInterval(countdownInterval);
      startButton.disabled = false;
    }
  }, 1000);
});
