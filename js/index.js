"use strict";

const button = document.getElementsByClassName('button');
const rating = document.getElementsByClassName('card__ratings');
const front = document.getElementsByClassName('card__front');
const back = document.getElementsByClassName('card__back');
const backText = document.getElementsByClassName('card__text--selected');

let selectedNumber = 0;

(function addEventListeners() {
    for (let i = 0; i < rating.length; i++) {
        rating[i].addEventListener("click", () => {
            selectedNumber = rating[i].value;
        })
    }
    button[0].addEventListener("click", () => {
        backText[0].innerHTML = `You selected ${selectedNumber} out of 5`
        back[0].style.opacity = "1";
    });
})();