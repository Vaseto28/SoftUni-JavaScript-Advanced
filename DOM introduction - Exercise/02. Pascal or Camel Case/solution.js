function solve() {
    let words = document.getElementById("text").value.split(" ");
    let neededCase = document.getElementById("naming-convention").value;

    let result = "";
    if (neededCase == "Camel Case"){
        let firstWord = words[0].toLowerCase();
        result += firstWord;

        for (let i = 1; i < words.length; i++){
            let currWord = words[i].toLowerCase();
            let theRestOfTheWord = currWord.substring(1);
            let firstLetter = currWord[0].toUpperCase();
            result += firstLetter + theRestOfTheWord;
        }
    }
    else if (neededCase == "Pascal Case"){
        for (let i = 0; i < words.length; i++){
          let currWord = words[i].toLowerCase();
          let theRestOfTheWord = currWord.substring(1);
          let firstLetter = currWord[0].toUpperCase();
          result += firstLetter + theRestOfTheWord;
        }
    }
    else{
        result = "Error!"
    }

    document.getElementById("result").textContent = result;
}