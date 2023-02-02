// Get HTML elements
const copyrightYear = document.querySelector('#year');
const update = document.querySelector('#last-updated');

// Variables
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

// Get Date
const date = new Date();
const day = date.getDate();
const dayName = weekdays[date.getDay()];
const monthName = months[date.getMonth()]
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();
let seconds = 0
if (date.getSeconds() > 9) {
    seconds = date.getSeconds();
} else {
    seconds = '0' + date.getSeconds();
}
const fullDateTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`
const currentDate = `${dayName}, ${day} ${monthName} ${year}`

// Update HTML
document.querySelector('#current-date').textContent = currentDate;
document.querySelector('#year').textContent = year;
document.querySelector('#last-updated').textContent = fullDateTime;

function toggleMenu() {
    console.log('It worked!')
    document.getElementById('primaryNav').classList.toggle('open');
    // document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;