window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish").addEventListener('click', makeAnOrder);

  let makeField = document.getElementById("make");
  let modelField = document.getElementById("model");
  let yearField = document.getElementById("year");
  let fuelField = document.getElementById("fuel");
  let originalCostField = document.getElementById("original-cost");
  let sellingPriceField = document.getElementById("selling-price");
  let offers = document.getElementById("table-body");
  let soldCars = document.getElementById("cars-list");
  let profitField = document.getElementById("profit");
  profitField.innerText = Number(0.00);

  function makeAnOrder(e){
    e.preventDefault();

    let make = makeField.value;
    let model = modelField.value;
    let year = yearField.value;
    let fuel = fuelField.value;
    let originalCost = Number(originalCostField.value);
    let sellingPrice = Number(sellingPriceField.value);

    if(!make || !model || !year || !fuel || !originalCost || !sellingPrice || originalCost > sellingPrice){
      return;
    } 

    let tr = document.createElement("tr");
    tr.classList.add("row");

    let makeTd = document.createElement("td");
    makeTd.innerText = make;

    let modelTd = document.createElement("td");
    modelTd.innerText = model;

    let yearTd = document.createElement("td");
    yearTd.innerText = year;

    let fuelTd = document.createElement("td");
    fuelTd.innerText = fuel;

    let originalCostTd = document.createElement("td");
    originalCostTd.innerText = originalCost;

    let sellingPriceTd = document.createElement("td");
    sellingPriceTd.innerText = sellingPrice;

    tr.appendChild(makeTd);
    tr.appendChild(modelTd);
    tr.appendChild(yearTd);
    tr.appendChild(fuelTd);
    tr.appendChild(originalCostTd);
    tr.appendChild(sellingPriceTd);

    let buttonsTd = document.createElement("td");

    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.innerText = "Edit";
    editBtn.addEventListener('click', editOffer);

    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn", "sell");
    sellBtn.innerText = "Sell";
    sellBtn.addEventListener('click', sellCar);

    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);

    tr.appendChild(buttonsTd);
    offers.appendChild(tr);

    makeField.value = '';
    modelField.value = '';
    yearField.value = '';
    fuelField.value = '';
    originalCostField.value = '';
    sellingPriceField.value = '';
  }

  function editOffer(e){
    let currOfferDetails = e.target.parentElement.parentElement.children;

    let make = currOfferDetails[0].innerText;
    let model = currOfferDetails[1].innerText;
    let year = currOfferDetails[2].innerText;
    let fuel = currOfferDetails[3].innerText;
    let originalCost = Number(currOfferDetails[4].innerText);
    let sellingPrice = Number(currOfferDetails[5].innerText);

    makeField.value = make;
    modelField.value = model;
    yearField.value = year;
    fuelField.value = fuel;
    originalCostField.value = originalCost;
    sellingPriceField.value = sellingPrice;

    e.target.parentElement.parentElement.remove();
  }

  let allPrices = 0;
  function sellCar(e){
    let currOfferDetails = e.target.parentElement.parentElement.children;

    let li = document.createElement("li");
    li.classList.add("each-list");

    let infoSpan = document.createElement("span");
    infoSpan.innerText = currOfferDetails[0].innerText + " " + currOfferDetails[1].innerText;

    let yearSpan = document.createElement("span");
    yearSpan.innerText = currOfferDetails[2].innerText;

    let priceSpan = document.createElement("span");
    priceSpan.innerText = Math.abs(Number(currOfferDetails[4].innerText) - Number(currOfferDetails[5].innerText));

    allPrices += Number(priceSpan.innerText);

    profitField.textContent = `${allPrices.toFixed(2)}`;

    li.appendChild(infoSpan);
    li.appendChild(yearSpan);
    li.appendChild(priceSpan);

    soldCars.appendChild(li);

    e.target.parentElement.parentElement.remove();
  }
}
