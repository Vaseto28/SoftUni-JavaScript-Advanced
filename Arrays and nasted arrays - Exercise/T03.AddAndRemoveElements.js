function solve(commands){
    let result = [];
    let initialNumber = 1;

    for (let i = 0; i < commands.length; i++){
        if (commands[i] == 'add'){
            result.push(initialNumber);
        }
        else{
            result.pop();
        }

        initialNumber++;
    }

    if (result.length === 0){
        console.log('Empty')
    }
    else{
        console.log(result.join('\n'));
    }
}