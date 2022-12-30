function extract(content) {
    let text = document.getElementById(content).textContent;
    
    let pattern = /\([A-Za-z ]+\)/g;

    let matches = text.matchAll(pattern);
    
    let result = [];
    for (let match of matches){
        result.push(match[0]);
    }

    return result.join("; ");
}