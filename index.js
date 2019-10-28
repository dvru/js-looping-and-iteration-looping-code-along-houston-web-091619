// Code your solutions in this file

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

// const cards = ["Ada", "Brendan", "Ali"];

// function writeCards(cards) {
//     for (let i = 0; i < cards.length; i++) {
//       console.log(`Thank You, ${cards[i]} for the wonderful birthday gift!`);
//     }

// [
//     "Thank you, Ada, for the wonderful birthday gift!",
//     "Thank you, Brendan, for the wonderful birthday gift!",
//     "Thank you, Ali, for the wonderful birthday gift!"
//   ];

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }


function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
}   

//   countDown(10);
//   10
//   9
//   8
//   7
//   6
//   5
//   4
//   3
//   2
//   1
//   0

