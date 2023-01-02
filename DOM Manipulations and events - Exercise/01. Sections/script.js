function create(words) {
   for (let word of words){
      let currDif = document.createElement('div');
      let currPara = document.createElement('p');
      currPara.innerText = word;
      
      currPara.style.display = "none";
      
      currDif.addEventListener('click', () => {
         currPara.style.display = "";
      });
      
      currDif.appendChild(currPara);
      document.getElementById('content').appendChild(currDif);
   }
}