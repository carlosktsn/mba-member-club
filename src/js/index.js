import { getClient } from "./api.js";
import { displayInfo } from "./builder.js";
import { verifyInput, onlyNumbers } from "./form.js";
import '../css/index.css';

const cardInput = document.querySelector('#card-input');
const searchButton = document.querySelector('#search');

let cardId;
cardInput.addEventListener('input', event => {
    if (event.target.value) {
        cardId = onlyNumbers(event.target.value);
        cardInput.value = cardId;
        if (verifyInput(cardId)) {
            searchButton.removeAttribute('disabled');
        }
        else {
            searchButton.setAttribute('disabled', 'true');
        }
    }
    console.log(cardId);
});

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!searchButton.hasAttribute('disabled')) {
        let info = await getClient(cardId);
        if(info) {
            cardInput.value = "";
            cardId = "";
            searchButton.setAttribute("disabled", "true");
            displayInfo(info);
        }
    }   
});

