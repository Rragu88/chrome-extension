let player = {
    name: "Ryan",
    chips: 145
}

let cards = [];
let sum =  0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const messageEL = document.getElementById('message-el');
const sumEL = document.getElementById('sum-el');
const cardsEL = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $'  + player.chips;

function reset() {
        message = 'Do you want to draw a new card?';
        sum = 0;
        cards = [];
        cardsEL.textContent = 'Cards: ';
        sumEL.textContent = `Sum: `;
        isAlive = false;
        hasBlackJack = false;
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    
    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 11 && randomCard <= 13) {
        return 10;
    } else {
        return randomCard;
    }
}

function startGame() {
    if (!isAlive) {
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard, secondCard);
        sum = firstCard + secondCard;
        renderGame();
    }
}

function renderGame() {
    cardsEL.textContent = 'Cards: ';
    for (let i=0; i < cards.length; i++) {
        cardsEL.textContent += `${cards[i]} `;
    }

    sumEL.textContent = `Sum: ${sum}`;

    if (sum < 21) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'Wohoo! You have blackjack.';
        hasBlackJack = true;
    } else {
        message = 'Oh no... You busted.';
        isAlive = false;
    }

    messageEL.textContent = message;
    console.log(message);
}

function newCard() {
    if (!hasBlackJack && isAlive) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
