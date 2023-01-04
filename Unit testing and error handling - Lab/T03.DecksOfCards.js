function deckOfCards(arr){
    function generateCard(cardDetails){
        let suit = cardDetails.split('')[cardDetails.length - 1];
        let face = '';

        if (cardDetails.length === 3){
            let rawFace = cardDetails.split('').splice(0, 2);

            for (let symbol of rawFace){
                face += symbol;
            }
        }
        else{
            face = cardDetails.split('').splice(0, 1).toString();
        }

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (!validSuits.includes(suit) || !validFaces.includes(face)){
             return `Invalid card: ${cardDetails}`;
        }

        if (suit === 'S'){
            return `${face}\u2660`;
        }
        else if (suit === 'H'){
            return `${face}\u2665`;
        }
        else if (suit === 'D'){
            return `${face}\u2666`;
        }
        else{
            return `${face}\u2663`;
        }
    }

    let arrOfreadyCards = [];
    for (let card of arr){
        arrOfreadyCards.push(generateCard(card));
    }

    for (let card of arrOfreadyCards){
        if (card.includes('Invalid card:')){
            console.log(card);
            return;
        }
    }
    
    console.log(arrOfreadyCards.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);