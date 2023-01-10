// Get HTML elements
const copyrightYear = document.querySelector('#year');
const update = document.querySelector('#last-updated');

// Get Date
const date = new Date();
const day = date.getDate();
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

// Update HTML
document.querySelector('#year').textContent = year;
document.querySelector('#last-updated').textContent = fullDateTime;