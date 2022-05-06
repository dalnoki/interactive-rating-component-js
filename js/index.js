"use strict";

const button = document.getElementsByClassName('button');
const front = document.getElementsByClassName('card__front');
const back = document.getElementsByClassName('card__back');
console.log(button);

button[0].addEventListener("click", () => {
    front[0].style.display = 'none';
    back[0].style.display = 'block';
});