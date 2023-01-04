function solve(face, suit){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validSuits.includes(suit) || !validFaces.includes(face)){
        throw new Error();
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

console.log(solve('1', 'C'))