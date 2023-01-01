function solve() {
    let sentences = document.getElementById("input").value.split('.');
    let output = document.getElementById("output");
    
    for (let i = 0; i < sentences.length; i += 3){
        let firstSentence = sentences[i] + '.';
        let secondSentence = sentences[i + 1] + '.';
        let thirdSentence = sentences[i + 2] + '.';
        
        let text = "";
        if (firstSentence !== "undefined." && firstSentence.length > 0){
            text += firstSentence;
        }

        if (secondSentence !== "undefined." && secondSentence !== "." && secondSentence.length > 0){
            text += secondSentence;
        }

        if (thirdSentence !== "undefined." && thirdSentence !== "." && thirdSentence.length > 0){
            text += thirdSentence;
        }

        output.innerHTML += `<p> ${text} </p>`;
    }
}