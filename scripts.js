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
  let deck = []

  for (let i = 0; i < cardRanks.length; i++) {
    for (let v = 0; v < cardValue.length; v++) {
      deck.push(`${cardValue[v]} of ${cardRanks[i]}`)
    }
  }
  return deck
}
