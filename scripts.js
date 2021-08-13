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
const standButton = document.getElementById('stand')
const playerValue = document.getElementById('player-value')
const dealerValue = document.getElementById('dealer-value')

let deck = []
let newCardsValues = []
let dealerCards = []

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
  newCardsValues.push(checkValues(newDiv))
  let cardsSum = newCardsValues.reduce((a, b) => {
    return a + b
  }, 0)
  playerValue.textContent = `Value: ${cardsSum.toString()}`
  checkWin()
}

function checkWin() {
  let playerCardSum = newCardsValues.reduce((a, b) => {
    return a + b
  }, 0)
  if (playerCardSum > 21) {
    alert('Whoah you lost')
  }
}

function dealerC1Clicked() {
  let oldClass = dealerC1.classList[2]
  let newClass = playerC2.classList[2]
  playerC2.classList.add(oldClass)
  dealerC1.classList.add(newClass)
  playerC2.classList.remove(newClass)
  dealerC1.classList.remove(oldClass)
  playerC2.classList.remove('card-back')
  dealerC1.classList.remove('card-back')
  dealerC1.style.cursor = 'default'
  dealerC2.style.cursor = 'default'
  dealerC2.removeEventListener('click', dealerC2Clicked)
  let cardValue1 = checkValues(playerC1)
  let cardValue2 = checkValues(playerC2)
  newCardsValues.push(cardValue2)
  dealerCards.push(checkValues(dealerC1))
  let dealerValue1 = checkValues(dealerC1)
  let cardValueSum = cardValue1 + cardValue2
  playerValue.textContent = `Value: ${cardValueSum.toString()}`
  dealerValue.textContent = `Value: ${dealerValue1.toString()}`
}

function dealerC2Clicked() {
  let oldClass = dealerC2.classList[2]
  let newClass = playerC2.classList[2]
  playerC2.classList.add(oldClass)
  dealerC2.classList.add(newClass)
  playerC2.classList.remove(newClass)
  dealerC2.classList.remove(oldClass)
  playerC2.classList.remove('card-back')
  dealerC1.classList.remove('card-back')
  dealerC1.style.cursor = 'default'
  dealerC2.style.cursor = 'default'
  dealerC1.removeEventListener('click', dealerC1Clicked)
  let cardValue1 = checkValues(playerC1)
  let cardValue2 = checkValues(playerC2)
  newCardsValues.push(cardValue2)
  dealerCards.push(checkValues(dealerC1))
  let dealerValue1 = checkValues(dealerC1)
  let cardValueSum = cardValue1 + cardValue2
  playerValue.textContent = `Value: ${cardValueSum.toString()}`
  dealerValue.textContent = `Value: ${dealerValue1.toString()}`
}

function checkValues(card) {
  if (
    card.classList.contains('AceC') == true ||
    card.classList.contains('AceS') == true ||
    card.classList.contains('AceH') == true ||
    card.classList.contains('AceD') == true
  ) {
    return 1
  } else if (
    card.classList.contains('TwoC') == true ||
    card.classList.contains('TwoS') == true ||
    card.classList.contains('TwoH') == true ||
    card.classList.contains('TwoD') == true
  ) {
    return 2
  } else if (
    card.classList.contains('ThreeC') == true ||
    card.classList.contains('ThreeS') == true ||
    card.classList.contains('ThreeH') == true ||
    card.classList.contains('ThreeD') == true
  ) {
    return 3
  } else if (
    card.classList.contains('FourC') == true ||
    card.classList.contains('FourS') == true ||
    card.classList.contains('FourH') == true ||
    card.classList.contains('FourD') == true
  ) {
    return 4
  } else if (
    card.classList.contains('FiveC') == true ||
    card.classList.contains('FiveS') == true ||
    card.classList.contains('FiveH') == true ||
    card.classList.contains('FiveD') == true
  ) {
    return 5
  } else if (
    card.classList.contains('SixC') == true ||
    card.classList.contains('SixS') == true ||
    card.classList.contains('SixH') == true ||
    card.classList.contains('SixD') == true
  ) {
    return 6
  } else if (
    card.classList.contains('SevenC') == true ||
    card.classList.contains('SevenS') == true ||
    card.classList.contains('SevenH') == true ||
    card.classList.contains('SevenD') == true
  ) {
    return 7
  } else if (
    card.classList.contains('EightC') == true ||
    card.classList.contains('EightS') == true ||
    card.classList.contains('EightH') == true ||
    card.classList.contains('EightD') == true
  ) {
    return 8
  } else if (
    card.classList.contains('NineC') == true ||
    card.classList.contains('NineS') == true ||
    card.classList.contains('NineH') == true ||
    card.classList.contains('NineD') == true
  ) {
    return 9
  } else {
    return 10
  }
}
///////////////////////////////////////////////////////
// Event Listeners

startButton.addEventListener('click', () => {
  startCards(deck1)
  playerC1.classList.remove('card-back')
  startButton.style.visibility = 'hidden'
  hitButton.style.visibility = 'visible'
  standButton.style.visibility = 'visible'
  dealerC1.style.cursor = 'pointer'
  dealerC2.style.cursor = 'pointer'
  let cardValue = checkValues(playerC1)
  newCardsValues.push(cardValue)
  playerValue.textContent = `Value: ${cardValue.toString()}`
  dealerC1.addEventListener('click', dealerC1Clicked, {
    once: true
  })

  dealerC2.addEventListener('click', dealerC2Clicked, {
    once: true
  })
})

hitButton.addEventListener('click', () => {
  dealCards(deck)
})

standButton.addEventListener('click', () => {
  hitButton.style.visibility = 'hidden'
  dealerC2.classList.remove('card-back')
  dealerCards.push(checkValues(dealerC2))
  let cardsSum = dealerCards.reduce((a, b) => {
    return a + b
  }, 0)
  dealerValue.textContent = `Value: ${cardsSum}`
})
