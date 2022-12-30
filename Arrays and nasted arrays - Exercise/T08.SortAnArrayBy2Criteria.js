function solve(texts){
    texts.sort();
    texts.sort((x, y) => x.length - y.length);

    console.log(texts.join('\n'))
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);