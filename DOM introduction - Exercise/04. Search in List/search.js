function search() {
   let searchedText = document.getElementById("searchText").value;
   let cities = document.querySelectorAll("ul li");

   let matchesCount = 0;
   for (let city of cities){
      if (city.textContent.includes(searchedText)){
         matchesCount++;
         city.style.textDecoration = "underline";
         city.style.fontWeight = "bold";
      }
   }

   document.getElementById("result").textContent = `${matchesCount} matches found`;
}
