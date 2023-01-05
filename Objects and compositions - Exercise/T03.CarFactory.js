function solve(requests){
    let car = {};
    car["model"] = requests.model;
    
    if (requests.power <= 90){
        car["engine"] = {
            power: 90,
            volume: 1800
        };
    }
    else if (requests.power > 90 && requests.power <= 120){
        car["engine"] = {
            power: 120,
            volume: 2400
        };
    }
    else{
        car["engine"] = {
            power: 200,
            volume: 3500
        };
    }

    car["carriage"] = {
        type: requests.carriage,
        color: requests.color
    };

    if (requests.wheelsize % 2 == 0){
        car["wheels"] = [requests.wheelsize - 1, requests.wheelsize - 1, requests.wheelsize - 1, requests.wheelsize - 1];
    }
    else{
        car["wheels"] = [requests.wheelsize, requests.wheelsize, requests.wheelsize, requests.wheelsize];
    }

    return car;
}