let deck = []
function createDeck() {
  let cardRanks = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  let cardValue = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
    'Ace'
  ]

  for (let i = 0; i < cardRanks.length; i++) {
    for (let v = 0; v < cardValue.length; v++) {
      deck.push(`${cardValue[v]} of ${cardRanks[i]}`)
    }
  }
  return deck
}

function shuffle(newDeck) {
  for (let i = 0; i < newDeck.length; i++) {
    let firstCard = newDeck[i]
    let randomNum = Math.floor(Math.random() * 52)
    newDeck[i] = newDeck[randomNum]
    newDeck[randomNum] = firstCard
  }
}

const button = document.querySelector('button')
const card = document.getElementById('playerC1')

button.addEventListener('click', () => {
  card.classList.remove('cardback')
  card.classList.add('dA')
})
