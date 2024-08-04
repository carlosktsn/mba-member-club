const userName = document.querySelector("#name");
const clientSince = document.querySelector("#client-since");
const cardIdShow = document.querySelector("#card-id");
const cutsRemaining = document.querySelector(".progress h2");
const totalCuts = document.querySelector(".history-header p");

export function displayInfo(info) {
    clear();

    userName.textContent = info.name;
    clientSince.textContent = `Cliente desde ${info.clientSince}`;
    cardIdShow.textContent = `ID: ${info.id}`;
    cutsRemaining.innerHTML = `<strong>${info.loyaltyCard.cutsRemaining}</strong> cortes restantes`;
    totalCuts.textContent = `${info.loyaltyCard.totalCuts} cortes`;

    buildList(info.appointmentHistory);
    buildCard(info.loyaltyCard);
    buildProgress(info.loyaltyCard);
    removeHiddens();
}

function removeHiddens() {
    const hiddens = document.querySelectorAll(".hidden");
    hiddens.forEach(hidden => hidden.classList.remove("hidden"));
}

function buildCard(loyaltyCard) {
    const slots = document.querySelector('.card .slots');
    for (let n = 0; n < loyaltyCard.cutsNeeded; n++) {
        const item = document.createElement('div');
        item.classList.add('item');

        if (n < loyaltyCard.totalCuts) {
            item.classList.add('completed');
        }

        slots.appendChild(item);
    }
}

function buildProgress(loyaltyCard) {
    const progressInfo = document.querySelector(".progress-info");
    progressInfo.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`;
}   

function buildList(history) {
    const historyList = document.querySelector(".history ul");
    history.forEach(item => {
        const li = document.createElement("li");
        const date = document.createElement("p");
        date.classList.add('date');
        date.textContent = item.date;
        const hour = document.createElement("p");
        hour.classList.add('hour');
        hour.textContent = item.time;

        li.appendChild(date);
        li.appendChild(hour);

        historyList.appendChild(li);
    });
}

function clear() {
    const slots = document.querySelector(".card .slots");
    const historyList = document.querySelector(".history ul");
    
    slots.replaceChildren();
    historyList.replaceChildren();
}
