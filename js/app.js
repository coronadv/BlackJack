

// ---------------------------------functions--------------------------------------------//

// PLAY function
// First 2 cards will "randomly" be drawn from the "deck" array and placed in the  "playerHand" array and add
// the sum of the "playerHand" array to the "playerScore" variable. Run sum function to see if player wins, loses or
// draws with dealer. Run Dealer
// (display both cards showing on the screen.)

// (DEALER) another 2 cards will be "randomly" drawn from the "deck" array and placed in the "dealerHand" array and
// add the sum of the "dealerHand" array to a hidden "dealerScore" variable. Run a dealer sum function. Wait for player
// (display Front of card shown on one and back of card of the other.)

// Player sum function to calculate win loss or draw. If player reaches 5 cards player wins(5 card Nacho) (nacho libre audio 
// quote plays depending on status)

// Dealer sum function to provide some AI. If dealer sum is less then 18 hit. If dealer sum is between 18 and 21 stay.

//-----------------------------------Event Listeners--------------------------------------------------//

// when "HIT" is clicked function starts to randomly take a card from the "deck" array and place in the "playerHand"
// array. (display facing front) run sum function to see if win loss or draw. If all false then Dealer turn.

// when "STAND" is clicked players game is done and dealerHand runs.

// "DEAL" button resets the game at any point and starts play function

// ---------------------------------------Cashed Element Ref-----------------------------------------------------//
//                                      Storing the DOM element in a variable.
// const deck = document.getElementById('deck')



// ------------------------------------------App State (variables)-------------------------------------------//
//                         Objects the app needs to rememeber throughout execution

// deck Array or keys (the deck)
//      assign a value to each card in the "cards" array x 4: Maybe I will have to have a key of Cards with each card having
//      a value for each card for later summing. Ace can be 1 or 11(figure that out??)
let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = []
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value))
            }
        }
        return this.deck;
    }
    shuffle() {
        
        let counter = this.deck.length, temp, i;
        // This is called the Fisher-Yates algorithm. Flips indices within an array and randomize.
        while(counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    deal() {
        let hand = [];
        while(hand.length < 2) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
}

var playerHand;
var dealerHand;

function startGame() {
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();
deck.deal();


// playerHand Array
// var playerHand = [];

// playerScore variable
var playerScore = '';

// dealerHand Array
// var dealerHand = [];

// dealerScore variable
var dealerScore = '';


