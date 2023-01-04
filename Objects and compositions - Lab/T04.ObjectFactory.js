function factory(library, orders){
    let result = [];

    for (let order of orders){
        let newObj = Object.assign({}, order.template);

        for (let part of order.parts){
            newObj[part] = library[part];
        }

        result.push(newObj);
    }

    return result;
}