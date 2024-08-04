import { getClient } from "./api.js";

const cardInput = document.querySelector("#card-input");
const searchButton = document.querySelector("#search");

const userName = document.querySelector("#name");
const clientSince = document.querySelector("#client-since");
const cardIdShow = document.querySelector("#card-id");
const cutsRemaining = document.querySelector(".progress h2");
const totalCuts = document.querySelector(".history-header p");

let cardId: string;
if (cardInput) {
  cardInput.addEventListener("change", (event) => {
    if(event.target)
    cardId = (event.target as HTMLInputElement).value;
    console.log(cardId);
  });
}

if (searchButton) {
  searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let info = await getClient(cardId);
    console.log(info);
    displayInfo(info);
  });
}

function displayInfo(info) {
  if (userName) userName.textContent = info.name;
  if (clientSince) clientSince.textContent = `Cliente desde ${info.clientSince}`;
  if (cardIdShow) cardIdShow.textContent = `ID: ${info.id}`;
  if (cutsRemaining)cutsRemaining.innerHTML = `<strong>${info.loyaltyCard.cutsRemaining}</strong> cortes restantes`;
  if (totalCuts) totalCuts.textContent = `${info.loyaltyCard.totalCuts} cortes`;
}
