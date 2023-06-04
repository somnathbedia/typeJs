"use strict";
//type
let firstName = 'somnath';
let lastName = 'Bedia';
// console.log(firstName.toUpperCase());
// console.log(firstName,lastName);
// Adding event to the button
let btn = document.getElementById('alertBtn');
let count = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert(`Event ocuured ${++count} times`);
});
// special type
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used
let random = 12465;
random = 'I am a random user';
// console.log(random);
//any disabled typed checking
let batter = 'Rohit Sharma';
