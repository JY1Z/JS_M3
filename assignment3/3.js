'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");

let htmlString = '';
for (const name of names) {
    htmlString += `<li>${name}</li>`;
}

targetElement.innerHTML = htmlString;
