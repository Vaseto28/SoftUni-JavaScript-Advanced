function solve(ticketsData, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let currInfo of ticketsData){
        let [destination, price, status] = currInfo.split('|');

        let currTicket = new Ticket(destination, Number(price), status);

        result.push(currTicket);
    }

    let sortedTickets;
    if (criteria === 'destination') {
        sortedTickets = result.sort((curr, next) =>
            curr.destination.localeCompare(next.destination)
        );
    } 
    else if (criteria === 'price') {
        sortedTickets = result.sort((curr, next) => curr.price - next.price);
    } 
    else {
        sortedTickets = result.sort((curr, next) =>
            curr.status.localeCompare(next.status)
        );
    }

    return sortedTickets;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));