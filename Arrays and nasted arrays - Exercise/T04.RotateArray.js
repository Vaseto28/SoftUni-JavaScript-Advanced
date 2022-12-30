function solve(array, rotations){
    let realRotations = rotations % array.length;

    for (let i = 0; i < realRotations; i++){
        let currElement = array.pop();
        array.unshift(currElement);
    }

    return array.join(' ');
}