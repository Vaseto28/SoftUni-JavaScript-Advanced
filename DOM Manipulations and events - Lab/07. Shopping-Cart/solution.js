function solve() {
   let products = Array.from(document.getElementsByClassName("product"));
   const breadPrice = 0.80;
   const milkPrice = 1.09;
   const tomatoesPrice = 0.99;

   let breads = 0;
   let milks = 0;
   let tomatoes = 0;

   for (let product of products){
      let addBtn = product.getElementsByClassName("product-add")[0];
      addBtn.addEventListener('click', addProduct);
   }

   function addProduct(event){
      let productName = event.target.parentElement.parentElement.getElementsByClassName("product-title")[0].textContent;
      
      if (productName == "Bread"){
         breads++;
      }
      else if (productName == "Milk"){
         milks++;
      }
      else if (productName == "Tomatoes"){
         tomatoes++;
      }

      document.getElementsByTagName("textarea")[0].textContent += `Added ${productName} for ${event.target.parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent} to the cart.\n`;
   }

   let checkoutBtn = document.getElementsByClassName("checkout")[0];
   
   checkoutBtn.addEventListener('click', checkout);

   function checkout(event){
      let totalPrice = breads * breadPrice + milks * milkPrice + tomatoes * tomatoesPrice;
      let listOfProducts = [];
      if (breads !== 0){
         listOfProducts.push("Bread");
      }

      if (milks !== 0){
         listOfProducts.push("Milk");
      }

      if (tomatoes !== 0){
         listOfProducts.push("Tomatoes");
      }

      document.getElementsByTagName("textarea")[0].textContent += `You bought ${listOfProducts.join(", ")} for ${totalPrice.toFixed(2)}.`

      let addBtns = document.getElementsByClassName("add-product");
      for (let btn of addBtns){
         btn.disabled = true;
      }

      checkoutBtn.disabled = true;
   }
}  