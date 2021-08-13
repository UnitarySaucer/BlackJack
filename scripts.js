// Variables
const cardRanks = ['H', 'D', 'C', 'S']
const cardValue = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 1
}
const values = Object.values(cardValue)
const keys = Object.keys(cardValue)
const playerSide = document.getElementById('player-side')
const dealerSide = document.getElementById('dealer-side')
const playerC1 = document.getElementById('playerC1')
const playerC2 = document.getElementById('playerC2')
const dealerC1 = document.getElementById('dealerC1')
const dealerC2 = document.getElementById('dealerC2')
const startButton = document.getElementById('start')
const hitButton = document.getElementById('hit')

let deck = []

///////////////////////////////////////////////////////
// Functions

function createDeck() {
  for (let i = 0; i < cardRanks.length; i++) {
    for (let v = 0; v < keys.length; v++) {
      deck.push(`${keys[v]}${cardRanks[i]}`)
    }
  }
  return deck
}

function shuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
    let firstCard = deck[i]
    let randomNum = Math.floor(Math.random() * 52)
    deck[i] = deck[randomNum]
    deck[randomNum] = firstCard
  }
  return deck
}

function startCards(deck) {
  let playerCards = deck.splice(0, 2)
  let dealerCards = deck.splice(0, 2)
  playerC1.classList.add(`${playerCards[0]}`)
  playerC2.classList.add(`${playerCards[1]}`)
  dealerC1.classList.add(`${dealerCards[0]}`)
  dealerC2.classList.add(`${dealerCards[1]}`)
}

///////////////////////////////////////////////////////
// Invoking Starting Deck

let deck1 = createDeck()
let shuffled = shuffle(deck1)

///////////////////////////////////////////////////////
// Functions cont.

function dealCards(deck) {
  let newCard = deck.splice(0, 1)
  let newDiv = document.createElement('div')
  newDiv.classList.add('card', `${newCard[0]}`)
  playerSide.appendChild(newDiv)
}

///////////////////////////////////////////////////////
// Event Listeners

startButton.addEventListener('click', () => {
  startCards(deck1)
  playerC1.classList.remove('card-back')
  startButton.style.visibility = 'hidden'
  hitButton.style.visibility = 'visible'
})

hitButton.addEventListener('click', () => {
  dealCards(deck)
})

dealerC1.addEventListener('click', () => {
  let oldClass = dealerC1.classList[2]
  let newClass = playerC2.classList[2]
  playerC2.classList.add(oldClass)
  dealerC1.classList.add(newClass)
  playerC2.classList.remove(newClass)
  dealerC1.classList.remove(oldClass)
  playerC2.classList.remove('card-back')
})

dealerC2.addEventListener('click', () => {
  let oldClass = dealerC2.classList[2]
  let newClass = playerC2.classList[2]
  playerC2.classList.add(oldClass)
  dealerC2.classList.add(newClass)
  playerC2.classList.remove(newClass)
  dealerC2.classList.remove(oldClass)
  playerC2.classList.remove('card-back')
})
