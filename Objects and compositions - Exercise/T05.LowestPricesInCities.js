function solve(data){
    let result = [];

    for (let rawData of data){
        let [town, product, price] = rawData.split(' | ');

        let obj = {
            town: town,
            product: product,
            price: Number(price)
        };

        let doesExist = true;
        for (let pr of result){
            if (pr.product === product){
                if (pr.price > price){
                    pr.price = obj.price;
                    pr.town = obj.town;
                }

                doesExist = false;
                break;
            }
        }
        if (doesExist){
            result.push(obj);
        }
    }

    for (let obj of result){
        console.log(`${obj.product} -> ${obj.price} (${obj.town})`);
    }
}