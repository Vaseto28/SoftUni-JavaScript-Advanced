function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedText = document.getElementById("searchField").value;
      let table = document.querySelectorAll("tbody tr");

      for (let row of table){
         if (row.className !== undefined){
            row.className = undefined;
         }

         let currElements = row.querySelectorAll("td");
         let studentName = currElements[0].textContent;
         let studentEmail = currElements[1].textContent;
         let studentCourse = currElements[2].textContent;

         if (studentName.includes(searchedText) || studentEmail.includes(searchedText) || studentCourse.includes(searchedText)){
            row.className = "select";
         }
      }

      searchedText.textContent = '';
   }
}