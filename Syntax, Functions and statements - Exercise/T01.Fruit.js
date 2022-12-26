function fruit(name, weight, pricePerKilo){
    let result = (weight/1000)*pricePerKilo;
    console.log(`I need $${result.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${name}.`)
}